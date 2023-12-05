import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantLayoutRoutingModule } from './etudiant-layout-routing.module';
import { EtudiantLayoutComponent } from './etudiant-layout.component';
import {FooterModule} from "../../shared/footer/footer.module";
import {NavbarModule} from "../../shared/navbar/navbar.module";
import { SidebarEtudiantComponent } from './sidebar-etudiant/sidebar-etudiant.component';




@NgModule({
  declarations: [
    EtudiantLayoutComponent,
    SidebarEtudiantComponent,
  ],
  imports: [
    CommonModule,
    EtudiantLayoutRoutingModule,
    FooterModule,
    NavbarModule,

  ],

})
export class EtudiantLayoutModule { }
