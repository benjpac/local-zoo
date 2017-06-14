import { Component, Input, OnInit } from '@angular/core';
import { Animal } from './animal.model';
import { AnimalService } from './animal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AnimalService ]
})
export class AppComponent implements OnInit {
  masterAnimalList: Animal[] = [];
  selectedAnimal = null;
  addAnimalBool = false;

  constructor(private animalService: AnimalService) {}

  ngOnInit() {
    this.animalService.getAnimals()
      .then(masterAnimalList => this.masterAnimalList = masterAnimalList)
  }

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimalButtonClicked() {
    this.addAnimalBool = true;
  }

  addAnimalSender(addAnimalFromChild: Animal) {
    if (!addAnimalFromChild) {
      this.addAnimalBool = false;
    } else {
      this.masterAnimalList.push(addAnimalFromChild);
      this.addAnimalBool = false;
    }
  }

}
