import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ RouterLink, RouterLinkActive ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild('dropside') dropside!: ElementRef

  onClickDrop(){
    this.dropside.nativeElement.classList.toggle("show")
    console.log(this.dropside.nativeElement.classList)
  }
}
