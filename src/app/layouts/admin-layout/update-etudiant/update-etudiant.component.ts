import { Component, OnInit } from '@angular/core';
import {Etudiant} from "../../../models/etudiant";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EtudiantServiceService} from "../../../services/etudiant-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UniversiteService} from "../../../services/universite-service.service";
import {Universite} from "../../../models/universite";

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.scss']
})
export class UpdateEtudiantComponent implements OnInit {
  universites : Universite[]
  etudiant : Etudiant
  id :any
  EtudiantForm = new FormGroup({
    nomEt: new FormControl('', [Validators.required, Validators.minLength(3)]), // Adding a minimum length condition
    prenomEt: new FormControl('', [Validators.required, Validators.minLength(3)]), // Adding a minimum length condition
    cin: new FormControl('', [Validators.required, Validators.pattern(/^\d{8}$/)]),
    dateNaissance: new FormControl('', [Validators.required]),
    universite: new FormControl('', [Validators.required]),
  });
  constructor( private etudiantService : EtudiantServiceService ,private universiteService:UniversiteService, private router: Router, private router1: ActivatedRoute ) { }

  ngOnInit(): void {
    this.router1.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.etudiantService.GetEtudiantById(this.id).subscribe(res => {this.etudiant = res;
        console.log('etbyid' , res)})
    })
    this.getalluniv() ;
  }
  updateEtudiant() {
    this.etudiantService.modifyEtudiant( this.etudiant)
        .subscribe(data => {
          console.log("update et " , data);
          this.etudiant = data;
        });
    this.router.navigateByUrl('/admin/etudiants')

  }



  submit(f) {
    this.updateEtudiant();
  }

  getalluniv(){
    this.universiteService.getAllUniversite().subscribe(res => {this.universites = res
      console.log("hay elista",this.universites) } ) ;
  }
}