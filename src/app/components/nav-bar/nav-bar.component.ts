import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface NavBarLink {
  route: string;
  icon: string;
}


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})


export class NavBarComponent implements OnInit {

  @Input()
  links: NavBarLink[];



  constructor() {


  }
  ngOnInit(): void {
  }

}
