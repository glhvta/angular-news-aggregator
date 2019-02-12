import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesSelectorFormComponent } from './articles-selector-form.component';

describe('ArticlesSelectorFormComponent', () => {
  let component: ArticlesSelectorFormComponent;
  let fixture: ComponentFixture<ArticlesSelectorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesSelectorFormComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesSelectorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
