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

  request: RequestData | null = null;
  response: ResponseData | null = null;

  constructor(public petService: PetsService) {}

  ngOnInit(): void {}

  setResponse(response: StrictHttpResponse<unknown>): void {
    this.response = {
      statusCode: response.status,
      responseBody: response.body,
    };
  }

  setRootUrl(url: string) {
    this.petService.rootUrl = url;
  }

  getAllPets(): void {
    this.response = null;
    this.request = {
      verbType: 'GET',
      path: '/pets',
      contentType: 'application/json',
    };
    this.subscriptions.push(
      this.petService.listPetsResponse().subscribe((response) => {
        this.setResponse(response);
      })
    );
  }

  createPet(): void {
    this.response = null;
    this.request = {
      verbType: 'POST',
      path: '/pets',
      contentType: 'application/json',
    };
    this.subscriptions.push(
      this.petService.createPetsResponse().subscribe((response) => {
        this.setResponse(response);
      })
    );
  }

  deletePet(id: string): void {
    this.response = null;
    this.request = {
      verbType: 'DELETE',
      path: `/pets/${id}`,
      contentType: 'application/json',
    };
    this.subscriptions.push(
      this.petService.deletePetResponse(id).subscribe((response) => {
        this.setResponse(response);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
