import { Injectable } from '@angular/core';

import { ANIMALS } from './mock-animals';

@Injectable()
export class AnimalService {
  getAnimals() {
    return Promise.resolve(ANIMALS);
  }
}
