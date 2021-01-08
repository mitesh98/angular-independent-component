import { Component } from '@angular/core';
import { RadioSelectionType } from './RadioSelectionType'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  public selectionRadio1 = RadioSelectionType.Both;
  public selectionRadio2 = RadioSelectionType.Both;
}
