import { Component, OnInit } from '@angular/core';
import {Etudiant} from "../../../models/etudiant";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EtudiantServiceService} from "../../../services/etudiant-service.service";
import {Router} from "@angular/router";
import {UniversiteService} from "../../../services/universite-service.service";
import {Universite} from "../../../models/universite";

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.scss']
})
export class AddEtudiantComponent implements OnInit {


  universites : Universite[]
  etudiant : Etudiant
  EtudiantForm = new FormGroup({
    nomEt: new FormControl('', [Validators.required, Validators.minLength(3)]), // Adding a minimum length condition
    prenomEt: new FormControl('', [Validators.required, Validators.minLength(3)]), // Adding a minimum length condition
    cin: new FormControl('', [Validators.required, Validators.pattern(/^\d{8}$/)]),
    dateNaissance: new FormControl('', [Validators.required]),
    universite: new FormControl('', [Validators.required]),
  });

  constructor( private etudiantService : EtudiantServiceService , private  universiteService : UniversiteService, private router: Router) { }

  ngOnInit(): void {
    this.getalluniv() ;
  }
  submit() {
    if (this.EtudiantForm.valid) {
      this.etudiantService.addEtudiant(this.EtudiantForm.value).subscribe((res => {
        this.router.navigateByUrl('/admin/etudiants')
      }));
    }
    }

    getalluniv(){
    this.universiteService.getAllUniversite().subscribe(res => {this.universites = res
      console.log("hay elista",this.universites) } ) ;
    }
}