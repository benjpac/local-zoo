import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { EditAnimalComponent } from './edit-animal/edit-animal.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { AgePipe } from './age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AnimalListComponent,
    EditAnimalComponent,
    AddAnimalComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
