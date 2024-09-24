import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";

import { NavbarComponent } from "./navbar/navbar.component";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatButtonModule } from '@angular/material/button';
const matImports = [MatToolbarModule, MatIconModule, MatSidenavModule, MatButtonModule]

@NgModule({
    declarations: [NavbarComponent],
    imports: [CommonModule, FormsModule, RouterModule, ...matImports],
    exports: [NavbarComponent]
})

export class HomeModule {}