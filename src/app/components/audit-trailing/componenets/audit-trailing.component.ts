import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {AuditTrailService} from '../../../shared/auditTrail.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-audit-trailing',
  templateUrl: './audit-trailing.component.html',
  styleUrls: ['./audit-trailing.component.scss']
})
export class AuditTrailingComponent implements OnInit {
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
  auditInit;

  auditForm: FormGroup;
  @ViewChild('autosize', {static: false}) autosize: CdkTextareaAutosize;

  constructor(private audit: AuditTrailService, private formBuilder: FormBuilder, private _ngZone: NgZone) { }

  ngOnInit(): void {
    this.createForm();
    this.setInitialValues();

  }

  private createForm() {
    this.auditForm = this.formBuilder.group({
      customerName: ['Jules Winnfield', [Validators.required]],
      customerNumber: ['123455445', []],
      phoneNo: ['5123456783', []],
      description: [''],
      email: [''],
      height: [''],
      BMI: ['']
    });
  }

  triggerAudit(){
    const trails = this.audit.execution(this.auditInit, this.auditForm.getRawValue());
    console.log(trails);
  }

  private setInitialValues() {
    this.auditInit = this.auditForm.getRawValue();
  }

}
