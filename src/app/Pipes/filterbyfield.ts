import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterByField',
  pure: false
})
export class FilterByFieldPipe implements PipeTransform {
  transform(items: any[], filter: any): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => item[filter.field].indexOf(filter.val) !== -1);
  }
}
