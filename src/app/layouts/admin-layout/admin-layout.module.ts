import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { NguiMapModule} from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';
import { SidenavAdminComponent } from './sidenav-admin/sidenav-admin.component';
import { FoyerdetailComponent } from './foyer-layout/foyerdetail/foyerdetail.component';
import { FoyerAddComponent } from './foyer-layout/foyeradd/foyeradd.component';
import { FoyerdeleteComponent } from './foyer-layout/foyerdelete/foyerdelete.component';
import { FoyerupdateComponent } from './foyer-layout/foyerupdate/foyerupdate.component';
import { BlocsComponent } from './blocs-layout/blocs/blocs.component';
import { AjouterBlocsComponent } from './blocs-layout/ajouter-blocs/ajouter-blocs.component';
import { AffectationBlocsComponent } from './blocs-layout/affectation-blocs/affectation-blocs.component';
import { ModifierBlocsComponent } from './blocs-layout/modifier-blocs/modifier-blocs.component';
import { StatistiquesBlocsComponent } from './blocs-layout/statistiques-blocs/statistiques-blocs.component';
import { ChambreAddComponent } from './Chambre-layout/chambre-add/chambre-add.component';
import { ChambreDetailsComponent } from './Chambre-layout/chambre-details/chambre-details.component';
import { ChambreUpdateComponent } from './Chambre-layout/chambre-update/chambre-update.component';
import { UniversiteAddComponent } from './universite-layout/universite-add/universite-add.component';
import { UniversiteAffecterComponent } from './universite-layout/universite-affecter/universite-affecter.component';
import { UniversiteDeleteComponent } from './universite-layout/universite-delete/universite-delete.component';
import { UniversiteDetailComponent } from './universite-layout/universite-detail/universite-detail.component';
import { UniversiteUpdateComponent } from './universite-layout/universite-update/universite-update.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';

import {NgxPaginationModule} from "ngx-pagination";
import { FoyerdetailviewComponent } from './foyer-layout/foyerdetailview/foyerdetailview.component';
import { OuputComponent } from './foyer-layout/ouput/ouput.component';
import { UniversitedetailViewComponent } from './universite-layout/universitedetail-view/universitedetail-view.component';


@NgModule({
  declarations: [
    HomeComponent,
    SidenavAdminComponent,
    FoyerdetailComponent,
    FoyerAddComponent,
    FoyerdeleteComponent,
    FoyerupdateComponent,
    BlocsComponent,
    AjouterBlocsComponent,
    AffectationBlocsComponent,
    ModifierBlocsComponent,
    StatistiquesBlocsComponent,
    ChambreAddComponent,
    ChambreDetailsComponent,
    ChambreUpdateComponent,
    UniversiteAddComponent,
    UniversiteAffecterComponent,
    UniversiteDeleteComponent,
    UniversiteDetailComponent,
    UniversiteUpdateComponent,
    EtudiantsComponent,
    AddEtudiantComponent,
    UpdateEtudiantComponent,
    FoyerdetailviewComponent,
    OuputComponent,
    UniversitedetailViewComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'}),
    NgxPaginationModule
  ],


  exports: [
    SidenavAdminComponent
  ]
})

export class AdminLayoutModule {}
