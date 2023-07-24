import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ShaftModule} from '@shaft-components/shaft.module'

@NgModule({
  imports: [
    CommonModule,
    ShaftModule,
  ],
  declarations: [
  ],
  exports: [
    ShaftModule,
  ]
})
export class SharedModule {
  constructor() {

  }
}
