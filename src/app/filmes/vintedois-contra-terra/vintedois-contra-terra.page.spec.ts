import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VintedoisContraTerraPage } from './vintedois-contra-terra.page';

describe('VintedoisContraTerraPage', () => {
  let component: VintedoisContraTerraPage;
  let fixture: ComponentFixture<VintedoisContraTerraPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VintedoisContraTerraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VintedoisContraTerraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
