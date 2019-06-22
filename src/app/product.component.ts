import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ngModuleJitUrl } from '@angular/compiler';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';

@Component({
    selector: 'pm-prod',
     templateUrl: './product.component.html'
})
export class ProductComponent  implements OnInit{
    
    private _filtertext = 'Prod';
    private _btnDisplay = 'Show Image';
    filterCounter : number =0;
    imgDisplay: boolean =false;
    public productList: IProduct[] = [
{"prodImage":"assets/Images/product1.jpeg","prodName":"Product1","prodCode":"01","prodAvailable":"01-MAY-2019","prodPrice":50,"prodRating":4}
,{"prodImage":"assets/Images/product2.jpeg","prodName":"check2","prodCode":"02","prodAvailable":"01-MAY-2019","prodPrice":50,"prodRating":5}
    ];
    public filteredList : IProduct[] =[];
    //this.filteredList[0]=this.productList[0];
    
    public get filtertext() {
        return this._filtertext;
    }
    public set filtertext(value) {
        this._filtertext = value;
    }
    public get btnDisplay() {
        return this._btnDisplay;
    }
    public set btnDisplay(value) {
        this._btnDisplay = value;
    }
    
    filterProduct():void
    
    {
        //console.log(this.filtertext);
        this.filterCounter=0;
        this.filteredList=[];
        if (this.filtertext==''){
            this.filteredList=this.productList;
        }
        else{
    for (let prod of this.productList){
        if (prod.prodName.toLowerCase().search(this.filtertext.toLowerCase())==0){
            //document.getElementById("p").innerHTML=this.filterCounter;
            this.filteredList[this.filterCounter]=prod;
          //  console.log(this.filteredList[this.filterCounter].prodName);
            this.filterCounter++;
            
        }
    }
this.filterCounter=0;
    }
    
       }
     

    
    toggleImage():void {
       if (this.btnDisplay=="Show Image")
       {this.btnDisplay="Hide Image";}

       else 
       {this.btnDisplay="Show Image";}
        this.imgDisplay=!this.imgDisplay;
        //falert(this.btnDisplay);
    }
    ngOnInit(): void {
        //console.log("In OnInit");
        this.filterCounter=0;
        this.filteredList=[];
        for (let prod of this.productList){
          //  console.log(prod.prodName + " : Filter Text " + this.filtertext+ " :Filter Counter "+ this.filterCounter);
            //this.filteredList[this.filterCounter]=prod;
            //console.log(this.filteredList[this.filterCounter].prodName);
            //console.log(prod.prodName.includes(this.filtertext));
            //console.log(prod.prodName.search(this.filtertext));
            if (prod.prodName.search(this.filtertext)==0){
                // document.getElementById("p").innerHTML=prod.prodName;
              //  console.log(prod.prodName+" "+this.filtertext);
                this.filteredList[this.filterCounter]=prod;
                //console.log(this.filteredList[this.filterCounter].prodName);
                //this.filterCounter++;
                //alert(this.filterCounter);
            }
            this.filterCounter++;
            
    }
    this.filterCounter=0;
        //this.filteredList=this.productList;
        /* console.log(this.productList[0].prodName);
        //throw new Error("Method not implemented."); 
       //filteredList=productList;*/
} 
}
