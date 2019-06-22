import { componentFactoryName } from '@angular/compiler';
import { Component, Input, Output, OnInit } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
selector:'pm-star',
templateUrl:'./star.component.html'
})
export class StarComponent implements OnInit{
@Input() Rating : number;
starWidth : number;
//@Output() revert: EventEmitter<string>=new EventEmitter<string>();
ngOnInit(): void{
this.starWidth=this.Rating*75/5;
console.log(this.starWidth+"px");
//document.getElementById("starrating").style.width=this.starWidth.toString()&"px";
}
}