import { Pipe, PipeTransform } from '@angular/core';

import { Animal } from './animal.model';

@Pipe({
  name: 'age',
  pure: false
})

export class AgePipe implements PipeTransform {

  transform(input: Animal[], selectedAge)  {
    var output: Animal[] = [];
    if (selectedAge === "allAge") {
      for (var i = 0; i < input.length; i++) {
        output.push(input[i]);
      }
      return output;
    } else if (selectedAge === "under2Age") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age <= 2) {
          output.push(input[i]);
        }
      }
      return output
    } else if (selectedAge === "over2Age") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age > 2) {
          output.push(input[i]);
        }
      }
      return output;
    } 
  }

}
