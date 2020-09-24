import { Component, OnInit } from '@angular/core';
import { NavBarLink } from 'src/app/components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  links: NavBarLink[] = [
    {icon: 'groups', route: '#'},
    {icon: 'search', route: '#'},
    {icon: 'settings', route: '#'},
    {icon: 'help_outline', route: '#'}
  ];
  
  constructor() { 

  }

  ngOnInit(): void {
  }

}
