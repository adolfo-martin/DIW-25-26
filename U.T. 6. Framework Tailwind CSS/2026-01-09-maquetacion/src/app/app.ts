import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderApp } from "./components/header-app/header-app";
import { MenuApp } from "./components/menu-app/menu-app";
import { MainApp } from "./components/main-app/main-app";
import { FooterApp } from "./components/footer-app/footer-app";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderApp, MenuApp, MainApp, FooterApp],
  templateUrl: './app.html',
  host: {
    class: 'border-8 h-dvh grid grid-rows-[auto_1fr]'
  }
})
export class App {
  protected readonly title = signal('2026-01-09-maquetacion');
}
