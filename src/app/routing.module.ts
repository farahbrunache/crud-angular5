import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { PokemonDetailComponent } from "./pokemon-detail/pokemon-detail.component";
import { PokemonAddComponent } from "./pokemon-add/pokemon-add.component";

const routes: Routes = [
  {
    path: "pokemons",
    component: PokemonListComponent
  },
  {
    path: "pokemons/detail/:id",
    component: PokemonDetailComponent
  },
  {
    path: "pokemons/add",
    component: PokemonAddComponent
  },
  {
    path: "",
    redirectTo: "/pokemons",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
