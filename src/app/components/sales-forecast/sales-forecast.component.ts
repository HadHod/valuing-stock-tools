import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sales-forecast',
  templateUrl: './sales-forecast.component.html',
  styleUrls: ['./sales-forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SalesForecastComponent {
  public marketCap: number = 12.345;
  public currentDate: Date = new Date();
  public year: number = this.currentDate.getFullYear();
  public margin: number[] = [10, 15, 20];
  public revenue: number[] = [1, 2, 3, 4, 5];

  public calculatePriceToEarnings(revenueIndex: number, marginIndex: number): number {
    return Math.round(this.marketCap / (this.revenue[revenueIndex] * this.margin[marginIndex] / 100));
  }

  public calculatePercentageChange(index: number): string {
    const increase: number = this.revenue[index] - this.revenue[index - 1];
    const percent: number = increase / this.revenue[index - 1] * 100;
    return `${percent >= 0 ? '+' : ''}${percent.toFixed(2)}%`;
  }
}
