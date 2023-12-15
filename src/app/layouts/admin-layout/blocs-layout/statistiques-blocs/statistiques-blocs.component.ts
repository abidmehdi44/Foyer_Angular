import { Component, OnInit, ElementRef, AfterViewInit, Input } from '@angular/core';
import { BlocService } from 'app/services/bloc-service.service';
import { ActivatedRoute, Router } from '@angular/router';

declare var Chart: any;

@Component({
  selector: 'app-statistics',
  templateUrl: './statistiques-blocs.component.html',
  styleUrls: ['./statistiques-blocs.component.scss']
})
export class StatistiquesBlocsComponent implements OnInit, AfterViewInit {
  @Input() blocsData: any = {
    labels: [],
    capacities: [],
    affectedCount: 0,
    unaffectedCount: 0
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private el: ElementRef,
    private blocService: BlocService
  ) {}

  ngOnInit() {
    this.loadBlocsData();
  }

  ngAfterViewInit() {
    this.createChart();
    this.createDonutChart();
  }

  loadBlocsData() {
    this.blocService.getAllBloc().subscribe(
      (data) => {
        this.blocsData.labels = data.map((bloc) => bloc.nomBloc);
        this.blocsData.capacities = data.map((bloc) => bloc.capaciteBloc);
        this.blocsData.affectedCount = data.filter((bloc) => bloc.foyer !== null).length;
        this.blocsData.unaffectedCount = data.filter((bloc) => bloc.foyer === null).length;

        this.createChart();
      },
      (error) => {
        console.error('Erreur lors du chargement des données des blocs:', error);
      }
    );
  }

  createChart() {
    const canvas: any = this.el.nativeElement.querySelector('#myChart');
    const ctx = canvas.getContext('2d');

    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.blocsData.labels,
        datasets: [
          {
            label: 'Capacité des blocs',
            data: this.blocsData.capacities,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    const statsDiv = document.getElementById('statistics');
    statsDiv.innerHTML = `<p>Nombre de blocs affectés : ${this.blocsData.affectedCount}</p>` +
                         `<p>Nombre de blocs non affectés : ${this.blocsData.unaffectedCount}</p>`;
  }

  createDonutChart() {
    this.blocService.getAllBloc().subscribe(
      (data) => {
        this.blocsData.affectedCount = data.filter((bloc) => bloc.foyer !== null).length;
        this.blocsData.unaffectedCount = data.filter((bloc) => bloc.foyer === null).length;

        const donutCanvas: any = this.el.nativeElement.querySelector('#donutChart');
        const donutCtx = donutCanvas.getContext('2d');

        const donutChart = new Chart(donutCtx, {
          type: 'doughnut',
          data: {
            labels: ['Affectés', 'Non affectés'],
            datasets: [
              {
                data: [this.blocsData.affectedCount, this.blocsData.unaffectedCount],
                backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
                borderWidth: 1
              }
            ]
          },
          options: {
            cutout: '30%', 
            responsive: true,
            maintainAspectRatio: false
          }
        });
      },
      (error) => {
        console.error('Erreur lors du chargement des données des blocs:', error);
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/admin/blocs']);
  }
}
