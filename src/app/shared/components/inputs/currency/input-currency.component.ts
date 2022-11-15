import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Form
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';

// Utils
import { GeneratorUtil } from '../../../utils/generator.util';
import { ValidatorUtil } from '../../../utils/validator.util';

@Component({
  selector: 'shared-input-currency',
  templateUrl: './input-currency.component.html',
  styleUrls: ['./input-currency.component.scss'],
})
export class InputCurrencyComponent implements OnInit {
  // Inputs
  @Input() public label: string = '';
  @Input() public placeholder: string = '';
  @Input() public leftIcon: string = '';
  @Input() public controlName: string = '';
  @Input() public size: string = 'normal';
  @Input() public disabled: boolean = false;
  @Input() public floatLabel: boolean = true;
  @Input() public prefix: string = 'R$ ';

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
    public validatorUtil: ValidatorUtil,
    public generatorUtil: GeneratorUtil
  ) {
    this.formGroup = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.hasIcon = !this.validatorUtil.isNullOrEmpty(this.leftIcon);
    this.codeId = this.generatorUtil.randomStringCode();

    this.formGroup = this.formGroupDirective.form;

    this.startedForm = true;
  }
}
