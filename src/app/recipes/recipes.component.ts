import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayRecipe(recipe: Recipe) {
    console.log('selected Recipe in recipes component: ', recipe);
    this.selectedRecipe = recipe;
  }

}
