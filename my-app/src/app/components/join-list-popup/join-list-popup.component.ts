import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-join-list-popup',
  templateUrl: './join-list-popup.component.html',
  styleUrls: ['./join-list-popup.component.scss']
})
export class JoinListPopupComponent  {
  value: string;


  constructor(
    public dialogRef: MatDialogRef<JoinListPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  joinList() {
    this.dialogRef.close(this.value);
  }

}
