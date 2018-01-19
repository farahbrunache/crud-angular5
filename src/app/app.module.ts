import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { CustomMaterialModule } from "./custom-material/custom-material.module";
import { PokemonService } from "./pokemon.service";
import { AppComponent } from "./app.component";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";

@NgModule({
  declarations: [AppComponent, PokemonListComponent],
  imports: [BrowserModule, BrowserAnimationsModule, CustomMaterialModule],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule {}
