import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private videoSrc = new BehaviorSubject<String | ArrayBuffer | null>('');
  public currentVideoSrc = this.videoSrc.asObservable();

  constructor() {
  }

  setVideoSrc(url: String | ArrayBuffer | null) {
    this.videoSrc.next(url)
  }
  getVideoSrc() {
    return this.currentVideoSrc;
  }
}
