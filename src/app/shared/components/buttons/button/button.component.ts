import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Utils
import { GeneratorUtil } from '../../../utils/generator.util';
import { ValidatorUtil } from '../../../utils/validator.util';

@Component({
  selector: 'shared-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  // Inputs
  @Input() public label: string = '';
  @Input() public type: string = 'submit';
  @Input() public icon: string = '';
  @Input() public iconPosition: string = 'left';
  @Input() public size: string = 'normal';
  @Input() public disabled: boolean = false;
  @Input() public loading: boolean = false;
  @Input() public fullWidth: boolean = true;

  // Outputs
  @Output() private onClick: EventEmitter<null> = new EventEmitter();

  // Control Variables
  public hasIcon: boolean = false;
  public codeId: string = '';

  constructor(
    public validatorUtil: ValidatorUtil,
    public veneratorUtil: GeneratorUtil
  ) {}

  ngOnInit(): void {
    this.hasIcon = !this.validatorUtil.isNullOrEmpty(this.icon);
    this.codeId = this.veneratorUtil.randomStringCode();
  }

  public generateIconString(): string {
    let icon = 'pi ';

    if (this.loading) {
      icon += 'pi-spin pi-spinner';
      return icon;
    }

    icon += this.icon;

    return icon;
  }

  public handleClick(): void {
    this.onClick.emit();
  }
}
