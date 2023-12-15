import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-universitedetail-view',
  templateUrl: './universitedetail-view.component.html',
  styleUrls: ['./universitedetail-view.component.scss']
})
export class UniversitedetailViewComponent implements OnInit {

  constructor() { }
  @Input()
  
  totalUniversites!: number;

  ngOnInit(): void {
  }
}


