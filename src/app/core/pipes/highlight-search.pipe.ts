import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightSearch',
})
export class HighlightSearchPipe implements PipeTransform {

  transform(text: string, substr: string): string {
    if (!text) {
      return '';
    }

    if (!substr) {
      return text;
    }

    const regExp = new RegExp(substr, 'gi');

    return text.replace(regExp, `<mark class="highlight">${substr}</mark>`);
  }

}
