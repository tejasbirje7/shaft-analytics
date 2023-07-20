import {Injectable} from '@angular/core'
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog'
import {ScrumViewComponent} from './scrum-view/scrum-view.component';

@Injectable({
  providedIn: 'root'
})
export class ScrumFormService {

  private dialogRef2: MatDialogRef<ScrumViewComponent>

  constructor(private dialog: MatDialog,) {
  }


  openEdit() {
    this.dialogRef2 = null
    let config = new MatDialogConfig()

    config.viewContainerRef = null
    config.disableClose = false
    config.role = 'dialog'
    config.width = '550px'
    config.height = '650px'

    this.dialogRef2 = this.dialog.open(ScrumViewComponent, config)
    return this.dialogRef2
  }
}
