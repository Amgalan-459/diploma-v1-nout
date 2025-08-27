import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-personal-account',
  imports: [],
  templateUrl: './personal-account.component.html',
  styleUrl: './personal-account.component.css'
})
export class PersonalAccountComponent {
  @ViewChildren('dropside') dropside: QueryList<ElementRef> | undefined;

  onClickDrop(event: Event, index: number) {
    const target = event.currentTarget as HTMLElement;
    if (this.dropside) {
      this.dropside.forEach((dropside, i) => {
        if (i !== index) {
          dropside.nativeElement.classList.remove("show");
        }
      });
      const dropsideEl = this.dropside.get(index)?.nativeElement;
      if (dropsideEl) {
        dropsideEl.style.paddingTop = `${target.offsetTop}px`;
        dropsideEl.classList.toggle("show");
      }
    }
  }
}
