import { Component, OnInit } from '@angular/core';
import { BehaviorServiceService } from '../../Service/behavior-service.service';

@Component({
  selector: 'app-mother',
  templateUrl: './mother.component.html',
  styleUrls: ['./mother.component.scss'],
  providers: [BehaviorServiceService]
})
export class MotherComponent implements OnInit {
  momBehavior: string[];
  childData: any;

  constructor(private behaviorService: BehaviorServiceService) {

  }

  ngOnInit() {

    this.childData = [
      { "Name": "C1", "Age": 10, "Gender": "Female" },
      { "Name": "C2", "Age": 20, "Gender": "Male" }
    ];

    this.momBehavior = ["Ask sleep", "Ask eat", "Wake up"];
  }


  momAct(e: MouseEvent): void {
    var behavior: string = (<HTMLInputElement>e.target).value;

  }
}
