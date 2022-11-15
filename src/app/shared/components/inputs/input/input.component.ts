import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Form
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';

// Utils
import { GeneratorUtil } from '../../../utils/generator.util';
import { ValidatorUtil } from '../../../utils/validator.util';

@Component({
  selector: 'shared-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  // Inputs
  @Input() public label: string = '';
  @Input() public placeholder: string = '';
  @Input() public leftIcon: string = '';
  @Input() public controlName: string = '';
  @Input() public type: string = 'text';
  @Input() public size: string = 'normal';
  @Input() public disabled: boolean = false;
  @Input() public loading: boolean = false;
  @Input() public floatLabel: boolean = false;
  @Input() public mask: string = '';

  // Outputs
  @Output() private focusIn: EventEmitter<null> = new EventEmitter();
  @Output() private focusOut: EventEmitter<null> = new EventEmitter();

  // Control Variables
  public hasIcon: boolean = false;
  public focus: boolean = false;
  public codeId: string = '';

  // Form
  public formGroup: FormGroup;
  public startedForm: boolean = false;

  constructor(
    private formGroupDirective: FormGroupDirective,
    private formBuilder: FormBuilder,
    public ValidatorUtil: ValidatorUtil,
    public GeneratorUtil: GeneratorUtil
  ) {
    this.formGroup = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.hasIcon = !this.ValidatorUtil.isNullOrEmpty(this.leftIcon);
    this.codeId = this.GeneratorUtil.randomStringCode();

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
