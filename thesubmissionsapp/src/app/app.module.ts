import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/session/login/login.component';
import { SignupComponent } from './components/session/signup/signup.component';
import { ForgotpasswordComponent } from './components/session/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/session/resetpassword/resetpassword.component';
import { HomeComponent } from './components/general/home/home.component';
import { NavComponent } from './components/general/nav/nav.component';
import { LayoutComponent } from './components/general/layout/layout.component';
import { MaterialComponent } from './components/material/material.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DocSubmissionsComponent } from './components/doctor/doc-submissions/doc-submissions.component';
import { DocSubmissionDetailComponent } from './components/doctor/doc-submission-detail/doc-submission-detail.component';
import { PatSubmissionsComponent } from './components/patient/pat-submissions/pat-submissions.component';
import { PatSubmissionDetailComponent } from './components/patient/pat-submission-detail/pat-submission-detail.component';
import { PatSubmissionNewComponent } from './components/patient/pat-submission-new/pat-submission-new.component';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    HomeComponent,
    NavComponent,
    LayoutComponent,
    MaterialComponent,
    PageNotFoundComponent,
    DocSubmissionsComponent,
    DocSubmissionDetailComponent,
    PatSubmissionsComponent,
    PatSubmissionDetailComponent,
    PatSubmissionNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 10000,
      // extendedTimeOut: 99999,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
      closeButton: true,
      progressBar: true,
    }), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
