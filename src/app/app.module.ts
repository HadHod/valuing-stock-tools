import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';

import { DividendDiscountModelComponent } from './components/dividend-discount-model/dividend-discount-model.component';
import { DiscountedCashFlowComponent } from './components/discounted-cash-flow/discounted-cash-flow.component';

const MAT_MODULES = [
  MatSliderModule,
  MatInputModule,
  MatIconModule,
  MatTabsModule,
  MatDividerModule,
];

@NgModule({
  declarations: [
    AppComponent,
    DividendDiscountModelComponent,
    DiscountedCashFlowComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MAT_MODULES,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
