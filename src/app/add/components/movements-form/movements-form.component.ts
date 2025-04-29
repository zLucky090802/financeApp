import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonContent, IonItem, IonLabel, IonInput, IonTextarea, IonDatetime, IonButton, IonSelect, IonSelectOption, IonTitle } from "@ionic/angular/standalone";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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


@Component({
  selector: 'app-movements-form',
  templateUrl: './movements-form.component.html',
  styleUrls: ['./movements-form.component.scss'],
  imports:[IonHeader, IonToolbar, IonContent, IonItem, IonLabel, IonInput, IonTextarea, IonDatetime, IonButton, IonSelect, IonSelectOption, IonTitle, CommonModule, ReactiveFormsModule]
})
export class MovementsFormComponent  implements OnInit {
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
  ) {
    this.user$ =  this.store.select(selectUser);
    this.user$.subscribe(user=>{
      this.user = user;
    })
    this.getCuentasPersonalizadas(this.user.id!);
    this.getCategoriaByUser(this.user.id!)
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
  async showSuccessAlert() {
    const alert = await this.alertController.create({
      header: '¡Éxito!',
      message: 'La transacción fue registrada correctamente.',
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
  
  getCuentasPersonalizadas(id:number){
     this.accountService.getCuentasPersonalizadas(id).subscribe(cuentas=>{
      this.cuentas = cuentas;
      console.log(cuentas);
     })
   }

   getCategoriaByUser(id:number){
    this.categoriaService.getCuentasByUser(id).subscribe(categorias=>{
      this.categorias = categorias;
      console.log(this.categorias)
    })
   }

   onSubmit() {
    if (this.form.valid) {
      const formData: MovementForm = this.form.value;
  
      // Armamos el objeto sin 'id' ni 'fecha', que serán gestionados por el backend
      const movimientoCompleto: Omit<Movements, 'id' | 'fecha'> = {
        ...formData,
        usuario_id: this.user.id!
      };
  
      this.movementService.createMovement(movimientoCompleto).subscribe({
        next: (res:any) => this.showSuccessAlert(),
        error: (err) => {
          console.error('Error al crear movimiento:', err);
        }
      });
    } else {
      this.form.markAllAsTouched();
      console.warn('Formulario inválido');
    }
  }
  
  


}
