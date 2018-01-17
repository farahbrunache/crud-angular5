import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule
} from "@angular/material";

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MaterialModulesModule {}
