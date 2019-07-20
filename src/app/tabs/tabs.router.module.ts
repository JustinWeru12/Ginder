import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  // {
  //   path: '',
  //   component: TabsPage,
  //   children: [
  //     {
  //       path: 'Home',
  //       children: [
  //         {
  //           path: '',
  //           loadChildren: './home/home.module#HomePageModule'
  //         }
  //       ]
  //     },
  //     {
  //       path: 'Tracker',
  //       children: [
  //         {
  //           path: '',
  //           loadChildren: '../tracker/tracker.module#TrackerPageModule'
  //         }
  //       ]
  //     },
  //     {
  //       path: 'Finder',
  //       children: [
  //         {
  //           path: '',
  //           loadChildren: '../finder/finder.module#FinderPageModule'
  //         }
  //       ]
  //     },
  //     {
  //       path: 'About',
  //       children: [
  //         {
  //           path: '',
  //           loadChildren: '../about/about.module#AboutPageModule'
  //         }
  //       ]
  //     },
  //     {
  //       path: '',
  //       redirectTo: '/tabs/home',
  //       pathMatch: 'full'
  //     }
  //   ]
  // },
  // {
  //   path: '',
  //   redirectTo: '/tabs/home',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
