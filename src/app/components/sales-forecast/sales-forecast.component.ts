import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sales-forecast',
  templateUrl: './sales-forecast.component.html',
  styleUrls: ['./sales-forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SalesForecastComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
