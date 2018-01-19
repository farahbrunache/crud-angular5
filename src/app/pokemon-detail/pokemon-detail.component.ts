import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PokemonService } from "../pokemon.service";
import { Pokemon } from "../pokemon";

@Component({
  selector: "pokemon-detail",
  templateUrl: "./pokemon-detail.component.html",
  styleUrls: ["./pokemon-detail.component.scss"]
})
export class PokemonDetailComponent implements OnInit {
  pokemon: Pokemon;
  constructor(
    private route: ActivatedRoute,
    private pokemonSvc: PokemonService
  ) {}

  ngOnInit() {
    this.getPokemonDetails();
  }

  getPokemonDetails(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.pokemonSvc.getPokemonById(id).subscribe(data => (this.pokemon = data));
  }
}
