import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss'],
})
export class InputFileComponent implements OnInit {
  // Inputs
  @Input() label: string = '';
  @Input() maxFileSize: number = 5000000;
  @Input() limit: number = 5;
  @Input() multiple: boolean = true;
  @Input() uploadLabel: string = 'Adicionar arquivo';
  @Input() accept: string =
    'image/jpeg,image/gif,image/png,application/pdf,image/x-eps';

  // Outputs
  @Output() public onUploadFile: EventEmitter<any> = new EventEmitter();
  @Output() public onRemoveFile: EventEmitter<any> = new EventEmitter();

  public uploadedFiles: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  public onUpload(e: any): void {
    this.onUploadFile.emit(e);
  }

  public onRemove(e: any): void {
    this.onRemoveFile.emit(e);
  }
}
