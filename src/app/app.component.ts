import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public ticker: string = '';
  public dividend: number = 2.536;
  public growth: number = 4;
  public return: number = 7;
  public range: number = 4;

  public growthTest: number = 5;

  get veryTop(): number {
    return 1 + (1 * this.range / 100 * 2);
  }

  get top(): number {
    return 1 + (1 * this.range / 100);
  }

  get bottom(): number {
    return 1 - (1 * this.range / 100);
  }

  get veryBottom(): number {
    return 1 - (1 * this.range / 100 * 2);
  }

  public getFairValue(growthRate: number, returnRate: number): number {
    const growthAdjusted: number = this.growth * growthRate;
    const returnAdjusted: number = this.return * returnRate;

    const numerator: number = this.dividend * (1 + growthAdjusted / 100);
    const denominator: number = returnAdjusted / 100 - growthAdjusted / 100;

    return Math.round((numerator / denominator) * 100) / 100;
  }
}
