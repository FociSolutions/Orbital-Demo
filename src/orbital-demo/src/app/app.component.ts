import { Component, OnDestroy, OnInit } from '@angular/core';
import { PetsService } from './core/services/services';
import { Subscription } from 'rxjs';
import { StrictHttpResponse } from './core/services/strict-http-response';

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

  request: Partial<RequestData> = {};
  response: Partial<ResponseData> = {};

  constructor(private petService: PetsService) {}

  ngOnInit(): void {}

  setResponse(response: StrictHttpResponse<unknown>) : void {
    this.response = {
      statusCode: response.status,
      responseBody: response.body,
    };
  }

  getAllPets(): void {
    this.request = {
      verbType: 'GET',
      path: '/pets',
      contentType: 'application/json',
    };
    this.subscriptions.push(
      this.petService.listPetsResponse().subscribe(this.setResponse)
    );
  }

  createPet(): void {
    this.request = {
      verbType: 'POST',
      path: '/pets',
      contentType: 'application/json',
    };
    this.subscriptions.push(
      this.petService.createPetsResponse().subscribe(this.setResponse)
    );
  }

  deletePet(id: string): void {
    this.request = {
      verbType: 'DELETE',
      path: `/pets/${id}`,
      contentType: 'application/json',
    };
    this.subscriptions.push(
      this.petService.deletePetResponse(id).subscribe(this.setResponse)
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
