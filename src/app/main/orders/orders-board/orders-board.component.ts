import {Component, OnInit} from '@angular/core'
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop'
import {ScrumFormService} from "../scrum-form.service"

@Component({
  selector: 'app-scrum-board',
  templateUrl: './scrum-board.component.html',
  styleUrls: ['./scrum-board.component.scss']
})
export class ScrumBoardComponent implements OnInit {

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
  public selectedId: number = null

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

  public modalTrigger
  public modalOpened: boolean = true

  constructor(private scrumFormService: ScrumFormService) {
  }

  ngOnInit(): void {
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

  onToggleModal(bool) {
    this.modalOpened = bool
  }


  onView() {
    this.scrumFormService.openEdit().afterClosed().subscribe(() => {

    })
  }
}
