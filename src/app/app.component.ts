import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import * as fromApp from './store/app.reducer';
import {Store} from '@ngrx/store';
import * as AuthActions from './auth/store/auth.actions';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CapstoneProject';

  constructor(@Inject(PLATFORM_ID) private _platformId: Object, private store: Store<fromApp.AppState>) {
    if (isPlatformBrowser(this._platformId)) {

    }
  }

  ngOnInit() {
    this.store.dispatch(new AuthActions.AutoLogin());
  }
}
