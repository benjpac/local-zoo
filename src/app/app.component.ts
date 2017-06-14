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

  constructor(private animalService: AnimalService) {}
  
  ngOnInit() {
    this.animalService.getAnimals()
      .then(masterAnimalList => this.masterAnimalList = masterAnimalList)
  }

  selectedAnimal = null;
  
  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimalBool: boolean = false;

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
