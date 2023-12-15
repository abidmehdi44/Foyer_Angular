// chambre-update.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Chambre } from '../../../../models/chambre';
import { ChambreService } from '../../../../services/chambre-service.service';
import { Bloc } from '../../../../models/bloc';
import { Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-chambre-update',
  templateUrl: './chambre-update.component.html',
  styleUrls: ['./chambre-update.component.scss']
})
export class ChambreUpdateComponent implements OnInit {
  chambreForm: FormGroup;
  chambre: Chambre = {};
  selectedBloc: number | null = null;
  blocs: Bloc[] = [];
  imageFile: File | null = null;
  idBloc: number;

  constructor(
    private formBuilder: FormBuilder,
    private chambreService: ChambreService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadChambre();
    this.loadBlocs();
  }

  initializeForm(): void {
    this.chambreForm = this.formBuilder.group({
      numeroChambre: ['', [Validators.required]],
      typeC: ['', [Validators.required]],
      selectedBloc: ['', [Validators.required]]
    });
  }

  loadChambre(): void {
    const chambreId = +this.route.snapshot.paramMap.get('id');
    this.chambreService.getChambreById(chambreId).subscribe(
      (chambre) => {
        this.chambre = chambre;
        this.populateForm();
      },
      (error) => {
        console.error('Erreur lors de la récupération de la chambre:', error);
      }
    );
  }

  loadBlocs(): void {
    this.chambreService.getAllBlocs().subscribe(
      (blocs) => {
        this.blocs = blocs;
      },
      (error) => {
        console.error('Erreur lors de la récupération des blocs:', error);
      }
    );
  }

  populateForm(): void {
    console.log('Chambre avant la mise à jour du formulaire :', this.chambre);

    this.chambreForm.patchValue({
      numeroChambre: this.chambre.numeroChambre,
      typeC: this.chambre.typeC,
      selectedBloc: this.chambre.bloc.idBloc
    });

    console.log('Formulaire mis à jour avec les valeurs :', this.chambreForm.value);
  }

  submit(form: FormGroup): void {
    if (form.invalid) {
      console.error('Formulaire invalide. Veuillez remplir tous les champs correctement.');
      return;
    }

    const updatedChambre: Chambre = {
      idChambre: this.chambre.idChambre,
      numeroChambre: form.value.numeroChambre,
      typeC: form.value.typeC,
      bloc: {
        idBloc: form.value.selectedBloc,
        nomBloc: '',
        capaciteBloc: undefined
      }
    };

    this.uploadImage(this.chambre.idChambre).pipe(
      switchMap(() => this.chambreService.updateChambre(this.chambre.idChambre, updatedChambre))
    ).subscribe(
      (result) => {
        console.log('Chambre mise à jour avec succès:', result);
        this.router.navigate(['/admin/chambredetails']);
      },
      (error) => {
        console.error('Erreur lors de la mise à jour de la chambre:', error);
      }
    );
  }

  uploadImage(chambreId: number): Observable<any> {
    if (this.imageFile) {
      const formData = new FormData();
      formData.append('image', this.imageFile);

      return this.chambreService.uploadImg(formData, chambreId);
    } else {
      return of(null);
    }
  }

  onImageSelected(event: any): void {
    this.imageFile = event.target.files[0];
  }
}
