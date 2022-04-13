import { Component } from '@angular/core';
import { PetsService } from './core/services/services';
import { Pets } from '../app/core/services/models';

@Component({
  selector: 'petstore-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title: string = 'orbital-demo';

  public pets: Pets = [];

  constructor(private petService: PetsService) {
    petService.listPets().subscribe(pets => {
      this.pets = pets;
    });
  }
}
