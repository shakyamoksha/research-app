import {Component, OnInit} from '@angular/core';
import {AuditTrailService} from './shared/auditTrail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'research-app';

  ngOnInit() {

  }

}



