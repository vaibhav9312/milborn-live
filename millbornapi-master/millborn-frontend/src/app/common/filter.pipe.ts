import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return [];
searchText = searchText.toLowerCase();
return items.filter( it => {
        if(it.ProductTitle&&it.ProductTitle.toLowerCase().includes(searchText)){
          return it
        }
        if(it.Group&&it.Group.toLowerCase().includes(searchText)){
          return it
        }
        if(it.SubGroup&&it.SubGroup.toLowerCase().includes(searchText)){
          return it
        }
        if(it.CategoryName&&it.CategoryName.toLowerCase().includes(searchText)){
          return it
        }
        if(it.SubCategory&&it.SubCategory.toLowerCase().includes(searchText)){
          return it
        }
       
     
    });
   }
}