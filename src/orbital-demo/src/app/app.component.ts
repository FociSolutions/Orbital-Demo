import { Component, OnDestroy, OnInit } from '@angular/core';
import { PetsService } from './core/services/services';
import { Pet } from '../app/core/services/models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'petstore-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit, OnDestroy {
  title: string = 'orbital-demo';

  pets: Pet[] = [];
  subscriptions: Subscription[] = [];

  constructor(private petService: PetsService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.petService.listPets().subscribe(response => {
        this.pets = response.pets;
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

}
