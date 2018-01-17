import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MaterialModulesModule } from "./material-modules/material-modules.module";
import { AppComponent } from "./app.component";
import { TodoItemComponent } from "./todo-item/todo-item.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoService } from "./todo.service";

@NgModule({
  declarations: [AppComponent, TodoItemComponent, TodoListComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    }),
    BrowserAnimationsModule,
    MaterialModulesModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
