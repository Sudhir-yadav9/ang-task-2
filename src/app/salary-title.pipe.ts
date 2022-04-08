import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salaryTitle'
})
export class SalaryTitlePipe implements PipeTransform {

 
  transform(value: any, searchTerm: any): any {
    if(value.length ===0){
      return value
    }
    return value.filter(function(search: { salary: string; }){
      return search.salary.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    })
  }
}
