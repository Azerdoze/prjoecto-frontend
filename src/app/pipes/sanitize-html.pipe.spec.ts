import { sanitizeHtmlPipe } from './sanitize-html.pipe';
import { DomSanitizer } from '@angular/platform-browser';

describe('SanitizeHtml.Pipe', () => {

  it('should create an instance', () => {
    let teste: DomSanitizer;
    expect(new sanitizeHtmlPipe(teste)).toBeTruthy();
  });
});
