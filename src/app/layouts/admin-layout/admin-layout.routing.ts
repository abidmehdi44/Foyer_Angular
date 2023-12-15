import { ROUTES, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { FoyerdetailComponent } from './foyer-layout/foyerdetail/foyerdetail.component';
import { FoyerAddComponent } from './foyer-layout/foyeradd/foyeradd.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { FoyerupdateComponent } from './foyer-layout/foyerupdate/foyerupdate.component';
import { BlocsComponent } from './blocs-layout/blocs/blocs.component';
import { ModifierBlocsComponent } from './blocs-layout/modifier-blocs/modifier-blocs.component';
import { AjouterBlocsComponent } from './blocs-layout/ajouter-blocs/ajouter-blocs.component';
import { AffectationBlocsComponent } from './blocs-layout/affectation-blocs/affectation-blocs.component';
import { ChambreAddComponent } from './Chambre-layout/chambre-add/chambre-add.component';
import { ChambreUpdateComponent } from './Chambre-layout/chambre-update/chambre-update.component';
import { ChambreDetailsComponent } from './Chambre-layout/chambre-details/chambre-details.component';
import { UniversiteAddComponent } from './universite-layout/universite-add/universite-add.component';
import { UniversiteUpdateComponent } from './universite-layout/universite-update/universite-update.component';
import { UniversiteDeleteComponent } from './universite-layout/universite-delete/universite-delete.component';
import { UniversiteDetailComponent } from './universite-layout/universite-detail/universite-detail.component';
import {UniversiteAffecterComponent} from "./universite-layout/universite-affecter/universite-affecter.component";
import { StatistiquesBlocsComponent } from './blocs-layout/statistiques-blocs/statistiques-blocs.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';


export const AdminLayoutRoutes: Routes = [
    { path: '',      component: AdminLayoutComponent,
children: [
{ path: 'foyer', redirectTo: 'foyerdetail', pathMatch: 'full' },
{ path: 'foyer/add', component: FoyerAddComponent },
{ path: 'foyerdetail', component: FoyerdetailComponent},
{ path: 'foyer/update/:id', component: FoyerupdateComponent},
{ path: 'blocs', component: BlocsComponent }, 
{ path: 'blocs/modifier/:idBloc', component: ModifierBlocsComponent }, 
{ path: 'blocs/ajouter', component: AjouterBlocsComponent }, 
{ path :'blocs/affecterFoyer/:idBloc',component: AffectationBlocsComponent },
{ path: 'blocs/statestique',component :StatistiquesBlocsComponent},
{ path: 'chambre', redirectTo: 'chambredetails', pathMatch: 'full' },
{ path: 'chambre/add', component: ChambreAddComponent },
{ path: 'chambredetails', component: ChambreDetailsComponent},
{ path: 'chambredetails/updatechambre/:id', component: ChambreUpdateComponent },
{ path: 'universite', redirectTo: 'universitedetail', pathMatch: 'full' },
{ path: 'universite/add', component: UniversiteAddComponent },
{ path: 'universitedetail', component: UniversiteDetailComponent},
{ path: 'universite/update/:id', component: UniversiteUpdateComponent},
{ path: 'universitedetail/affecterFoyer/:idUniversite/:nomUniversite', component: UniversiteAffecterComponent },
//etudiant
{ path: 'Etudiant', redirectTo: 'etudiants', pathMatch: 'full' },
{ path: 'etudiants',component:EtudiantsComponent},
{ path: 'addEtudiant',component:AddEtudiantComponent},
{ path: 'updateEtudiant/:id', component: UpdateEtudiantComponent},


] },
    
];