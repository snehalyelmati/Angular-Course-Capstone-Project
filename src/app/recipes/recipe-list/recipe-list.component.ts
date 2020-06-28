import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Recipe One', 'This is the description for recipe one.', 'https://www.wholesomeyum.com/wp-content/uploads/2019/09/wholesomeyum-keto-chaffles-recipe-sweet-savory-5-ways-24.jpg'),
    new Recipe('Recipe Two', 'This is the description for recipe two.', 'https://storcpdkenticomedia.blob.core.windows.net/media/lolretail/media/lolr-media/article_images/less-sodium-butter-with-canola-oil-760x580.jpg?ext=.jpg'),
    new Recipe('Recipe Three', 'This is the description for recipe three.', 'https://i.pinimg.com/originals/08/60/8e/08608e8343aa9d63383ca80466bd5192.jpg')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
