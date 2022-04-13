/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Pets } from '../models/pets';
@Injectable({
  providedIn: 'root',
})
class PetsService extends __BaseService {
  static readonly listPetsPath = '/pets';
  static readonly createPetsPath = '/pets';
  static readonly showPetByIdPath = '/pets/{id}';
  static readonly createsUpdatesPetPath = '/pets/{id}';
  static readonly deletePetPath = '/pets/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * List all pets
   * @param limit How many items to return at one time (max 100)
   * @return A paged array of pets
   */
  listPetsResponse(limit?: number): __Observable<__StrictHttpResponse<Pets>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (limit != null) __params = __params.set('limit', limit.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/pets`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Pets>;
      })
    );
  }
  /**
   * List all pets
   * @param limit How many items to return at one time (max 100)
   * @return A paged array of pets
   */
  listPets(limit?: number): __Observable<Pets> {
    return this.listPetsResponse(limit).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * Creates a pet (new resource)
   */
  createPetsResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/pets`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Creates a pet (new resource)
   */
  createPets(): __Observable<null> {
    return this.createPetsResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Info for a specific pet
   * @param id The id of the pet to retrieve
   * @return Expected response to a valid request
   */
  showPetByIdResponse(id: string): __Observable<__StrictHttpResponse<Pets>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/pets/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Pets>;
      })
    );
  }
  /**
   * Info for a specific pet
   * @param id The id of the pet to retrieve
   * @return Expected response to a valid request
   */
  showPetById(id: string): __Observable<Pets> {
    return this.showPetByIdResponse(id).pipe(
      __map(_r => _r.body as Pets)
    );
  }

  /**
   * Creates a new pet (new resource), or updates an existing pet if specified in the request URL
   * @param id The id of the pet to retrieve
   * @return Updated or created successfully
   */
  createsUpdatesPetResponse(id: string): __Observable<__StrictHttpResponse<Pets>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/pets/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Pets>;
      })
    );
  }
  /**
   * Creates a new pet (new resource), or updates an existing pet if specified in the request URL
   * @param id The id of the pet to retrieve
   * @return Updated or created successfully
   */
  createsUpdatesPet(id: string): __Observable<Pets> {
    return this.createsUpdatesPetResponse(id).pipe(
      __map(_r => _r.body as Pets)
    );
  }

  /**
   * Deletes a specified pet
   * @param id The id of the pet to retrieve
   * @return Deleted pet successfully
   */
  deletePetResponse(id: string): __Observable<__StrictHttpResponse<Pets>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/pets/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Pets>;
      })
    );
  }
  /**
   * Deletes a specified pet
   * @param id The id of the pet to retrieve
   * @return Deleted pet successfully
   */
  deletePet(id: string): __Observable<Pets> {
    return this.deletePetResponse(id).pipe(
      __map(_r => _r.body as Pets)
    );
  }
}

module PetsService {
}

export { PetsService }
