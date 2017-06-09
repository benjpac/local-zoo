import { LocalZooPage } from './app.po';

describe('local-zoo App', () => {
  let page: LocalZooPage;

  beforeEach(() => {
    page = new LocalZooPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
