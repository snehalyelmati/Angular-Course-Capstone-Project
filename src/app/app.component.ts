import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CapstoneProject';
  currentRoute = 'shopping-list'; // available options: recipes or shopping-list

  onRouteChange(route: string) {
    this.currentRoute = route;
  }
}
