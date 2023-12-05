import { Component, OnInit } from '@angular/core';
declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/etudiants', title: 'Etudiants',  icon: 'pe-7s-user', class: '' },
  { path: '/universites', title: 'universites',  icon:'pe-7s-user', class: '' },
  { path: '/admin/foyerdetail', title: 'foyers',  icon:'pe-7s-note2', class: '' },
  { path: '/blocs', title: 'blocs',  icon:'pe-7s-news-paper', class: '' },
  { path: '/chambres', title: 'chambres',  icon:'pe-7s-science', class: '' },
  { path: '/reservations', title: 'reservations',  icon:'pe-7s-map-marker', class: '' },
];
@Component({
  selector: 'app-sidenav-admin',
  templateUrl: './sidenav-admin.component.html',
  styleUrls: ['./sidenav-admin.component.scss']
})
export class SidenavAdminComponent implements OnInit {


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
