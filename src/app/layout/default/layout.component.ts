import {Component, OnDestroy, OnInit} from '@angular/core'
import {takeUntil} from 'rxjs/operators'
import {Subject} from "rxjs"
import {defaultRouterTransition, MenuType} from "../../../@shaft-components"
import {SettingsService} from "../../../@shaft-components"
import {AppMenuService} from "../../../@shaft-components"

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    defaultRouterTransition,
  ],
})
export class LayoutComponent implements OnInit, OnDestroy {
  private readonly onDestroy = new Subject<void>()

  public mainSidebarOpts = {
    breakpoint: 'md',
    opened: true,
    hoverAble: true,
    mode: 'side',
    toggleableBtn: false,
    size: 'sideBar1',
  }
  public miniSidebarOpts = {}
  public settingsVisible: boolean = false
  public searchVisible: boolean = false
  public lockScreenVisible: boolean = false

  public menu: Array<MenuType> = [
    {
      groupName: 'DASHBOARDS',
      opened: true,
      children: [
        {
          name: 'Dashboard',
          url: '/app/dashboard/default',
          prefix: {
            type: 'ibm-icon',
            name: 'home',
          },
        },
        {
          name: 'Platform analytics',
          url: '/app/dashboard/analytics',
          prefix: {
            type: 'ibm-icon',
            name: 'activity',
          },
        }
      ],
    },
    {
      groupName: 'APPLICATIONS',
      opened: true,
      children: [
        {
          name: 'Orders',
          prefix: {
            type: 'ibm-icon',
            name: 'task',
          },
          url: '/app/orders-board',
        },
        {
          name: 'Store',
          prefix: {
            type: 'ibm-icon',
            name: 'home',
          },
          parentUrl: '/app/store',
          children: [
            {
              name: 'Items',
              url: '/app/store/items',
            },
            {
              name: 'Category',
              url: '/app/store/category',
            }
          ]
        }
      ]
    },
    {
      groupName: 'ENGAGEMENT',
      opened: true,
      children: [
        {
          name: 'Campaigns',
          parentUrl: '/app/engagement/campaign',
          prefix: {
            type: 'ibm-icon',
            name: 'dashboardReference',
          },
          children: [
            {
              name: 'Create',
              url: '/app/engagement/campaign/create',
            },
            {
              name: 'Saved',
              url: '/app/engagement/campaign/saved',
            }
          ]
        },
        {
          name: 'Analytics',
          parentUrl: '/app/engagement/analytics',
          prefix: {
            type: 'ibm-icon',
            name: 'chartColumn',
          },
          children: [
            {
              name: 'Boards',
              url: '/app/engagement/analytics/filters',
            },
            {
              name: 'Filter',
              url: '/app/engagement/campaign/create',
            }
          ]
        }
      ]
    },
    {
      groupName: 'USER',
      opened: true,
      children: [
        {
          name: 'Profile',
          url: '/app/profile',
          prefix: {
            type: 'ibm-icon',
            name: 'faceActivated',
          }
        },
        {
          name: 'Segment',
          url: '/app/segment',
          prefix: {
            type: 'ibm-icon',
            name: 'userAvatar',
          }
        }
      ]
    },
    {
      groupName: 'ACCOUNT-META',
      opened: true,
      children: [
        {
          name: 'Billing',
          url: '/app/billing',
          prefix: {
            type: 'ibm-icon',
            name: 'document',
          }
        },
        {
          name: 'Events',
          url: '/app/events',
          prefix: {
            type: 'ibm-icon',
            name: 'magicWand',
          }
        }
      ]
    },
    {
      groupName: 'TEMPLATE',
      opened: true,
      children: [
        {
          name: 'Catalog',
          url: '/app/catalog',
          prefix: {
            type: 'ibm-icon',
            name: 'imageSearch',
          }
        },
        {
          name: 'Configure',
          url: '/app/configure',
          prefix: {
            type: 'ibm-icon',
            name: 'imageSearch',
          }
        }
      ]
    }
  ]

  constructor(private settingsService: SettingsService,
              private appMenuService: AppMenuService) {
  }

  ngOnInit(): void {
    this.appMenuService
      .$callbackClick
      .pipe(takeUntil(this.onDestroy))
      .subscribe((params) => {
        if (params === 'lock') {
          this.lockScreenVisible = true
        }
      })
  }

  ngOnDestroy(): void {
    this.onDestroy.next()
  }

  onMiniSidebarItemClick(event) {
    if (event.key === 'theme') {
      this.settingsVisible = !this.settingsVisible
    }
    if (event.key === 'search') {
      this.searchVisible = true
    }
  }

  onToggleThemeSettings() {
    this.settingsVisible = true
  }

  onSideBarOpen(event) {
    this.mainSidebarOpts.opened = true
  }

  onSideBarToggle(event) {
    this.mainSidebarOpts.opened = !this.mainSidebarOpts.opened
  }

  onCloseSettings(event) {
    this.settingsVisible = false
  }

  onSearchClose(event) {
    this.searchVisible = false
  }

  onLockClose(event) {
    this.lockScreenVisible = false
  }

  onCloseSidebar() {
    this.mainSidebarOpts.opened = false
  }

  onVisibilityChange(event){
    this.mainSidebarOpts.opened=event
  }
}
