import { CongregationFrontendPage } from './app.po';

describe('congregation-frontend App', function() {
  let page: CongregationFrontendPage;

  beforeEach(() => {
    page = new CongregationFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
