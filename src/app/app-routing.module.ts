import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', 
    // component: TabsPage,
    children: [
      {
        path: 'Home',
        children: [
          {
            path: '',
            loadChildren: './home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'Tracker',
        children: [
          {
            path: '',
            loadChildren: './tracker/tracker.module#TrackerPageModule'
          }
        ]
      },
      {
        path: 'Finder',
        children: [
          {
            path: '',
            loadChildren: './finder/finder.module#FinderPageModule'
          }
        ]
      },
      {
        path: 'About',
        children: [
          {
            path: '',
            loadChildren: './about/about.module#AboutPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: './home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: './home',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'finder', loadChildren: './finder/finder.module#FinderPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'tracker', loadChildren: './tracker/tracker.module#TrackerPageModule' }
  
    
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
