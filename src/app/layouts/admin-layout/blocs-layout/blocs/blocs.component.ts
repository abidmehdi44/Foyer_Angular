  import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
  import { Router } from '@angular/router';
  import { Bloc } from 'app/models/bloc';
  import { BlocService } from 'app/services/bloc-service.service';

  @Component({
    selector: 'app-blocs',
    templateUrl: './blocs.component.html',
    styleUrls: ['./blocs.component.scss']
  })
  export class BlocsComponent implements OnInit {
    blocs: Bloc[] = [];
    filteredBlocs: Bloc[] = [];
    searchTerm: string = '';
    sortKey: string = '';  
    reverse: boolean = false; 
    blocsData: any = { labels: [], capacities: [], affectedCount: 0, unaffectedCount: 0 };
    p: number = 1;
    itemsPerPage: number =3;

    constructor(private router: Router, private blocService: BlocService, private cdRef: ChangeDetectorRef) {}

    ngOnInit() {
      this.loadBlocs();
      this.blocsData = { labels: [], capacities: [], affectedCount: 0, unaffectedCount: 0 };
    }

    loadBlocs() {
      this.blocService.getAllBloc().subscribe(
        (data) => {
          this.blocs = data;
          this.filteredBlocs = this.blocs;
          this.cdRef.detectChanges();
        },
        (error) => {
          console.error('Error fetching blocs:', error);
        }
      );
    }

      updateBloc(idBloc: number) {
        this.router.navigate(['/admin/blocs/modifier', idBloc]);
      }

    deleteBloc(id: number) {
      this.blocService.deleteBloc(id).subscribe(
        () => {
          console.log('Bloc deleted successfully.');
          this.loadBlocs(); 
        },
        (error) => {
          console.error('Error deleting bloc:', error);
        }
      );
    }

    affecterAFoyer(idBloc: number) {
      this.router.navigate(['/admin/blocs/affecterFoyer', idBloc]);
    }

    onSearchTermChange() {
      this.filteredBlocs = this.blocs.filter(bloc =>
        bloc.nomBloc.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    sort(key: string) {
      if (this.sortKey === key) {
        this.reverse = !this.reverse;
      } else {
        this.sortKey = key;
        this.reverse = false;
      }

      this.filteredBlocs.sort((a, b) => {
        const valueA = this.getPropertyValue(a, key);
        const valueB = this.getPropertyValue(b, key);

        if (valueA < valueB) {
          return this.reverse ? 1 : -1;
        } else if (valueA > valueB) {
          return this.reverse ? -1 : 1;
        } else {
          return 0;
        }
      });
    }

    private getPropertyValue(obj: any, key: string): any {
      const keys = key.split('.');
      let value = obj;

      for (const k of keys) {
        value = value[k];
      }

      return value;
    }
  }
