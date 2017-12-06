import { Component, OnInit } from '@angular/core';

import { AccessControlLogService } from '../services/access-control-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  newLogMsg: any = {};

  constructor(private accessThang: AccessControlLogService) { }

  ngOnInit() {
  }

  logSubmit() {
      // use the service's method to add a log
      this.accessThang.addAccessItem(this.newLogMsg);
      // reset the form
      this.newLogMsg.push = {};
      alert("Form Submitted");
  }

}
