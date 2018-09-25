import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any, type: any): any {
    if (value && type === 'HT') {
        return value.total_HT();
    }
    if (value && type === 'TTC') {
      return value.total_TTC();
    }
    return '';
  }

}
