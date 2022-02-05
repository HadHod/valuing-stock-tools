import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-discounted-cash-flow',
  templateUrl: './discounted-cash-flow.component.html',
  styleUrls: ['./discounted-cash-flow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiscountedCashFlowComponent {
  public year: number = new Date().getFullYear();
  public freeCashFlow: number[] = [57_817_557, 60_597_096, 62_415_009, 64_287_459];
  public return: number = 7.5;
  public growth: number = 2.5;
  public shares: number = 4_601_075;

  public getDiscountFactor(exponent: number): number {
    return Math.round(Math.pow(1 + this.return / 100, exponent) * 1000) / 1000;
  }

  get terminalValue(): number {
    const numerator: number = this.freeCashFlow[3] * (1 + this.growth / 100);
    const denominator: number = this.return / 100 - this.growth / 100;
    return Math.round(numerator / denominator);
  }

  public getPVOfFutureCashFlow(step: number): number {
    if (step === 4) {
      return Math.round(this.terminalValue / this.getDiscountFactor(step + 1));
    }
    return Math.round(this.freeCashFlow[step] / this.getDiscountFactor(step + 1));
  }

  get marketCap(): number {
    return [0, 1, 2, 3, 4].reduce((prev: number, current: number) => this.getPVOfFutureCashFlow(current) + prev, 0);
  }

  get fairValue(): number {
    return Math.round(this.marketCap / this.shares * 100) / 100;
  }
}
