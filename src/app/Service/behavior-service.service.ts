import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BehaviorServiceService {

  // Observable string sources
  private behaviorAskedSource = new Subject<string>();
  private behaviorReceivedSource = new Subject<string>();
 
  // Observable string streams
  behaviorAsked$ = this.behaviorAskedSource.asObservable();
  behaviorReceived$ = this.behaviorReceivedSource.asObservable();
 
  // Service message commands
  askBehavior(mission: string) {
    this.behaviorAskedSource.next(mission);
  }
 
  receiveBehavior(astronaut: string) {
    this.behaviorReceivedSource.next(astronaut);
  }

}
