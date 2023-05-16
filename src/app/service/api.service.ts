import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'https://fakestoreapi.com/products'

  constructor(private Http: HttpClient) { }

  public getData(): Observable<any>{
    return this.Http.get<any>(this.urlApi)
  }

}
