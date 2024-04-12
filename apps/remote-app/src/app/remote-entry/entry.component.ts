import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BasicFormComponent} from "@asseco-demo/basic-form";

@Component({
  standalone: true,
  imports: [CommonModule, BasicFormComponent],
  selector: 'app-remote-app-entry',
  template: `Remote App: <lib-basic-form></lib-basic-form>`,
})
export class RemoteEntryComponent {}
