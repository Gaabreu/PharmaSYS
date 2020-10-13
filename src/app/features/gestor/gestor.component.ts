import { Component, OnInit } from '@angular/core';
import { NavBarLink } from 'src/app/components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-gestor',
  templateUrl: './gestor.component.html',
  styleUrls: ['./gestor.component.scss']
})
export class GestorComponent implements OnInit {
  
  links: NavBarLink[] = [
    {icon: 'groups', route: '#'},
    {icon: 'search', route: '#'},
    {icon: 'settings', route: '#'},
    {icon: 'help_outline', route: '#'}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
