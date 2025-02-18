import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { ArtExp, Articles } from './articles';
import {MatListModule} from '@angular/material/list';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  imports: [MatSidenavModule, MatListModule, CdkAccordionModule,  MatToolbarModule, MatButtonModule, MatIconModule],
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent extends Articles {
  items = ['Scientific Proofs', 'Logical Answers', 'Dos and Donts', 'Moral Behaviours', 'Tackling Arguments'];
  expandedIndex = 0;
  subTopicList: ArtExp[] = [];
projectedContent: SafeHtml = ``;
  constructor(private sanitizer: DomSanitizer) {
    super();
   }

  ngOnInit(): void {
    this.projectedContent = this.sanitizer.bypassSecurityTrustHtml(this.articlesExplained[0].article);
   }

  topicExpanded(event:string){
  
switch(event){
  case 'Scientific Proofs':
    this.subTopicList = this.articlesExplained;
    break;
  case 'Logical Answers':
    this.subTopicList = this.logicalAnswers;
    break;
  case 'Dos and Donts':
    this.subTopicList = this.dosAndDontsInLife;
    break;
  case 'Moral Behaviours':
    this.subTopicList = this.articlesExplained;
    break;
  case 'Tackling Arguments':
    this.subTopicList = this.articlesExplained;
    break;
  default:
    this.subTopicList = this.articlesExplained;
    break;
}
 

  }


}
