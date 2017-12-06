import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {

  logMessages: any[] = [
    {
      person: "Ariel",
      message: "Nothing Good",
      createdAt: new Date(),
    },
    {
      person: "Alex",
      message: "Sitting around",
      createdAt: new Date(),
    },
  ];

  constructor() { }

  addAccessItem(newLogMsg: any) {
    this.logMessages.push(newLogMsg);
  }

  getAccessLog() {
    return(this.logMessages);
  }
}
