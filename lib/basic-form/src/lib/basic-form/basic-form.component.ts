import {Component, ViewEncapsulation} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'lib-basic-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './basic-form.component.html',
  styleUrl: './basic-form.component.css',
})
export class BasicFormComponent {
  formGroup: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      'inputName': new FormControl(''),
      'inputSurname': new FormControl(''),
    })
  }

  printInfo(s: any) {
    console.info(s);
  }
}
