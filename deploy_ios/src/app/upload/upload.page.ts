import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {
  private file: File;
  link : string = "";

  constructor(private http: HttpClient) { }

  onFileChange(fileChangeEvent) {
    this.file = fileChangeEvent.target.files[0];
  }
  async submitForm() {
    let formData = new FormData();
    formData.append("file", this.file, this.file.name);
​
    this.http.post<UploadResponse>("https://playclips-uat.com/app/file/upload", formData).subscribe((response) => {
      console.log(response);

      this.link = response.link;

    });
  }


  ngOnInit() {
  }

}
class UploadResponse {
  link: string;
}