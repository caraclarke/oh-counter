import { OhCounterPage } from './app.po';

describe('oh-counter App', function() {
  let page: OhCounterPage;

  beforeEach(() => {
    page = new OhCounterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
