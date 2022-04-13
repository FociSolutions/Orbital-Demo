import { Component, OnDestroy, OnInit } from '@angular/core';
import { PetsService } from './core/services/services';
import { Pet } from '../app/core/services/models';
import { Subscription } from 'rxjs';

interface RequestData {
  verbType: string;
  path: string;
  contentType: string;
}

interface ResponseData {
  statusCode: number;
  responseBody?: unknown;
}

@Component({
  selector: 'petstore-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit, OnDestroy {
  title: string = 'orbital-demo';

  subscriptions: Subscription[] = [];

  request: Partial<RequestData> = { };
  response: Partial<ResponseData> = { };

  constructor(private petService: PetsService) {}

  ngOnInit(): void {}

  getAllPets(): void {
    this.request = {
      verbType: "GET",
      path: "/pets",
      contentType: "application/json"
    }
    this.subscriptions.push(
      this.petService.listPets().subscribe(response => {
        this.response = {
          statusCode: response.status,
          responseBody: response.body
        };
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

}
