import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-scrollspy',
  templateUrl: './simple-scrollspy.component.html',
  styleUrls: ['./simple-scrollspy.component.scss']
})
export class SimpleScrollspyComponent implements OnInit {

  sections = [];
  navLinks = [];

  constructor(private _elementRef: ElementRef) {}

  ngOnInit() {
    this.sections = this._elementRef.nativeElement.querySelectorAll('section');
    this.navLinks = this._elementRef.nativeElement.querySelectorAll('header nav a');
  }

  getValueFromLastCharacter(){
    const input = 'https://www.codegrepper.com/code-examples/javascript/how+to+slice+a+string+in+javascript+with+comma';
    const charPos = input.lastIndexOf('/');
    const id = input.substr(charPos + 1);
  }

  @HostListener('window:scroll', ['$event']) onScroll(event) {
    for (const section of this.sections) {
      const top = window.scrollY;
      const offset = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (top >= offset && top < offset + height){
        this.navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
      }
    }
  }

}
