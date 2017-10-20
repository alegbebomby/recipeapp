import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes :Recipe[] =[ new Recipe('test recipe','a test','http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-04.jpg'),new Recipe('test recipe','a test','http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-04.jpg')];
  constructor() { }

  ngOnInit() {
  }

}