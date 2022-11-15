import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Form
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';

// Utils
import { GeneratorUtil } from '../../../utils/generator.util';
import { ValidatorUtil } from '../../../utils/validator.util';

@Component({
  selector: 'shared-input-calendar',
  templateUrl: './input-calendar.component.html',
  styleUrls: ['./input-calendar.component.scss'],
})
export class InputCalendarComponent implements OnInit {
  // Inputs
  @Input() public label: string = '';
  @Input() public placeholder: string = '';
  @Input() public controlName: string = '';
  @Input() public disabled: boolean = false;
  @Input() public floatLabel: boolean = false;
  @Input() public showTime: boolean = false;

  // Outputs
  @Output() private focusIn: EventEmitter<null> = new EventEmitter();
  @Output() private focusOut: EventEmitter<null> = new EventEmitter();

  // Control Variables
  public hasIcon: boolean = false;
  public focus: boolean = false;
  public codeId: string = '';

  // // Form
  public formGroup: FormGroup;
  public startedForm: boolean = false;

  constructor(
    private formGroupDirective: FormGroupDirective,
    private formBuilder: FormBuilder,
    public validatorUtil: ValidatorUtil,
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
