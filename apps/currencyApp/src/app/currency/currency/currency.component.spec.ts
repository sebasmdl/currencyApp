import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { CurrencyComponent } from './currency.component';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from '../../app.component';

describe('CurrencyComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([{ path: '', component: AppComponent }]),
        CurrencyComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CurrencyComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'currencyApp'`, () => {
    const fixture = TestBed.createComponent(CurrencyComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('currencyApp');
  });

  it('should render title', fakeAsync(() => {
    const fixture = TestBed.createComponent(CurrencyComponent);
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
