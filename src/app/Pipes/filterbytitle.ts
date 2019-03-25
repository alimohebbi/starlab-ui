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
    console.log(filter.field)
    console.log(filter.val)
    console.log(items)
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(item => item[filter.field].indexOf(filter.val) !== -1);
  }
}
