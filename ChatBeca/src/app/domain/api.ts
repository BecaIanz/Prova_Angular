import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {
  protected readonly URL: string = "http://10.234.195.227:5294/api"

  protected headers : HttpHeaders = new HttpHeaders({
    "Authorization" : sessionStorage.getItem('token')!
  })


  constructor(protected client: HttpClient){  }

  public get ( token? : string, ) {
    return this.client.get( `${this.URL}`, {headers : this.headers}).pipe()
  }

}
