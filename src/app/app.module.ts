import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { CustomMaterialModule } from "./custom-material/custom-material.module";
import { PokemonService } from "./pokemon.service";
import { AppComponent } from "./app.component";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { RoutingModule } from './/routing.module';
import { GlobalsService } from './globals.service';
import { PokemonAddComponent } from './pokemon-add/pokemon-add.component';
import { HoverEffectDirective } from './hover-effect.directive';
import { AnimateNumberDirective } from './animate-number.directive';

@NgModule({
  declarations: [AppComponent, PokemonListComponent, PokemonDetailComponent, PokemonAddComponent, HoverEffectDirective, AnimateNumberDirective],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CustomMaterialModule,
    RoutingModule
  ],
  providers: [PokemonService, GlobalsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
