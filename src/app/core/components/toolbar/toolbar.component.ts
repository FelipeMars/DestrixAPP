import { Component, OnInit } from '@angular/core';
import { NavItem } from '../../models/nav-item.model';

@Component({
  selector: 'core-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  public navList: NavItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.loadNavList();
  }

  private loadNavList(): void {
    this.navList = [
      {
        route: '/',
        icon: 'pi-home',
        name: 'Início',
        exact: true,
      },
      {
        route: '/transacoes/novo',
        icon: 'pi-plus',
        name: 'Nova transação',
        exact: false,
      },
      {
        route: '/transacoes/extrato',
        icon: 'pi-list',
        name: 'Extrato',
        exact: true,
      },
      {
        route: '/perfil',
        icon: 'pi-user',
        name: 'Perfil',
        exact: true,
      },
    ];
  }
}
