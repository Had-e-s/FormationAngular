import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'prestation',
    loadChildren: './prestation/prestation.module#PrestationModule',
  },
  {
    path: 'client',
    loadChildren: './client/client.module#ClientModule',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: PreloadAllModules
      }
    )
  ],
  declarations: []
})
export class AppRoutingModule { }
