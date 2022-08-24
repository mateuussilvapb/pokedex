import { PokeApiService } from './../../services/poke-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      (res) => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      },
      (error) => {
        this.apiError = true;
      }
    );
  }

  public getAllPokemons: any;
  private setAllPokemons: any;
  public apiError: boolean = false;

  public getSearch(value: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });
    this.getAllPokemons = filter;
  }
}
