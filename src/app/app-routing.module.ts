import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SendVideoComponent } from './send-video/send-video.component';
import { WatchVideoComponent } from './watch-video/watch-video.component';

const routes: Routes = [
  {path: "", component: HomeComponent, pathMatch:"full"},
  {path: "send", component: SendVideoComponent, pathMatch:"full"},
  {path: "watch", component: WatchVideoComponent, pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
