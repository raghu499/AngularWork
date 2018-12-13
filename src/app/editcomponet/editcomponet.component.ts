import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editcomponet',
  templateUrl: './editcomponet.component.html',
  styleUrls: ['./editcomponet.component.css']
})
export class EditcomponetComponent implements OnInit {
server: {id: number, name:string, status: string};

  constructor(private route:ActivatedRoute) { 

  }

  ngOnInit() {
    // console.log(this.route.snapshot.queryParams);
    // console.log(this.route.snapshot.fragment);

    this.route.queryParams.subscribe();
    this.route.fragment.subscribe();

  }

}
