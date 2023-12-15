import { Component, OnInit } from '@angular/core';
import {Etudiant} from "../../../models/etudiant";
import {Router} from "@angular/router";
import {EtudiantServiceService} from "../../../services/etudiant-service.service";

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.scss']
})
export class EtudiantsComponent implements OnInit {
  etudiants : Etudiant[]
  p: number = 1;
  itemsPerPage: number =2;
  total:any;


  constructor( private etudiantservice : EtudiantServiceService, private router: Router) { }

  ngOnInit(): void {
  this.getAllEtudiants();
  }

  getAllEtudiants(){
    this.etudiantservice.GetAllEtudiants().subscribe(res => {this.etudiants = res
    this.total=res.length;
    } ) ;
  }

  DeleteEtudiant(e : Etudiant){
    this.etudiantservice.deleteEtudiant(e.idEtudiant).subscribe(res => {console.log(res);this.getAllEtudiants() ;
    })}

   
    
}