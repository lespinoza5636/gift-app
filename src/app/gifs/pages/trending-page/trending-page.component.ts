import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-trending-page',
  imports: [],
  template: `<p>trending-page works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrendingPageComponent { }
