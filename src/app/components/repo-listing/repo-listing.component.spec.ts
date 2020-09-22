import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoListingComponent } from './repo-listing.component';

describe('RepoListingComponent', () => {
  let component: RepoListingComponent;
  let fixture: ComponentFixture<RepoListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
