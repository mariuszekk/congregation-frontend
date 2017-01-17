export class Article {
  votes: number;
  title: string;
  link: string;

  constructor(title: string, link: string, votes?: number) {
    this.votes = 10 || 0;
    this.link = link;
    this.title = title;
  }


  voteUp() {
    this.votes += 1;
  }

  voteDown() {
    this.votes -= 1;
  }

  domain(): string {
    try {
      const link: string = this.link.split('//')[1];
      return link.split('/')[0];
    } catch (err) {
      return null;
    }
  }
}
