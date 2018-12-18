import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class RecipeModule {

  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string , desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;

  }

}
