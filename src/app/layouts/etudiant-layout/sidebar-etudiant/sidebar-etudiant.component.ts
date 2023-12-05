import { Component, OnInit } from '@angular/core';
declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/reservations', title: 'reservations',  icon:'pe-7s-note2', class: '' },
];
@Component({
  selector: 'app-sidebar-etudiant',
  templateUrl: './sidebar-etudiant.component.html',
  styleUrls: ['./sidebar-etudiant.component.scss']
})
export class SidebarEtudiantComponent implements OnInit {

  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };

}
