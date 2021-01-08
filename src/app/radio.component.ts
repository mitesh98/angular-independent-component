import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { RadioSelectionType } from "./RadioSelectionType";
import {} from "./my-input/my-input.component";
import {} from "./Component/app/"
@Component({
  selector: "app-radio",
  templateUrl: "./radio.component.html"
})
export class RadioComponent implements OnInit {
  @Input() name: string;
  @Input() radioSelection: RadioSelectionType;
  @Output() radioSelectionChange = new EventEmitter<RadioSelectionType>();

  public radioSelectionType = RadioSelectionType;

  constructor() {}

  ngOnInit() {
    // If no default was specified via the input, default to Option 3
    if (!this.radioSelection) {
      this.radioSelection = RadioSelectionType.Option3;
    }
  }

  radioSelectionChangedByUser(value: RadioSelectionType) {
    this.radioSelectionChange.emit(this.radioSelection);
  }
}
