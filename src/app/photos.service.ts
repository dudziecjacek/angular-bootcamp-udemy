import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface PhotosServiceRespone {
  id: string,
  urls: {
    regular: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  apiKey: string = '84toFWjODb2kxj9E_jA1RTsYSvis5UpY23H7iipV8oM';
  apiAddress: string = 'https://api.unsplash.com/photos/random'

  constructor(private http: HttpClient) {

  }

  getPhoto() {
    return this.http.get<PhotosServiceRespone>(this.apiAddress, {
      headers: {
        Authorization: `Client-ID ${this.apiKey}`
      }
    })
  }

}
