import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PokemonService } from "../pokemon.service";
import { Pokemon } from "../pokemon";
import { GlobalsService } from "../globals.service";

@Component({
  selector: "pokemon-detail",
  templateUrl: "./pokemon-detail.component.html",
  styleUrls: ["./pokemon-detail.component.scss"]
})
export class PokemonDetailComponent implements OnInit {
  pokemon: Pokemon;
  constructor(
    private route: ActivatedRoute,
    private pokemonSvc: PokemonService,
    private globals: GlobalsService
  ) {}

  ngOnInit() {
    this.getPokemonDetails();
  }

  getPokemonDetails(): void {
    this.globals.loading = true;
    const id = this.route.snapshot.paramMap.get("id");
    this.pokemonSvc.getPokemonById(id).subscribe(data => {
      this.pokemon = data;
      this.globals.loading = false;
    });
  }
  
  updatePokemon(): void {
    this.globals.loading = true;
    this.pokemonSvc.updatePokemon(this.pokemon).subscribe(() => {
      this.globals.loading = false;
    });
  }

  // resetData(): void {
  //   this.pokemon = new Pokemon("manistorm");
  // }
}
