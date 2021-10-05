import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit, QueryList, ViewChildren
} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-advanced-scrollspy',
  templateUrl: './advanced-scrollspy.component.html',
  styleUrls: ['./advanced-scrollspy.component.scss']
})
export class AdvancedScrollspyComponent implements OnInit, AfterViewChecked, AfterViewInit, OnDestroy {
  DYNAMICNAV = [];
  url;
  observer: any;
  navigationForm: FormGroup;

  @ViewChildren('sections') sections: QueryList<ElementRef>;

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private _elementRef: ElementRef,
    private _formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.createForm();
    this.intersectionObserver();
    this.url = '/advancedscroll';
  }

  ngAfterViewChecked() {
    // Change Detector to detect any changes in form validity on trigger
    this.changeDetectorRef.detectChanges();
  }

  ngAfterViewInit() {
    this.getNavigation();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }
  }

  getNavigation(){
    this.DYNAMICNAV = [];

    this.sections.forEach(section => { // For Parent Sections

      if (!section.nativeElement.id.includes('--')){

        const nest = [];
        const obj = {href: `#${section.nativeElement.id}`, name: section.nativeElement.firstChild.innerText, nest};

        this.sections.forEach(sub => { // For Child Sections -- to be refactored
          if (sub.nativeElement.id.includes(`${section.nativeElement.id}--`)){
            const objet = {href: `#${sub.nativeElement.id}`, name: sub.nativeElement.firstChild.innerText};
            nest.push(objet);
          }
        });

        this.DYNAMICNAV.push(obj);
      }
    });

  }

  @HostListener('window:scroll', ['$event']) onScroll(event) {
    this.sections.forEach(vector => {
      this.observer.observe(vector.nativeElement);
    });
  }

  scrollTo(fragment: string): void {
    this.router.navigateByUrl(this.url + fragment);
  }

  intersectionObserver(){
    const options = {root: null, rootMargin: '0px', threshold: 0};

    this.observer = new IntersectionObserver(entries => {

      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        // console.log(entry.intersectionRatio);
        if (entry.intersectionRatio > 0) {
          // console.log('add');
          document.querySelector(`nav li a[id="#${id}"]`).parentElement.classList.add('active');
        } else {
          // console.log('remove');
          document.querySelector(`nav li a[id="#${id}"]`).parentElement.classList.remove('active');
        }
      });

    });
  }

  private createForm() {
    this.navigationForm = this._formBuilder.group({
      units: this._formBuilder.array([
        // to load first row at start
        this.getUnit()
      ])
    });
  }

  /*** Create Array Form */
  private getUnit() {
    const numberPattern = '^[0-9.,]+$';

    return this._formBuilder.group({
      customerName: ['', [Validators.required]],
      customerNumber: ['', []],
      phoneNo: ['', []],
      description: [''],
      email: [''],
      height: [''],
      BMI: ['']
    });


  }

  /*** Add new unit row into form */
  addUnit() {
    const control = this.navigationForm.controls[`units`] as FormArray;
    control.push(this.getUnit());
    setTimeout(() => {
      this.getNavigation();
    }, 25);
  }

  /*** Remove unit row from form on click delete button **/
  removeUnit(x: number) {
    const control = this.navigationForm.controls[`units`] as FormArray;
    control.removeAt(x);
    setTimeout(() => {
      this.getNavigation();
    }, 25);
  }

  /*** This is one of the way how clear units fields. */
  clearAllUnits() {
    const control = this.navigationForm.controls[`units`] as FormArray;
    while (control.length) {control.removeAt(control.length - 1); }
    control.clearValidators();
    control.push(this.getUnit());
  }

  getFormDataTest(control) {
   console.log(control);

  }

  getChildArray(){

    this.getNavigation();

  }

}
