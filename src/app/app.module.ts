import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Footer } from './footer/footer.component';
import { Teachers } from './teachers/teachers.component';
import { HttpClientModule } from '@angular/common/http';
import { TeacherCardComponent } from './teacher-card/teacher-card.component';

@NgModule({
  declarations: [
    AppComponent,
    Footer,
    Teachers,
    TeacherCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
