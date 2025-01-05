import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private afAuth: AngularFireAuth, 
    private toastController: ToastController
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async onLogin() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      try {
        const userCredential = await this.afAuth.signInWithEmailAndPassword(email, password);

        if (userCredential) {
          const toast = await this.toastController.create({
            message: '¡Bienvenido!',
            duration: 2000,
            color: 'success',
          });
          await toast.present();

          this.router.navigate(['/usuario']);
        }
      } catch (error: any) {
        const toast = await this.toastController.create({
          message: 'Correo o contraseña incorrectos',
          duration: 2000,
          color: 'danger',
        });
        await toast.present();
        console.error('Error de login:', error);
      }
    }
  }

  ngOnInit() {
  }

}
