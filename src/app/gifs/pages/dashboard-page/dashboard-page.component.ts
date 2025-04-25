import { GifsSideMenuComponent } from './../../components/gifs-side-menu/gifs-side-menu.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, GifsSideMenuComponent],
  template: `
  <div class="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
  <div class="flex flex-col relative w-screen">

    
        <app-gifs-side-menu></app-gifs-side-menu>
      <div class="ml-[220px] px-4 flex flex-col flex-1 w-full h-full text-slate-800">
      <router-outlet></router-outlet>
      </div>
  </div>
</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent { }
