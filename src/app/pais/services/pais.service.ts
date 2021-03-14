import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiURL: string = 'https://restcountries.eu/rest/v2';
  get getParams(){

    // para no enviar los parametros junto a la url
    return new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population');

  }

  constructor(private http: HttpClient) { }

  // Recibe el término y retorna un Observable (obtener paises)
  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiURL}/name/${termino}`;
    return this.http.get<Country[]>(url, { params: this.getParams});
  }

  // obtener capitales
  buscarCapital(termino: string): Observable<Country[]> {
    const urlCapital = `${this.apiURL}/capital/${termino}`;
    return this.http.get<Country[]>(urlCapital, { params: this.getParams});
  }

  // obtener id del pais de forma independiente
  buscarporAlpha(id: string): Observable<Country> {
    const urlPaisInd = `${this.apiURL}/alpha/${id}`;
    return this.http.get<Country>(urlPaisInd);
  }

  // Obtener lista de paises por region
  //https://restcountries.eu/rest/v2/region/{region}
  buscarRegion( region:string): Observable<Country[]>{
   
    const urlRegiones = `${this.apiURL}/region/${region}`;
    return this.http.get<Country[]>(urlRegiones, { params: this.getParams})
    .pipe(
      tap(console.log)
    )

  }



}
