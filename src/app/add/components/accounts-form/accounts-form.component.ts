import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonContent,
  IonTitle,
  IonToolbar,
  IonHeader,
  IonItem,
  IonLabel,
  IonInput,
  IonCheckbox,
  IonButton,
  IonSelect,
  IonSelectOption,
  IonRow,
  IonCol,
} from '@ionic/angular/standalone';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/auth/interfaces/user.interface';
import { AccountsService } from 'src/app/finance/accounts.service';
import { AccountResponse } from 'src/app/finance/interfaces/account-response.interfaces';
import { selectUser } from 'src/app/store/auth/auth.selector';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accounts-form',
  templateUrl: './accounts-form.component.html',
  styleUrls: ['./accounts-form.component.scss'],
  imports: [
    IonContent,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonItem,
    IonLabel,
    IonInput,
    IonCheckbox,
    IonButton,
    IonSelect,
    IonSelectOption,
    CommonModule,
    ReactiveFormsModule,
    IonRow,
    IonCol,
  ],
})
export class AccountsFormComponent implements OnInit {
  cuentas: AccountResponse[] = [];
  form: FormGroup;
  user$: Observable<any>;
  user!: User;
  account!: AccountResponse;

  constructor(
    private accountService: AccountsService,
    private fb: FormBuilder,
    private store: Store,
    private alertController: AlertController,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      saldo: [0, [Validators.required]],
      cuenta_base_id: [null, Validators.required],
    });
    this.user$ = this.store.select(selectUser);
    this.user$.subscribe((user) => {
      this.user = user;
    });
    
  }

  ngOnInit() {
    this.getCuentasPredeterminadas();
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        const accountId = Number(id);
        this.getAccountById(accountId); 
      
      }
      
    });
  }

  getCuentasPredeterminadas() {
    this.accountService.getCuentasPredeterminadas().subscribe((cuentas) => {
      this.cuentas = cuentas;
    });
  }

  onTipoChange(event: any) {
    const tipoSeleccionado = event.detail.value;
    const cuenta = this.cuentas.find((c) => c.tipo === tipoSeleccionado);
    if (cuenta) {
      this.form.patchValue({ cuenta_base_id: cuenta.id });
    }
  }

  onSubmit() {
    const formData = this.form.value;
    const cuenta: AccountResponse = {
      usuario_id: this.user.id!,
      nombre: formData.nombre,
      tipo: formData.tipo,
      cuenta_base_id: Number(formData.cuenta_base_id) + 1,
      saldo_inicial: Number(formData.saldo),
    };

 

    if(this.account){
      const cuentaActualizada: AccountResponse = {
        ...this.account, // conserva usuario_id y demás campos que no vienen del formulario
        nombre: formData.nombre,
        tipo: formData.tipo,
        saldo_inicial: Number(formData.saldo),
        cuenta_base_id: Number(formData.cuenta_base_id) - 1, // le restás 1 porque antes le habías sumado
      };
    
      this.accountService.actualizarCuenta(this.account.id!, cuentaActualizada).subscribe({
        next: (resp) => this.showSuccessAlert('Cuenta actualizada exitosamente!'),
        error: (err) => this.showErrorAlert(err),
      });
    }else{
      
      this.accountService.crearCuenta(cuenta).subscribe({
        next: (res) => this.showSuccessAlert('Cuenta creada exitosamente!'),
        error: (err) => {
          console.log(err);
        },
      });
      this.form.reset();
    }
  }

  async showSuccessAlert(msg:string) {
    const alert = await this.alertController.create({
      header: '¡Éxito!',
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async showErrorAlert(error: any) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'No se pudo registrar la transacción. ' + (error?.message || ''),
      buttons: ['Cerrar'],
    });

    await alert.present();
  }

  getAccountById(id: number) {
    this.accountService.getCuentaById(id).subscribe((account) => {
      this.account = account;
      this.updateForm(this.account)
    });
  }

  updateForm(account: AccountResponse) {
    this.form.patchValue({
      nombre: account.nombre,
      tipo: account.tipo,
      saldo: account.saldo_inicial,
      cuenta_base_id: account.cuenta_base_id+1,
    });
    
  }
}
