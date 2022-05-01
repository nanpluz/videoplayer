import { Component, OnInit } from '@angular/core';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videoService: VideoService;

  constructor(_videoService: VideoService) {
    this.videoService = _videoService;
  }

  ngOnInit(): void {
  }

  readInput(input: any) {
    const reader = new FileReader();
    reader.onload = () => {
      this.videoService.setVideoSrc(reader.result);
    }
    reader.readAsDataURL(input.target.files[0]);

  }

}
