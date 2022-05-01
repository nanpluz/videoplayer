import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faPlay, faBackward, faForward, faVolumeHigh, faExpand } from '@fortawesome/free-solid-svg-icons';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-watch-video',
  templateUrl: './watch-video.component.html',
  styleUrls: ['./watch-video.component.css']
})
export class WatchVideoComponent implements OnInit {

  public faArrowLeft = faArrowLeft;
  public faPlay = faPlay;
  public faBackward = faBackward;
  public faForward = faForward;
  public faVolumeHigh = faVolumeHigh;
  public faExpand = faExpand;

  public opacity = "opacity: 0%;";

  public videoSrc: String | ArrayBuffer | null = "";

  constructor(_videoService: VideoService) {
    _videoService.getVideoSrc().subscribe(src => {
      this.videoSrc = src;
    });
  }

  ngOnInit(): void {

  }
  toggleControls(str: String) {
    switch (str) {
      case 'show':
        this.opacity = "opacity: 100%;"
        break;
      case 'hide':
        this.opacity = "opacity: 0%;"
        break;
    }
  }
  
}
