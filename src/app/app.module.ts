import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KanvanLayoutComponent } from './Controles/kanvan-layout/kanvan-layout.component';
import { KanvanFormComponent } from './Controles/kanvan-form/kanvan-form.component';
import { HomeworkFormComponent } from './Controles/homework-form/homework-form.component';
import { TareaVisibleLayoutComponent } from './Controles/tarea-visible-layout/tarea-visible-layout.component';
import { TareaVisibleExpandibleComponent } from './Controles/tarea-visible-expandible/tarea-visible-expandible.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MovementControllerComponent } from './Controles/movement-controller/movement-controller.component';

@NgModule({
  declarations: [
    AppComponent,
    KanvanLayoutComponent,
    KanvanFormComponent,
    HomeworkFormComponent,
    TareaVisibleLayoutComponent,
    TareaVisibleExpandibleComponent,
    MovementControllerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
