import { Component, OnInit, Input, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';


export interface DialogData {
  statusDesc: "",
}

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {

  constructor(public dialog: MatDialog) {}

  openDialog(task) {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      data: {
        statusDesc:task.statusDesc,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}