import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../../interfaces/user-interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor() {
    // Intenta cargar el usuario del localStorage al iniciar
    const user = localStorage.getItem('user');
    if (user) {
      this.currentUserSubject.next(JSON.parse(user));
    }
  }

  logout(): void {
    localStorage.removeItem('user');
    alert('here')
  }

  checkAuthentication(): Observable<boolean> {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      // Si hay un usuario almacenado, consideramos que está autenticado
      return of(true);
    }
    // Si no hay usuario almacenado, no está autenticado
    return of(false);
  }
}
