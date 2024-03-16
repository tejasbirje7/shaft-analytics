import {Component, OnInit} from '@angular/core'
import {
  FormGroup,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators
} from "@angular/forms"
import {Router} from '@angular/router'

import {NotificationService} from "carbon-components-angular"
import {GlobalfieldsService} from '../../services/app_cache/globalfields.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit {

  public formGroup: FormGroup

  constructor(protected formBuilder: FormBuilder,
              private globalFieldService : GlobalfieldsService,
              private router: Router,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    }, {updateOn: 'blur'})
  }

  onSubmit() {
    console.log("Login initiated ",this.formGroup.value);
    this.formGroup.markAllAsTouched()
    const loginResponse = {
      "tk" : "BVDFG9734GFH0S9DUJCOISD80EHFEFD",
      "e" : "tejas@clevertap.com",
      "idu" : true
    }
    if(loginResponse != null) {
      this.globalFieldService.setUserDetails(loginResponse).then(
        userDetailsSet => {
          this.formGroup.reset();
          this.router.navigate(['/app'])
        }
      )
    } else {
      // #TODO clear user details if any
    }
    /*
    this.notificationService.showToast({
      type: "info",
      title: "Sample toast",
      subtitle: "Sample subtitle message",
      caption: "Sample caption",
      target: "#notificationHolder",
      message: "message",
      duration: 2000,
    })*/
  }

  isValid(name) {
    const instance = this.formGroup.get(name)
    return instance.invalid && (instance.dirty || instance.touched)
  }
}
