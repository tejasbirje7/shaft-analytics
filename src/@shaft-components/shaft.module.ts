import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {NavigationEnd, NavigationStart, Router, RouterModule} from '@angular/router'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxMdModule} from 'ngx-md'
import {NgxMaskModule, IConfig} from 'ngx-mask'

import {NgScrollbarModule} from 'ngx-scrollbar'
import {DragDropModule} from '@angular/cdk/drag-drop'
import {A11yModule} from '@angular/cdk/a11y'

import {MatDialogModule} from "@angular/material/dialog"

import {
  AddModule,
  CaretDownModule,
  HomeModule,
  SearchModule,
  AccountModule,
  ChatModule,
  NotificationModule as NotificationIconModule,
  CloudSatelliteModule,
  ApiModule,
  ApertureModule,
  UserModule,
  ToolsModule,
  ApplicationModule,
  HelpModule,
  ArrowUpModule,
  ArrowDownModule,
  OverflowMenuHorizontalModule,
  OverflowMenuVerticalModule,
  CloudDataOpsModule,
  VirtualPrivateCloudAltModule,
  CheckmarkOutlineModule,
  CaretRightModule,
  CaretLeftModule,
  ArrowRightModule,
  ArrowLeftModule,
  RenewModule,
  AlarmModule,
  MinimizeModule,
  CloudDownloadModule,
  AnalyticsModule,
  ActivityModule,
  DashboardModule,
  TaskModule,
  CatalogModule,
  DocumentModule,
  EmailModule,
  SendAltModule,
  SendModule,
  DashboardReferenceModule,
  UserAdminModule,
  UserAvatarModule,
  FolderModule,
  ImageSearchModule,
  ErrorModule,
  PhraseSentimentModule,
  TableSplitModule,
  ChartColumnModule,
  MagicWandModule,
  TextTrackingModule,
  TextCreationModule,
  TrashCanModule,
  MenuModule,
  RadioButtonModule,
  RadioButtonCheckedModule,
  SettingsAdjustModule,
  SettingsModule,
  CheckboxCheckedModule,
  CloudAppModule,
  BullhornModule,
  BuildingInsights_1Module,
  TagModule as TagModuleIcon,
  TimeModule,
  ChevronDownModule,
  ChevronUpModule,
  DraggableModule,
  ArchiveModule,
  MaximizeModule,
  ImageModule,
  StarModule,
  FolderSharedModule,
  RecentlyViewedModule,
  HashtagModule,
  DownloadModule,
  ShareModule,
  MoveModule,
  TableOfContentsModule,
  UploadModule,
  PackageModule,
  ChevronLeftModule,
  ChevronRightModule,
  AttachmentModule,
  FlagModule,
  FlagFilledModule,
  TextBoldModule,
  TextItalicModule,
  TextUnderlineModule,
  PrinterModule,
  OpenPanelFilledLeftModule,
  OpenPanelLeftModule,
  LockedModule,
  InformationModule,
  PhoneModule,
  EditModule,
  SubtractModule,
  MoneyModule,
  FaceActivatedModule,
  PurchaseModule,
  CalendarModule,
  PasswordModule,
  LocationModule,
  HourglassModule,
  InProgressModule,
  HearingModule,
  FavoriteModule,
  PinModule,
  PortfolioModule,
  IndustryModule,
  ExitModule,
  CloseModule,
  ViewModule,
  CheckmarkModule,
  CheckmarkFilledModule,
  AppsModule,
  WatsonHealthContourFindingModule, SaveModule, WatsonHealth_3DCursorAltModule, OpenPanelRightModule,
} from "@carbon/icons-angular"
import {FlexLayoutModule} from '@angular/flex-layout'

import {ResizableModule} from 'angular-resizable-element'
import {BemModule} from 'angular-bem'
import {NgbDropdownModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap'

import {AppSidenavComponent} from "./components/app-sidenav/app-sidenav/app-sidenav.component"
import {AppSidenavContainerComponent} from "./components/app-sidenav/app-sidenav-container/app-sidenav-container.component"

import {
  GridModule,
  ListModule,
  TabsModule,
  TilesModule,
  InputModule,
  ButtonModule,
  TagModule,
  BreadcrumbModule,
  CheckboxModule,
  ComboBoxModule,
  AccordionModule,
  TableModule,
  ToggleModule,
  DatePickerModule,
  SearchModule as SearchModuleComponent,
  ContentSwitcherModule,
  SkeletonModule,
  DialogModule,
  LinkModule,
  NotificationModule,
  RadioModule,
  PaginationModule,
  SelectModule,
  SliderModule,
  NumberModule,
  FileUploaderModule, ProgressIndicatorModule, ModalModule,
} from 'carbon-components-angular'

import {AppMenuComponent} from "./components/app-menu/app-menu/app-menu.component"
import {AppMenuHeaderComponent} from "./components/app-menu/app-menu-header/app-menu-header.component"
import {AppMenuItemComponent} from "./components/app-menu/app-menu-item/app-menu-item.component"
import {IbmIconComponent} from './components/ibm-icon/ibm-icon.component'
import {AppTableComponent} from './components/app-table/app-table.component'
import {AppHeaderComponent} from './layout/app-header/app-header.component'
import {AppHeaderTitleComponent} from './layout/app-header/app-header-title/app-header-title.component'
import {AppHeaderToolsComponent} from './layout/app-header/app-header-tools/app-header-tools.component'
import {AppThemeSettingsComponent} from './layout/app-theme-settings/app-theme-settings.component'
import {AppLayoutHeaderComponent} from './layout/app-layout-header/app-layout-header.component'
import {AppSearchComponent} from './components/app-search/app-search.component'
import {AppTasksComponent} from './components/app-tasks/app-tasks.component'

import {InputTypeAdvancedPipe} from "./pipes/input-type-advanced.pipe"
import {TextHiglightPipe} from "./pipes/text-higlight.pipe"
import {AppLayoutDividedComponent} from './layout/auth/app-layout-divided/app-layout-divided.component'
import {AppLayoutDividedAltComponent} from './layout/auth/app-layout-divided-alt/app-layout-divided-alt.component'
import {AuthWelcomeScreenComponent} from "./layout/auth/auth-welcome-screen/auth-welcome-screen.component"
import {AppLayoutDividedFullComponent} from './layout/auth/app-layout-divided-full/app-layout-divided-full.component'
import {AppLayoutBasicComponent} from './layout/auth/app-layout-basic/app-layout-basic.component'
import {AppLockScreenComponent} from './components/app-lock-screen/app-lock-screen.component'
import {AppContentTabsComponent} from './components/app-content/app-content-tabs/app-content-tabs.component'
import {AppCreditCardComponent} from './components/app-credit-card/app-credit-card.component'
import {AppContentSimpleComponent} from './components/app-content/app-content-simple/app-content-simple.component'
import {SafePipe} from "./pipes/safe"
import {AppLogoComponent} from './components/app-logo/app-logo.component'
import {AppBreadcrumbComponent} from './components/app-breadcrumb/app-breadcrumb.component'
import {ModalService} from '../app/services/providers/modal.service';
import {ModalComponent} from '@shaft-components/components/modal/modal.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatListModule} from '@angular/material/list';
import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {QueryBuilderComponent} from '@shaft-components/components/query-builder/query-builder-component/query-builder.component';


const MainModules = [
  RouterModule,
  FlexLayoutModule,
  ResizableModule,
  BemModule,
  NgbDropdownModule,
  NgbTooltipModule,
  DragDropModule,
  A11yModule,
  ReactiveFormsModule
]

const MaterialModules = [
  MatCardModule,
  MatDialogModule,
  MatSelectModule,
  MatInputModule,
  MatFormFieldModule,
  ReactiveFormsModule,
  FormsModule,
  MatDividerModule,
  MatButtonModule,
  MatRadioModule,
  MatChipsModule,
  MatToolbarModule,
  MatIconModule,
  MatStepperModule,
  MatExpansionModule,
  MatListModule,
  MatBadgeModule,
  MatTabsModule,
  MatRippleModule,
  MatSlideToggleModule,
  MatSliderModule,
  MatDatepickerModule,
  MatNativeDateModule
]

const CarbonModules = [
  GridModule,
  ListModule,
  TabsModule,
  TilesModule,
  InputModule,
  ButtonModule,
  TagModule,
  BreadcrumbModule,
  CheckboxModule,
  ComboBoxModule,
  AccordionModule,
  TableModule,
  ToggleModule,
  DatePickerModule,
  SearchModuleComponent,
  ContentSwitcherModule,
  SkeletonModule,
  DialogModule,
  MaximizeModule,
  LinkModule,
  NotificationModule,
  RadioModule,
  PaginationModule,
  SelectModule,
  SliderModule,
  NumberModule,
  FileUploaderModule,
  ModalModule,
]

const CarbonIconModules = [
  CaretDownModule,
  AddModule,
  HomeModule,
  SearchModule,
  AccountModule,
  ChatModule,
  NotificationIconModule,
  CloudSatelliteModule,
  ApiModule,
  ApertureModule,
  UserModule,
  ToolsModule,
  ApplicationModule,
  HelpModule,
  ArrowUpModule,
  ArrowDownModule,
  OverflowMenuHorizontalModule,
  OverflowMenuVerticalModule,
  CloudDataOpsModule,
  VirtualPrivateCloudAltModule,
  CheckmarkOutlineModule,
  CaretRightModule,
  CaretLeftModule,
  ArrowRightModule,
  ArrowLeftModule,
  RenewModule,
  AlarmModule,
  MinimizeModule,
  CloudDownloadModule,
  AnalyticsModule,
  ActivityModule,
  DashboardModule,
  TaskModule,
  CatalogModule,
  DocumentModule,
  EmailModule,
  SendAltModule,
  SendModule,
  DashboardReferenceModule,
  UserAdminModule,
  UserAvatarModule,
  FolderModule,
  ImageSearchModule,
  ErrorModule,
  PhraseSentimentModule,
  TableSplitModule,
  ChartColumnModule,
  MagicWandModule,
  TextTrackingModule,
  TextCreationModule,
  TrashCanModule,
  MenuModule,
  RadioButtonModule,
  RadioButtonCheckedModule,
  SettingsAdjustModule,
  SettingsModule,
  CheckboxCheckedModule,
  CloudAppModule,
  BullhornModule,
  BuildingInsights_1Module,
  TagModuleIcon,
  TimeModule,
  ChevronDownModule,
  ChevronUpModule,
  DraggableModule,
  ArchiveModule,
  ImageModule,
  StarModule,
  FolderSharedModule,
  RecentlyViewedModule,
  HashtagModule,
  DownloadModule,
  ShareModule,
  MoveModule,
  TableOfContentsModule,
  UploadModule,
  PackageModule,
  ChevronLeftModule,
  ChevronRightModule,
  AttachmentModule,
  FlagModule,
  FlagFilledModule,
  TextBoldModule,
  TextItalicModule,
  TextUnderlineModule,
  PrinterModule,
  OpenPanelFilledLeftModule,
  OpenPanelLeftModule,
  LockedModule,
  InformationModule,
  PhoneModule,
  EditModule,
  SubtractModule,
  MoneyModule,
  FaceActivatedModule,
  PurchaseModule,
  CalendarModule,
  PasswordModule,
  LocationModule,
  HourglassModule,
  InProgressModule,
  HearingModule,
  FavoriteModule,
  PinModule,
  PortfolioModule,
  IndustryModule,
  ExitModule,
  CheckmarkModule,
  CheckmarkFilledModule,
  ViewModule,
  AppsModule,
  CloseModule,
  SaveModule,
  ProgressIndicatorModule,
  WatsonHealth_3DCursorAltModule,
  OpenPanelRightModule,
]

const Components = [
  AppSidenavComponent,
  AppSidenavContainerComponent,
  AppMenuComponent,
  AppMenuHeaderComponent,
  AppMenuItemComponent,
  IbmIconComponent,
  AppTableComponent,
  AppHeaderComponent,
  AppHeaderTitleComponent,
  AppHeaderToolsComponent,
  AppThemeSettingsComponent,
  AppLayoutHeaderComponent,
  AppSearchComponent,
  AppTasksComponent,
  AppLayoutDividedComponent,
  AppLayoutDividedAltComponent,
  AuthWelcomeScreenComponent,
  AppLayoutDividedFullComponent,
  AppLayoutBasicComponent,
  AppLockScreenComponent,
  AppContentTabsComponent,
  AppCreditCardComponent,
  AppContentSimpleComponent,
  AppLogoComponent,
  AppBreadcrumbComponent,
  QueryBuilderComponent,
  ModalComponent
]

const Pipes = [
  InputTypeAdvancedPipe,
  TextHiglightPipe,
  SafePipe,
]

@NgModule({
  imports: [
    CommonModule,
    ...MainModules,
    ...CarbonIconModules,
    ...CarbonModules,
    ...MaterialModules,
    NgScrollbarModule.withConfig({
      visibility: 'hover',
    }),
    NgxMdModule,
    WatsonHealthContourFindingModule,
    NgxMaskModule.forRoot(),
  ],
  declarations: [
    ...Components,
    ...Pipes,
  ],
  exports: [
    ...Components,
    ...MainModules,
    ...CarbonIconModules,
    ...CarbonModules,
    ...MaterialModules,
    ...Pipes,
    NgScrollbarModule,
    NgxMdModule,
    NgxMaskModule,
  ],
  providers:[ModalService]
})
export class ShaftModule {
  constructor() {

  }
}
