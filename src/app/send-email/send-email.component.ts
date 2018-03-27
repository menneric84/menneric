import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {
  ngOnInit() {
  }
  endpoint = 'https://us-central1-menneric-197100.cloudfunctions.net/httpEmail';

  constructor(private http: HttpClient) { }


  sendEmail() {
    const data = {
      toEmail: 'menneric84@gmail.com',
      toName: 'Jeff Delaney'
    }

    this.http.post(this.endpoint, data).subscribe()
  }


}
