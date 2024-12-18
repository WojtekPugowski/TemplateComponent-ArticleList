import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {ArticlesListComponent} from "./articles-list/articles-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ArticlesListComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
}
