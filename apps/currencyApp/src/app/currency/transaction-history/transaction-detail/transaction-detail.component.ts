import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../interfaces/transaction-interface';
import { TransactionHistoryService } from '../../../services/currency/transaction-history.service';
import { ActivatedRoute, Router} from '@angular/router';
import { map, Observable, of, Subscription, switchMap, take, tap, timer } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { EditPermissionsService } from '../../../services/currency/edit-permissions.service';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrl: './transaction-detail.component.css',
})
export class TransactionDetailComponent implements OnInit{
  transactionId: number;
  transaction: Transaction | undefined;
  displayedColumns: string[] = ['country', 'code', 'rate', 'symbol'];
  private timerSubscription: Subscription | undefined;
  constructor(
    private toastr: ToastrService,
    private editPermissionService: EditPermissionsService,
    private transactionService:TransactionHistoryService,
    private route: ActivatedRoute, 
    private router: Router  ){
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.transaction = this.transactionService.getTransactionById(+id);
      }
    });
  }

  editTransaction(transactionId: number){
    if (transactionId !== null) {
      this.router.navigate(['/transactions-edit', transactionId]);
    }
  }


  ngOnDestroy(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe(); 
    }
  }


 
}
