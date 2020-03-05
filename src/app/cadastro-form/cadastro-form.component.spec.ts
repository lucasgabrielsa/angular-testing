import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroFormComponent } from './cadastro-form.component';
import { DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('CadastroFormComponent', () => {
  let component: CadastroFormComponent;
  let fixture: ComponentFixture<CadastroFormComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroFormComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents().then(() => {
        fixture = TestBed.createComponent(CadastroFormComponent);

        component = fixture.componentInstance;

        de = fixture.debugElement.query(By.css('form'));
        console.log('de', de);

        el = de.nativeElement;
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should set submitted to true', () => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  });

  it('should submitted equals to false', () => {
    expect(component.submitted).toBeFalsy();
  });

  it('form should be valid', () => {
    component.contactForm.controls['name'].setValue('lucas');
    component.contactForm.controls['email'].setValue('lucas@g1.com.br');
    component.contactForm.controls['text'].setValue('any text');
    expect(component.contactForm.valid).toBeTruthy();
  });

  it('form should be invalid', () => {
    component.contactForm.controls['name'].setValue('');
    component.contactForm.controls['email'].setValue('');
    component.contactForm.controls['text'].setValue('');
    expect(component.contactForm.valid).toBeFalsy();
  });

  it('should call the onSubmit method', () => {
    fixture.detectChanges();
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  });



});
