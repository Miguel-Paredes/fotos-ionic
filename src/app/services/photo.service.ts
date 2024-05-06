import { Injectable } from '@angular/core';

import {Camera, CameraResultType, CameraSource, Photo} from '@capacitor/camera'
import { WebView } from '@capacitor/core';

import {Filesystem, Directory} from '@capacitor/filesystem'


@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos : UserPhoto[] = [];

  constructor() { }
  public async addNewToGallery(){
    // Tomar foto
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    this.photos.unshift({
      filepath : "soot...",
      webviewPath : capturedPhoto.webPath!
    });

  }
}
export interface UserPhoto{
  filepath : string,
  webviewPath? : string
}
