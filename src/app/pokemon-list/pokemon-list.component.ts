import { Component, OnInit } from "@angular/core";
import { PokemonService } from "../pokemon.service";
import { Pokemon } from "../pokemon";

@Component({
  selector: "pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.scss"]
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[];
  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService
      .getPokemons()
      .subscribe(data => (this.pokemons = data.pokemons));
  }
}
