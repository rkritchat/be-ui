import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskComponent } from './shared/component/task/task.component'
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ProgressbarComponent } from './shared/component/progressbar/progressbar.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';
import { ResultComponent } from './shared/component/result/result.component';
import { SendemailService } from './service/sendemail.service';
import { AddTaskComponent } from './component/add-task/add-task.component';
import { Global } from './shared/class/global';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TaskComponent,
    ProgressbarComponent,
    ResultComponent,
    AddTaskComponent,
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
    MatExpansionModule
  ],
  providers: [SendemailService,Global],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA]
})
export class AppModule { }
