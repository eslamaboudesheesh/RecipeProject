import { Component } from '@angular/core';

@Component({
    // component diceroter object 
    templateUrl:'./server.component.html',
    selector:'app-server',
    styles : [`
    .like{
        color:white;
    }
    `]

})
export class ServerComponent {
    value:string = "like";
 constructor(){
     this.value= Math.random()> 0.5 ? 'like' : 'unlike' ; 
}

getStatus(){
    return this.value === "like" ? "red": "pink" ;
}

}