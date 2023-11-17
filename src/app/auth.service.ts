// auth.service.ts
import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences'; // Ajusta la importación según tu estructura

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;

  constructor() {}

  login(user: AuthService): void {
    this.loggedIn = true;
  }

  logout(): void {
    this.loggedIn = false;
    
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
