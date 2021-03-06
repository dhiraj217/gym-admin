import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.css']
})
export class LeaderBoardComponent implements OnInit {

  private userData = null;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.callBackEnd();
    setInterval(() => {this.callBackEnd(); }, 3000);
  }

  callBackEnd() {
    this.http.get('http://gymificationcodeathon-env.8vvmhjujd2.ap-south-1.elasticbeanstalk.com/users?sort=points,desc&page=0&size=5')
      .subscribe(data => {
        this.userData = data;
      });
  }
}
