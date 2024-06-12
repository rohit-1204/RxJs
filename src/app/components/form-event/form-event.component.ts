import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-form-event',
  standalone: true,
  imports: [],
  templateUrl: './form-event.component.html',
  styleUrl: './form-event.component.css'
})
export class FormEventComponent {

constructor(){

}

@ViewChild('addBtn') addBtn!:ElementRef;

ngAfterViewInit(){
  let count = 1
  console.log(this.addBtn)
  fromEvent(this.addBtn.nativeElement,'click').subscribe((data)=>{
    let el = document.createElement('li');
    el.innerHTML = 'Video' + ' ' + count ++;
    document.getElementById('videoElements')?.appendChild(el)

this.addVideo();
  })

}
addVideo(){

}
}
