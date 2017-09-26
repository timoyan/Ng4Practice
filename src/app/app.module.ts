import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MotherComponent } from './Component/mother/mother.component';
import { ChildrenComponent } from './Component/children/children.component';


@NgModule({
  declarations: [
    AppComponent,
    MotherComponent,
    ChildrenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
