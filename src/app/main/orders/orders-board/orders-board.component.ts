import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {CommonModalService} from '../../../services/providers/common-modal.service';
import {CommonService} from '../../../services/providers/common.service';
import {RouteConstants} from '../../../utils/constants/route-constants';

@Component({
  selector: 'app-orders-board',
  templateUrl: './orders-board.component.html',
  styleUrls: ['./orders-board.component.scss']
})
export class OrdersBoardComponent implements OnInit {
  public orderDetails = [
    {
      name : "PENDING",
      opened : true,
      orders : []
    },{
      name: 'IN PROGRESS',
      opened: true,
      orders : []
    },{
      name: 'COMPLETED',
      opened: true,
      orders : []
    }
  ];
  public teamMembers = [
    {
      id: 1,
      name: 'Jon Done',
      avatar: 'assets/img/status/green.jpg',
    },
    {
      id: 2,
      name: 'Sprint James',
      avatar: 'assets/img/status/yellow.jpg',
    },
    {
      id: 3,
      name: 'Sprint James',
      avatar: 'assets/img/status/red.jpg',
    }
  ]
  public selectedId: number = null;

  public boards = [
    {
      name: 'PENDING',
      opened: true,
      tasks: [
        {
          userId: 1,
          landmark: 'Umerkhadi',
          item: 7,
          category: 3,
          price: 244
        },
        {
          userId: 1,
          description: 'Http2: Cannot read property \'finishWrite\' of null',
          important: true,
          bug: true,
        },
        {
          userId: 2,
          description: 'fs: inconsistent options treatment between rm() and rmdir()',
        },
        {
          userId: 3,
          description: 'Some statements have already been executed when debugger stops at line breakpoint',
          important: true,
          bug: true,
        },
        {
          userId: 1,
          description: 'cluster.fork() fails when called in repl (cluster.settings.exec undefined) ',
        },
        {
          userId: 2,
          description: 'Assertions that are removed in production?',
        },
        {
          userId: 3,
          description: 'regression: `require.resolve()` caches `package.json` when it shouldn\'t ',
        },
        {
          userId: 1,
          description: 'Don\'t "exit" android-configure, which is meant to be "source"d',
        },
        {
          userId: 4,
          description: 'Chocolatey fails to install visual studio workload tools',
        },
        {
          userId: 3,
          description: 'Allow to ensure a process will exit and warn for remaining async operations if any ',
        },
      ]
    },
    {
      name: 'IN PROGRESS',
      opened: true,
      tasks: [
        {
          userId: 3,
          description: 'Investigate flaky test-webcrypto-encrypt-decrypt-aes on rhe17-s390x',
          important: true,
          bug: true,
        },
        {
          userId: 4,
          description: 'Listen: Misleading error message when directory of IPC socket does not exist',
        },
      ]
    },
    {
      name: 'COMPLETED',
      opened: true,
      tasks: [
        {
          userId: 4,
          description: 'using Whatwg url to parse relative urls received via http may fail ',
        },
        {
          userId: 3,
          description: 'http2: calling ServerHttp2Stream end() can silently fail',
          important: true,
          bug: true,
        },
        {
          userId: 4,
          description: '`vm.compileFunction(source)` is much slower than `new vm.Script(source)`',
          important: true,
          bug: true,
        },
      ]
    }
  ]
  constructor(
    private commonModalService: CommonModalService,
    private restClient: CommonService) {
  }

  ngOnInit(): void {
    this._getOrders();
  }

  segregateOrders(orders) {
    for (let i=0; i < orders.length; i++){
      if (orders[i].sg == 1) {
        this.orderDetails[0].orders.push(orders[i]);
      } else if( orders[i].sg == 2 ) {
        this.orderDetails[1].orders.push(orders[i]);
      } else if( orders[i].sg == 3 ) {
        this.orderDetails[2].orders.push(orders[i]);
      }
    }
    console.log("Order Details : ",this.orderDetails);
  }

  onSelectMember(id) {
    if (this.selectedId !== id) {
      this.selectedId = id
    }
    else {
      this.selectedId = null
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
    }
    else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex)
    }
  }

  getUserAvatarById(id) {
    const member = this.teamMembers.find(member => member.id === id)
    if(member != undefined) {
      return member.avatar
    } else {
      return "assets/img/status/green.jpg";
    }
  }

  onToggleColumn(index) {
    this.boards[index].opened = !this.boards[index].opened
  }

  onView(orderToBeViewed) {
    this.commonModalService.viewOrder(orderToBeViewed).afterClosed().subscribe(() => {

    })
  }

  epochToJsDate(ts) {
    return new Date(ts * 1000).toLocaleDateString();
  }

  jsDateToEpoch(d) {
    return (d.getTime() - d.getMilliseconds()) / 1000;
  }


  _getOrders(){
    this.restClient.invokeDashboardService(RouteConstants.GET_ORDERS)
      .subscribe(res => {
        let r = JSON.parse(JSON.stringify(res));
        //console.log("Order : ",r)
        if(r.hasOwnProperty("code") && (String(r["code"])).startsWith("S")) {
          this.segregateOrders(r["data"])
        }
        console.log(this.orderDetails)
      }, (err) => {
        console.log(err);
      });
  }

  _getOrderItems(data:any = {}){
    this.restClient.invokeDashboardService(RouteConstants.GET_ITEMS_IN_ORDER,data)
      .subscribe(res => {
        let r = JSON.parse(JSON.stringify(res));
        console.log("Order : ",r)
      }, (err) => {
        console.log(err);
      });
  }

  _updateOrderStatus(data:any = {}){
    this.restClient.invokeDashboardService(RouteConstants.UPDATE_ORDER_STATUS,data)
      .subscribe(res => {
        let r = JSON.parse(JSON.stringify(res));
      }, (err) => {
        // #TODO Render snacker of failure
        console.log(err);
      });
  }
}
