import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { MatDialogModule } from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule  } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

import { MatSidenavModule } from '@angular/material/sidenav' 
import { MatListModule  } from '@angular/material/list' 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';

const matImports = [
  MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule,
  MatIconModule, MatCardModule, MatSidenavModule, MatListModule,
  MatToolbarModule, MatTableModule, MatChipsModule, MatDialogModule   ]

@NgModule({
  declarations: [LoginComponent, RegisterComponent, LayoutPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,    
    ToastrModule.forRoot(),
    ...matImports
  ],
  exports: [LoginComponent, RegisterComponent, LayoutPageComponent]
})
export class AuthModule { }
