import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-indicator-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
})
export class SkeletonComponent implements OnInit {
  @Input() public width: string = '100%';
  @Input() public height: string = '300px';
  @Input() public borderRadius: string = '16px';

  constructor() {}

  ngOnInit(): void {}
}
