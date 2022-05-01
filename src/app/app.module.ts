import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SendVideoComponent } from './send-video/send-video.component';
import { WatchVideoComponent } from './watch-video/watch-video.component';
import { VideoService } from './services/video.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    SendVideoComponent,
    WatchVideoComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
