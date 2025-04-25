import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifsSideMenuOptionsComponent } from './gifs-side-menu-options/gifs-side-menu-options.component';
import { GifsSideMenuHeaderComponent } from './gifs-side-menu-header/gifs-side-menu-header.component';

@Component({
  selector: 'app-gifs-side-menu',
  imports: [GifsSideMenuHeaderComponent, GifsSideMenuOptionsComponent],
  template: `  <div id="menu" class="w-[220px] bg-gray-900 min-h-screen z-10 text-slate-300 fixed left-0 h-screen overflow-y-scroll">
  <app-gifs-side-menu-header></app-gifs-side-menu-header>
  <app-gifs-side-menu-options></app-gifs-side-menu-options>
</div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifsSideMenuComponent { }
