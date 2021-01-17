import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'Some desc', 'https://www.chiarapassion.com/wp-content/uploads/2018/09/ricetta-focaccine-morbide.jpg'),
    new Recipe('A test recipe1', 'Some desc1', 'https://blog.giallozafferano.it/allacciateilgrembiule/wp-content/uploads/2018/03/pancake-ricetta-5.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addRecipe(){
    this.recipes.push(new Recipe('A test recipe'+this.recipes.length, 'Some desc'+this.recipes.length, 'https://blog.giallozafferano.it/allacciateilgrembiule/wp-content/uploads/2018/03/pancake-ricetta-5.jpg'))
  }

}
