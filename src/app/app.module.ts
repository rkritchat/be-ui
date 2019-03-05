import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskComponent } from './shared/component/task/task.component'
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ProgressbarComponent } from './shared/component/progressbar/progressbar.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';
import { ResultComponent } from './shared/component/result/result.component';
import { SendemailService } from './service/sendmailService/sendemail.service';
import { AddTaskComponent } from './component/add-task/add-task.component';
import { Global } from './shared/class/global';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { AlertComponent, DialogContentExampleDialog } from './shared/component/alert/alert.component';
import { MatButtonModule } from '@angular/material';
import { Intorceptor } from './intorceptor/intorceptor';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HeaderComponent } from './component/header/header.component';
import { SettingComponent } from './component/setting/setting.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TaskComponent,
    ProgressbarComponent,
    ResultComponent,
    AddTaskComponent,
    AlertComponent,
    DialogContentExampleDialog,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatSliderModule,
    MatExpansionModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  entryComponents:[DialogContentExampleDialog],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: Intorceptor, multi: true },
    SendemailService,Global],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA]
})
export class AppModule { }
