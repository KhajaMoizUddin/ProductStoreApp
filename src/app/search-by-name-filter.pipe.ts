import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './IProduct';

@Pipe({
  name: 'searchByNameFilter'
})
export class SearchByNameFilterPipe implements PipeTransform {

  transform(value: IProduct[],args: string): any {
    if(!args)
    return value;

    return value.filter(i=>i.ProductName.toLowerCase().indexOf(args.toLowerCase()) >-1);
  }
}
