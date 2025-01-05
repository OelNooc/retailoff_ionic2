import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastController: ToastController,
    private afAuth: AngularFireAuth
  ) {
    this.registerForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async onRegister() {
    if (this.registerForm.valid) {
      const { email, password } = this.registerForm.value;

      try {
        await this.afAuth.createUserWithEmailAndPassword(email, password);

        const toast = await this.toastController.create({
          message: 'Te has registrado exitosamente',
          duration: 2000,
          color: 'success',
        });
        await toast.present();

        this.router.navigate(['/home']);
      } catch (error: any) {
        const toast = await this.toastController.create({
          message: this.getErrorMessage(error.code),
          duration: 2000,
          color: 'danger',
        });
        await toast.present();
      }
    } else {
      console.log('Formulario inválido');
    }
  }

  getErrorMessage(errorCode: string): string {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        return 'El correo electrónico ya está en uso.';
      case 'auth/invalid-email':
        return 'El correo electrónico no es válido.';
      case 'auth/weak-password':
        return 'La contraseña es muy débil.';
      default:
        return 'Ocurrió un error al registrarte.';
    }
  }
  
  ngOnInit() {
  }

}
