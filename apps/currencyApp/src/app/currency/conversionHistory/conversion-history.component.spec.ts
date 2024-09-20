import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { conversionHistoryComponent } from './conversion-history.component';

describe('conversionHistoryComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([{ path: '', component: conversionHistoryComponent }]),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(conversionHistoryComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it('should render title', fakeAsync(() => {
    const fixture = TestBed.createComponent(conversionHistoryComponent);
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
