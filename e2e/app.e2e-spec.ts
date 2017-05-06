import { VoterAppPage } from './app.po';

describe('voter-app App', () => {
  let page: VoterAppPage;

  beforeEach(() => {
    page = new VoterAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
