import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Animal } from '../animal.model';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent {
  @Input() addAnimalBool: boolean;
  @Output() animalSender = new EventEmitter;

  submitForm(
    species: string, 
    name: string, 
    age: number, 
    diet: string, 
    location: string, 
    caretakers: number, 
    sex: string, 
    likes: string, 
    dislikes: string) {
    var animalToAdd: Animal = new Animal(
      species, 
      name, 
      age, 
      diet, 
      location, 
      caretakers, 
      sex, 
      likes, 
      dislikes);
    this.animalSender.emit(animalToAdd);
  }

  cancelForm() {
    this.animalSender.emit();
  }
}
