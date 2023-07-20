import {Component, OnInit} from '@angular/core'
import {MatDialogRef} from "@angular/material/dialog"

@Component({
  selector: 'app-scrum-view',
  templateUrl: './scrum-view.component.html',
  styleUrls: ['./scrum-view.component.scss']
})
export class ScrumViewComponent implements OnInit {

  public sidebarVisible:boolean = true
  public infoTab:boolean = true;
  public itemsTab:boolean = false;
  public trackingTab:boolean = false;

  constructor(private dialogRef: MatDialogRef<ScrumViewComponent>) {
  }

  ngOnInit(): void {
  }

  onClose() {
    this.dialogRef.close(false)
  }

  onCloseSidebar(event){

  }

  onTabChange(tabId : number) {
    if(tabId === 1) {
      this.infoTab = true;
      this.itemsTab = false;
      this.trackingTab = false;
    }else if (tabId === 2) {
      this.itemsTab = true;
      this.infoTab = false;
      this.trackingTab = false;
    } else if (tabId === 3) {
      this.trackingTab = true;
      this.infoTab = false;
      this.itemsTab = false
    }
  }

}
