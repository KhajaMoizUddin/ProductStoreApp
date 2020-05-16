import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './IProduct';

@Pipe({
  name: 'searchByPriceFilter'
})
export class SearchByPriceFilterPipe implements PipeTransform {

  transform(value: IProduct[], args: number): any {
    if(!args)
    return value;

    return value.filter(i=>i.Price > args);
  }

}
