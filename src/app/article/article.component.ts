import {Component, OnInit, Input} from '@angular/core';
import {Article} from "./article.model";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],

  host: {
    class: 'row'
  }
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;

  constructor() {
    this.article = new Article("Broadcasting TV - On demand", "http://jw.org", 10);
  }


  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown() {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
  }

}
