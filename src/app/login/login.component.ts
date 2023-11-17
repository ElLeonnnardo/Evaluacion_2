// login.component.ts
import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Ajusta la importación según tu estructura

@Injectable({
    providedIn: 'root',
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onLoginSuccess(user: AuthService): void {
    this.authService.login(user);
    this.router.navigate(['/ruta-protegida']);
  }
}
