import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fac1',
  imports: [FormsModule, JsonPipe],
  templateUrl: './fac1.component.html',
  styleUrl: './fac1.component.css'
})
export class Fac1Component {
  name = "arjun"
  isRadioChecked = false;
}
