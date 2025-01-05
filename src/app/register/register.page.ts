import { Component, OnInit } from '@angular/core';
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
    private toastController: ToastController
  ) {
    this.registerForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async onRegister() {
    if (this.registerForm.valid) {
      const toast = await this.toastController.create({
        message: 'Te has registrado exitosamente',
        duration: 2000,
        color: 'success',
      });
      await toast.present();
      this.router.navigate(['/home']);
    } else {
      console.log('Formulario inválido');
    }
  }
  
  ngOnInit() {
  }

}
