import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  public currentUser: Observable<User | null> = this.currentUserSubject.asObservable();

  constructor() {
    // Intenta cargar el usuario del localStorage al iniciar
    const user = localStorage.getItem('user');
    if (user) {
      this.currentUserSubject.next(JSON.parse(user));
    }
  }

  register(user: User): Observable<User> {
    // Aquí puedes agregar lógica para verificar si el usuario ya existe
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSubject.next(user);
    return of(user); // Retorna el usuario registrado
  }

  login(username: string, password: string): Observable<User | null> {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user: User = JSON.parse(storedUser);
      // Verifica las credenciales
      if (user.username === username && user.password === password) {
        this.currentUserSubject.next(user); // Almacena el usuario autenticado
        return of(user); // Retorna el usuario autenticado
      }
    }
    return of(null); // Credenciales inválidas
  }

  logout(): void {
    localStorage.removeItem('user');
    this.currentUserSubject.next(null); // Limpia el usuario actual
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
