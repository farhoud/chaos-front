import { ChaosAppPage } from './app.po';

describe('chaos-app App', () => {
  let page: ChaosAppPage;

  beforeEach(() => {
    page = new ChaosAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
