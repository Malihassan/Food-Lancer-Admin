import { Pipe, PipeTransform } from '@angular/core';
import { Seller } from '../../interfaces/seller';

@Pipe({
  name: 'searchFilterTable'
})
export class SearchFilterTablePipe implements PipeTransform {

  transform(sellers: Seller[],searchValue:string): Seller[] {            
    if (!sellers || !searchValue) {
      return sellers;
    }
    return sellers.filter(seller =>
      seller.userName.toLowerCase().includes(searchValue.toLocaleLowerCase())
      ||seller.email.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      ||seller.coverageArea.governorateName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      ||seller.coverageArea.regionName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      ||seller.status.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      )
  }
}
