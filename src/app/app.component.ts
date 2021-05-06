import { Component } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { FormGroup, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularProject1';
  public empName : string;
  public empID : number;
  public mainarray = [];
  form1 = NgModel;

  submitval(){
  const val = {
    name: this.empName,
    no: this.empID };
    this.mainarray.push(val);
    //this.form1.reset();
  }
  removeEmployee(j){
    this.mainarray.splice(j , 1);
  }

}
