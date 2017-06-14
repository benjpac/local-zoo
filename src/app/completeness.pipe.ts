import { Pipe, PipeTransform } from '@angular/core';

import { Animal } from './animal.model';

@Pipe({
  name: 'completeness'
})
export class CompletenessPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
