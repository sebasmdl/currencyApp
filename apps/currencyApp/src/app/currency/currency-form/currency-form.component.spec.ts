import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { CurrencyFormComponent } from './currency-form.component';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from '../../app.component';

describe('CurrencyFormComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([{ path: '', component: AppComponent }]),
        CurrencyFormComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CurrencyFormComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it('should render title', fakeAsync(() => {
    const fixture = TestBed.createComponent(CurrencyFormComponent);
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
