import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BasicFormComponent} from "@asseco-demo/basic-form";

@Component({
  standalone: true,
  imports: [BasicFormComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'host-app';
}
