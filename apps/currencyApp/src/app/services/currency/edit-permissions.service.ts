import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { TransactionHistoryService } from './transaction-history.service';
import { Transaction } from '../../currency/interfaces/transaction-interface';

@Injectable({
  providedIn: 'root'
})
export class EditPermissionsService {
  private permissionCache: { [key: number]: BehaviorSubject<boolean> } = {};

  constructor(private transactionService: TransactionHistoryService) {}

  getEditPermission(transaction: Transaction): Observable<boolean> {

    // Verificar si ya tenemos el permiso en caché
    if (!this.permissionCache[transaction.id]) {
      const subject = new BehaviorSubject<boolean>(this.canEdit(transaction.date)); // Inicializa el permiso

      // Usar timer para validar el permiso cada 30 segundos
      timer(0, 30000).pipe(
        switchMap(() => {
          const newPermission = this.canEdit(transaction.date);
          if (!newPermission) {
            this.transactionService.updateTransaction({ ...transaction, status: 'Completed' });
          }
          return of(newPermission);
        })
      ).subscribe(newPermission => {
        subject.next(newPermission); // Emitir el nuevo permiso
      });

      this.permissionCache[transaction.id] = subject; // Guardar en el caché
    }

    return this.permissionCache[transaction.id].asObservable(); // Retornar el observable del subject
  }

  private canEdit(transactionDate: string): boolean {
    const createdAt = new Date(transactionDate);
    const currentTime = new Date();
    const differenceInMinutes = (currentTime.getTime() - createdAt.getTime()) / (1000 * 60);
    
    return differenceInMinutes < 2; // Se puede editar si han pasado menos de 2 minutos
  }
}
