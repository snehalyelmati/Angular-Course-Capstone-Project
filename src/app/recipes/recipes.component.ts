import {Component, OnInit} from '@angular/core';
import {RecipesService} from './recipes.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
