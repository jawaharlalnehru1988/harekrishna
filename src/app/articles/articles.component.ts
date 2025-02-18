import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {CdkAccordionModule} from '@angular/cdk/accordion';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  imports: [MatSidenavModule, CdkAccordionModule,  MatToolbarModule, MatButtonModule, MatIconModule],
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;

  constructor() { }

  ngOnInit(): void { }

  


}
