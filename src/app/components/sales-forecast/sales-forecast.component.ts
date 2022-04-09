import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sales-forecast',
  templateUrl: './sales-forecast.component.html',
  styleUrls: ['./sales-forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SalesForecastComponent {
  public marketCap: number = 12.345;
  public year: number = new Date().getFullYear();
  public margin: number[] = [10, 15, 20];
  public revenue: number[] = [1, 2, 3, 4, 5];

  public calculatePriceToEarnings(revenueIndex: number, marginIndex: number): number {
    return Math.round(this.marketCap / (this.revenue[revenueIndex] * this.margin[marginIndex] / 100));
  }
}
