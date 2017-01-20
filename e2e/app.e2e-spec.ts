import { AngularStormpathExamplePage } from './app.po';

describe('angular-stormpath-example App', function() {
  let page: AngularStormpathExamplePage;

  beforeEach(() => {
    page = new AngularStormpathExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
