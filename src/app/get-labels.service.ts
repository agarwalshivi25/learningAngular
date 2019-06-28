import { Injectable } from '@angular/core';

@Injectable(/* {
  //providedIn: 'root'
} */)
export class GetLabelsService {
labels:{}[];
  constructor() { 
    this.labels=[{'lblId':'1','lblName':'Notes_Label','isLblDisabled':true},
    {'lblId':'2','lblName':'Notes_Label1','isLblDisabled':true},
    {'lblId':'3','lblName':'Notes_Label2','isLblDisabled':true}];
  }
  getlabels():any{
    return this.labels;
  }
  addlabels(label:string){
   // this.labels.unshift
    //console.log(label);
    
    //this.labels.push({'lblId':this.labels.length+1,'lblName':label,'isLblDisabled':true});
    this.labels.splice(0,0,{'lblId':this.labels.length+1,'lblName':label,'isLblDisabled':true})
    
  }
  updatelabels(lblId,label:string){
    // this.labels.unshift
     this.labels[lblId].lblName=label;
     console.log(this.labels[lblId]);
    // this.labels.find()
//this.labels[lblId].lblName;
    // this.labels.push({'lblId':this.labels.length+1,'lblName':label,'isLblDisabled':true});
     
     
   }
}
