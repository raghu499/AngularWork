import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-examples',
  animations: [
    trigger('openClose', [

      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'green'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'red'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent implements OnInit {
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor() {

    const obj = { first: 'Raghu', last: 'Sanka', age: 39 };
    // const f = obj.first;
    // const l = obj.last;

    const { first, last } = obj;
    console.log(first); // Asim
    console.log(last); // Hussain
    let array = [1, 2, 3];
    for (let i = 0; i < array.length; i++) {
      console.log("with for loop " + array[i]);
    }

    array.forEach(function (value) {
      console.log("With forEach loop " + value);
    });

    var obj1 = { a: 1, b: 2 };
    for (let prop in obj1) {
      console.log("With in forIn loop will return properties " + prop);
    }

    var obj2 =[2,4,5];
    for (let def of obj2){
    console.log("With in forOf loop will return values " + def);
    }

  }

  ngOnInit() {
  }

}
