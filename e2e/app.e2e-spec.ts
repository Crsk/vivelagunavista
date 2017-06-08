import { VivelagunavistaPage } from './app.po';

describe('vivelagunavista App', () => {
  let page: VivelagunavistaPage;

  beforeEach(() => {
    page = new VivelagunavistaPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
