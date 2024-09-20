import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from '../../app.component';

describe('NavbarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([{ path: '', component: AppComponent }]),
        NavbarComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it('should render title', fakeAsync(() => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const router = TestBed.inject(Router);
    fixture.ngZone?.run(() => router.navigate(['']));
    tick();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome currencyApp'
    );
  }));
});
