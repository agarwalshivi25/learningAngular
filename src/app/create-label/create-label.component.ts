import { Component, OnInit } from '@angular/core';
import { GetLabelsService } from '../get-labels.service';

@Component({
  selector: 'app-create-label',
  templateUrl: './create-label.component.html',
  styleUrls: ['./create-label.component.css']
})
export class CreateLabelComponent implements OnInit {
 // [x: string]: any;
labels:string[];
  constructor(private lblservice:GetLabelsService) 
  {
    //console.log(service.getlabels());
    //service.addlabels("testing");
    this.labels= lblservice.getlabels();
  }
  onlbladd(lblval:any/* ,service:GetLabelsService */){
   //console.log(this.lblservice.getlabels());
    this.lblservice.addlabels(lblval);
    //this.service.addlabels(lblval);//console.log(lblval); 
    //console.log(service.getlabels());
    //service.addlabels(lblval);
   }
  ngOnInit() {
  }
 
}
