import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  changes: Boolean = true;


  change(){
    // this.changes = false;
    // setTimeout(() => {
    //   this.changes = true;
    // }, 100);
    
    this.changes = !this.changes;
  }

}
