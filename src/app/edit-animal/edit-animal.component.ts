import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../animal.model';
import { AnimalService } from '../animal.service';


@Component({
  selector: 'app-edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.css']
})
export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();
}
