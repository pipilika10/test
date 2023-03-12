import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInCheckComponent } from './sign-in-check.component';

describe('SignInCheckComponent', () => {
  let component: SignInCheckComponent;
  let fixture: ComponentFixture<SignInCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
