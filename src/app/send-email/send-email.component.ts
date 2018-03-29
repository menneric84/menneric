import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {
  ngOnInit() {
  }
  endpoint = 'https://us-central1-menneric-197100.cloudfunctions.net/httpEmail';

  constructor(private http: HttpClient,private router: Router) { }


  sendEmail() {
    const data = {
      fromEmail: 'myCustomer@gmail.com',
      fromName: 'Randy Savage',
      text: 'This message is a test'
    }

    this.http.post(this.endpoint, data).subscribe();
    this.router.navigate(['/']);
  }

}
