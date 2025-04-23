import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonInput, IonButton, IonCol, IonRow } from "@ionic/angular/standalone";
import { authService } from '../../services/auth.service';
import { User } from '../../interfaces/user.interface';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
  imports: [IonRow, IonCol, IonButton, IonInput, RouterModule, ReactiveFormsModule]
})
export class RegisterPageComponent  implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: authService,
    private alertController: AlertController
  ) { 
    this.form = this.fb.group({
      nombre: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  ngOnInit() {
    
  }

  async presentSuccessAlert(msg: string) {
    const alert = await this.alertController.create({
      header: 'Registro exitoso',
      message: msg,
      buttons: ['OK']
    });
  
    await alert.present();
  }

  async presentErrorAlert(msg: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: msg,
      buttons: ['OK']
    });
  
    await alert.present();
  }
  
  

  onRegister(){
    let msg = ''
    if(this.form.valid){
      const user: User = {
        email: this.form.value.email,
        password: this.form.value.password,
        nombre: this.form.value.nombre
      }
      this.auth.createUser(user).subscribe({
        next: (resp) => {
          this.presentSuccessAlert('¡Tu cuenta ha sido creada correctamente!');
        },
        error: (err) => {
          console.log(err)
          this.presentErrorAlert(err.error.message);
        }
      });
      
    }
    
  }

}
