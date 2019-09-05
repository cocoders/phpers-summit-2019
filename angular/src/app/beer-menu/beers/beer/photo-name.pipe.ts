import { Pipe, PipeTransform } from '@angular/core';
import { Beer } from '../beer';

@Pipe({
  name: 'photoName'
})
export class PhotoNamePipe implements PipeTransform {
  transform(value: string, ...args: any[]): any {
      if  (!value) {
        return '';
      }

      return value.replace(' ', '_').toLowerCase();
  }
}
