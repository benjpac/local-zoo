import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Animal } from '../animal.model';


@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() editClickSender = new EventEmitter();

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.editClickSender.emit(animalToEdit);
  }

  filterByAge = null;

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

}
