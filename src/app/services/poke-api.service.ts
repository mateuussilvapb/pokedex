import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  constructor(private http: HttpClient) {}

  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100';

  get apiListAllPokemons(): Observable<any> {
    return this.http.get<any>(`${this.url}`).pipe(
      tap((response) => response),
      tap((response) =>
        response.results.map((resPokemons: any) => {
          this.apiGetPokemons(resPokemons.url).subscribe(
            (res) => (resPokemons.status = res)
          );
        })
      )
    );
  }

  public apiGetPokemons(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(map((response) => response));
  }
}
