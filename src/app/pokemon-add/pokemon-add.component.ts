import { Component, OnInit } from "@angular/core";
import { PokemonService } from "../pokemon.service";
import { Pokemon } from "../pokemon";
import { GlobalsService } from "../globals.service";
import { Location } from "@angular/common";

@Component({
  selector: "pokemon-add",
  templateUrl: "./pokemon-add.component.html",
  styleUrls: ["./pokemon-add.component.scss"]
})
export class PokemonAddComponent implements OnInit {
  pokemon: Pokemon;
  constructor(
    private location: Location,
    private pokemonSvc: PokemonService,
    private globals: GlobalsService
  ) {}

  ngOnInit() {
    this.pokemon = new Pokemon("");
  }

  addPokemon(): void {
    this.globals.loading = true;
    // this.pokemon["pokedex"] = "099";
    this.pokemonSvc.addPokemon(this.pokemon).subscribe(() => {
      this.globals.loading = false;
      this.goBack();
    });
  }

  goBack(): void {
    this.location.back();
  }
}
