import { ROUTES, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { FoyerdetailComponent } from './foyer-layout/foyerdetail/foyerdetail.component';
import { FoyerAddComponent } from './foyer-layout/foyeradd/foyeradd.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { FoyerupdateComponent } from './foyer-layout/foyerupdate/foyerupdate.component';


export const AdminLayoutRoutes: Routes = [
    { path: '',      component: AdminLayoutComponent,
children: [
{ path: 'foyer', redirectTo: 'foyerdetail', pathMatch: 'full' },
{ path: 'foyer/add', component: FoyerAddComponent },
{ path: 'foyerdetail', component: FoyerdetailComponent},
{ path: 'foyer/update/:id', component: FoyerupdateComponent}
// nhotou path lehna mtea3 nes lkol 
] },
    
];