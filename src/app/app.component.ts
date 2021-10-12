import {Component, OnInit} from '@angular/core';
import {AuditTrailService} from './auditTrail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private audit: AuditTrailService) {
  }

  title = 'research-app';

  // obj1 = {
  //   a: 'i am unchanged',
  //   b: 'i am deleted',
  //   e: {
  //     a: 1,
  //     b: false,
  //     c: null
  //   },
  //   f:
  //     [
  //       1,
  //       {
  //         a: 'same',
  //         b: [
  //           {
  //             a: 'same'
  //           },
  //           {
  //             d: 'delete'
  //           }
  //         ]
  //       }
  //     ],
  //   g: new Date('2017.11.25')
  // };
  // obj2 = {
  //   a: 'i am unchanged',
  //   c: 'i am created',
  //   e: {
  //     a: '1',
  //     b: '',
  //     d: 'created'
  //   },
  //   f: [
  //     {
  //       a: 'same',
  //       b: [
  //         {
  //           a: 'same'
  //         },
  //         {
  //           c: 'create'
  //         }
  //       ]
  //     },
  //     1
  //   ],
  //   g: new Date('2017.11.25')
  // };

  obj1 = {
    a: 'Old1',
    b: 'Hello',
    c: 23,
    d: 'old value', // deleted in new one
    e: '',
    f: 'hello',
    g: new Date('2017.11.25')
  }; // this is the old
  obj2 = {
    a: 'New',
    b: 'Bye',
    c: '23',

    e: '',
    f: '', // empty string
    g: new Date('2017.11.25'),
    z: 'NEWEST DATA'
  }; // this is the new

  ngOnInit() {
    this.ex1();
  }

  ex1(){
    const trails = this.audit.execution(this.obj1, this.obj2);
    console.log(trails);
  }


}



