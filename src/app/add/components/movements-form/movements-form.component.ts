import { CommonModule } from '@angular/common';
import { Component, OnInit, TransferState } from '@angular/core';
import { IonicModule} from "@ionic/angular";
import { Store } from '@ngrx/store';
import { forkJoin, Observable } from 'rxjs';
import { User } from 'src/app/auth/interfaces/user.interface';
import { AccountsService } from 'src/app/finance/accounts.service';
import { AccountResponse } from 'src/app/finance/interfaces/account-response.interfaces';
import { MovementsService } from 'src/app/shared/services/movements.service';
import { selectUser } from 'src/app/store/auth/auth.selector';
import { Categorias } from '../../interfaces/categorias.interface';
import { CategoriaService } from '../../service/categoria.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MovementForm } from '../../interfaces/movements-form.interface';
import { Movements } from 'src/app/shared/interfaces/movements.interface';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Transaccion } from 'src/app/statistics/interfaces/Transaccion.interface';


@Component({
  selector: 'app-movements-form',
  templateUrl: './movements-form.component.html',
  styleUrls: ['./movements-form.component.scss'],
  imports:[IonicModule, ReactiveFormsModule]
})
export class MovementsFormComponent  implements OnInit {
  transaccionId: number | null = null;
  user$!: Observable<any>;
  user!: User;
  cuentas: AccountResponse [] = [];
  categorias:Categorias [] =[];
  form!: FormGroup;

  constructor(
    private accountService: AccountsService,
    private movementService: MovementsService,
    private store: Store,
    private categoriaService: CategoriaService,
    private fb: FormBuilder,
    private alertController: AlertController,
    private route: ActivatedRoute
  ) {
    this.user$ = this.store.select(selectUser);
  this.user$.subscribe(user => {
    this.user = user;

    const cuentas$ = this.getCuentasPersonalizadas(user.id!);
    const categorias$ = this.getCategoriaByUser(user.id!);

    forkJoin([cuentas$, categorias$]).subscribe(([cuentas, categorias]) => {
      this.cuentas = cuentas;
      this.categorias = categorias;

      // Ya podemos buscar el movimiento
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.transaccionId = +id;
        this.getMovementById(this.transaccionId);
      }
    });
  });
  }
  
  ngOnInit() {
    this.form = this.fb.group({
      tipo: ['', Validators.required],
      cuenta_id: ['', Validators.required],
      categoria_id: ['', Validators.required],
      monto: [null, [Validators.required, Validators.min(0.01)]],
      descripcion: [''],
    });
  
    
  }
  
  async showSuccessAlert(mensaje:string) {
    const alert = await this.alertController.create({
      header: '¡Éxito!',
      message: mensaje,
      buttons: ['OK']
    });
  
    await alert.present();
  }
  
  async showErrorAlert(error: any) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'No se pudo registrar la transacción. ' + (error?.message || ''),
      buttons: ['Cerrar']
    });
  
    await alert.present();
  }
  
  // getCuentasPersonalizadas(id:number){
  //    this.accountService.getCuentasPersonalizadas(id).subscribe(cuentas=>{
  //     this.cuentas = cuentas;
  //     console.log(cuentas);
  //    })
  //  }

  getCuentasPersonalizadas(id: number) {
    return this.accountService.getCuentasPersonalizadas(id);
  }

  getCategoriaByUser(id: number) {
    return this.categoriaService.getCuentasByUser(id);
  }

  onSubmit() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      console.warn('Formulario inválido');
      return;
    }
  
    const formData: MovementForm = this.form.value;
    const movimientoCompleto: Omit<Movements, 'id' | 'fecha'> = {
      ...formData,
      usuario_id: this.user.id!
    };
  
    if (this.transaccionId) {
      this.updateMovement(movimientoCompleto); // Asegúrate de pasar el ID aquí
      this.showSuccessAlert('Movimiento actualizado.')
    } else {
      this.movementService.createMovement(movimientoCompleto).subscribe({
        next: (res: any) => this.showSuccessAlert('Movimiento correctamente guardada.'),
        error: (err) => this.showErrorAlert(err)
      });
    }
  }
  

  updateForm(movement:any){
   const transaccion: Transaccion = movement.transaccion;   
     
     this.form.patchValue({
       tipo: transaccion.tipo,
       cuenta_id: transaccion.cuenta_id , // si no se encuentra, deja vacío
       categoria_id: transaccion.categoria_id,
       monto: transaccion.monto,
       descripcion: transaccion.descripcion || '',
     });
   }
     
   getMovementById(id:number){
    this.movementService.getMovementById(id).subscribe((movement)=>{
      
      this.updateForm(movement);
    })
   }

   updateMovement(Movement:Movements){
       this.movementService.updateMovement(this.transaccionId!,Movement).subscribe(resp=>{
        console.log(resp)
       })
   }
  }
  
  
 
 


  
  


