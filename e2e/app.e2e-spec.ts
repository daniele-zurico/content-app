import { ContentAppPage } from './app.po';

describe('content-app App', function() {
  let page: ContentAppPage;

  beforeEach(() => {
    page = new ContentAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
