import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";


@Pipe({ name: 'sanitizeHtml', pure: false })
export class sanitizeHtmlPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {}
    transform(description) {
        return this.sanitizer.bypassSecurityTrustHtml(description);
    }
}
