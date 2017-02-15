import { ExcelToJsonAngular2Page } from './app.po';

describe('excel-to-json-angular2 App', function() {
  let page: ExcelToJsonAngular2Page;

  beforeEach(() => {
    page = new ExcelToJsonAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
