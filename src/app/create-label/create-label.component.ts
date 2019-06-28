import { Component, OnInit } from '@angular/core';
import { GetLabelsService } from '../get-labels.service';

@Component({
  selector: 'app-create-label',
  templateUrl: './create-label.component.html',
  styleUrls: ['./create-label.component.css']
})
export class CreateLabelComponent implements OnInit {
 // [x: string]: any;
labels:any;
newlbl:string;
//isLabeledDisabled=true;
  constructor(private lblservice:GetLabelsService) 
  {
    //console.log(service.getlabels());
    //service.addlabels("testing");
    this.labels= lblservice.getlabels();
  }
  onlbladd(lblval:any/* ,service:GetLabelsService */){
   //console.log(this.lblservice.getlabels());
    this.lblservice.addlabels(lblval);
    this.newlbl="";
    
    //this.service.addlabels(lblval);//console.log(lblval); 
    //console.log(service.getlabels());
    //service.addlabels(lblval);
   }
   onlblEdit(lblIndex){
     //console.log(lblIndex);
     this.labels[lblIndex].isLblDisabled=!this.labels[lblIndex].isLblDisabled;
   }

   onlblupdate(lblId,lblupd){
console.log(lblId + " "+lblupd);
this.labels[lblId].isLblDisabled=!this.labels[lblId].isLblDisabled;
this.lblservice.updatelabels(lblId,lblupd);


//this.labels[lblIndex-1].isLblDisabled=!this.labels[lblIndex-1].isLblDisabled;
   }
  ngOnInit() {
  }
 
}
