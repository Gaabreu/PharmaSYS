import { Component, OnInit } from '@angular/core';
import { NavBarLink } from 'src/app/components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

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
