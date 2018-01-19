import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Pokemon } from "./pokemon";
import { POKEMONS } from "./pokemon-seed";

@Injectable()
export class PokemonService {
  private baseUrl = "https://super-crud.herokuapp.com/pokemon";
  constructor(private http: HttpClient) {}

  getPokemons(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
}
