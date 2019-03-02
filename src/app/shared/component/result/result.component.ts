import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  panelOpenState = false;
  @Input() result: any
  constructor() { }

  ngOnInit() {
  }

}
