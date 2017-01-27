import {Component, OnInit, EventEmitter} from '@angular/core';
import {Article} from "./article.model";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  inputs: ['article'],
  outputs: ['putRingOnIt'],

  host: {
    class: 'row'
  }
})
export class ArticleComponent implements OnInit {

  article: Article;
  putRingOnIt: EventEmitter<string>;

  constructor() {
    this.article = new Article("Broadcasting TV - On demand", "http://jw.org", 10);
    this.putRingOnIt = new EventEmitter();
  }


  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown() {
    this.article.voteDown();
    return false;
  }

  liked() {
    var greeting = `Hello ${this.article.votes}`;
    this.putRingOnIt.emit(greeting);
    return false;
  }

  ngOnInit() {
  }

}
