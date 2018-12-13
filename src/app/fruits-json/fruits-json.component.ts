import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import {IFruits} from '../ifruits';

@Component({
  selector: 'app-fruits-json',
  templateUrl: './fruits-json.component.html',
  styleUrls: ['./fruits-json.component.css'],
  providers: [TestService]

})
export class FruitsJsonComponent implements OnInit {
  Fruits: IFruits[]=null;
  constructor(private testService:TestService) { }

  ngOnInit() {
    this.testService.getFruits().subscribe((FruitsData) => this.Fruits = FruitsData);
    //.log(this.Fruits);
  }

}
