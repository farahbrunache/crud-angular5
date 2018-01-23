// import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { Component, OnInit } from "@angular/core";

import { PokemonService } from "../pokemon.service";
import { Pokemon } from "../pokemon";
import { GlobalsService } from "../globals.service";

@Component({
  selector: "pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.scss"]
})
export class PokemonListComponent implements OnInit {
  hoverOpacity: number = 0.5;
  pokemons: Pokemon[];
  selectedPokemon: Pokemon;
  
  constructor(
    // private cdr: ChangeDetectorRef,
    private pokemonService: PokemonService,
    private globals: GlobalsService
  ) {}

  ngOnInit() {
    this.getPokemons();
  }

  // ngAfterViewInit() {
  //   this.getPokemons();
  // }

  getPokemons(): void {
    this.globals.loading = true;
    setTimeout(() => {
      this.pokemonService.getPokemons().subscribe(data => {
        this.pokemons = data;
        this.globals.loading = false;
        // this.cdr.detectChanges();
      });
    });
  }

  deletePokemon(pokemon: Pokemon): void {
    this.globals.loading = true;
    this.pokemonService.deletePokemon(pokemon["_id"]).subscribe(() => {
      this.getPokemons();
      // this.globals.loading = false;
    });
  }

  // showDetailsOf(pokemon: Pokemon): void {
  //   this.selectedPokemon = pokemon;
  // }
}
