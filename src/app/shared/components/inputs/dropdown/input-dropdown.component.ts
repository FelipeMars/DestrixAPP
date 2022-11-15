import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';

// Services
import { GeneratorUtil } from '../../../utils/generator.util';

@Component({
  selector: 'shared-input-dropdown',
  templateUrl: './input-dropdown.component.html',
  styleUrls: ['./input-dropdown.component.scss'],
})
export class InputDropdownComponent implements OnInit {
  // Inputs
  @Input() public label: string = '';
  @Input() public placeholder: string = '';
  @Input() public controlName: string = '';
  @Input() public disabled: boolean = false;
  @Input() public floatLabel: boolean = false;
  @Input() public optionLabel: string = '';
  @Input() public options: any[] = [];
  @Input() public editable: boolean = false;

  // Outputs
  @Output() private focusIn: EventEmitter<null> = new EventEmitter();
  @Output() private focusOut: EventEmitter<null> = new EventEmitter();

  // Control Variables
  public hasIcon: boolean = false;
  public focus: boolean = false;
  public codeId: string = '';

  // form
  public formGroup: FormGroup;
  public startedForm: boolean = false;

  constructor(
    private formGroupDirective: FormGroupDirective,
    private formBuilder: FormBuilder,
    public generatorUtil: GeneratorUtil
  ) {
    this.formGroup = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.codeId = this.generatorUtil.randomStringCode();
    this.formGroup = this.formGroupDirective.form;
    this.startedForm = true;
  }

  public onFocusChange(focus: boolean): void {
    this.focus = focus;
    if (this.focus) {
      this.focusIn.emit();
    } else {
      this.focusOut.emit();
    }
  }
}
