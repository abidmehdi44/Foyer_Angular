import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NguiMapModule} from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';
import { SidenavAdminComponent } from './sidenav-admin/sidenav-admin.component';
import { FoyerdetailComponent } from './foyer-layout/foyerdetail/foyerdetail.component';
import { FoyerAddComponent } from './foyer-layout/foyeradd/foyeradd.component';
import { FoyerdeleteComponent } from './foyer-layout/foyerdelete/foyerdelete.component';
import { FoyerupdateComponent } from './foyer-layout/foyerupdate/foyerupdate.component';



@NgModule({
  declarations: [
    HomeComponent,
    SidenavAdminComponent,
    FoyerdetailComponent,
    FoyerAddComponent,
    FoyerdeleteComponent,
    FoyerupdateComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})
  ],


  exports: [
    SidenavAdminComponent
  ]
})

export class AdminLayoutModule {}
