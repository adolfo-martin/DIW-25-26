import { Component } from '@angular/core';
import { MenuApp } from '../menu-app/menu-app';

@Component({
  selector: 'header-app',
  imports: [MenuApp],
  templateUrl: './header-app.html',
  host: {
    class: 'grid grid-cols-[auto_1fr_auto] bg-green-600'
  }
})
export class HeaderApp {

}
