import { componentFactoryName } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
selector:'pm-star',
templateUrl:'./star.component.html'
})
export class StarComponent{
Rating : number = 5;

}