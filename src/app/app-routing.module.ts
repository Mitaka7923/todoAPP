import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'details',
    loadChildren: () => import('./pages/details/details.module').then(m => m.DetailsPageModule)
  },
  {
    path: 'creator',
    loadChildren: () => import('./pages/creator/creator.module').then(m => m.CreatorPageModule)
  },
  {
    path: 'app-info',
    loadChildren: () => import('./pages/app-info/app-info.module').then(m => m.AppInfoPageModule)
  },
  {
    path: 'end',
    loadChildren: () => import('./pages/end/end.module').then(m => m.EndPageModule)
  },
  {
    path: 'calculator',
    loadChildren: () => import('./pages/calculator/calculator.module').then(m => m.CalculatorPageModule)
  },
  {
    path: 'changes',
    loadChildren: () => import('./pages/changes/changes.module').then(m => m.ChangesPageModule)
  },
  {
    path: 'second-card-details',
    loadChildren: () => import('./pages/second-card-details/second-card-details.module').then(m => m.SecondCardDetailsPageModule)
  },
  {
    path: 'third-card-details',
    loadChildren: () => import('./pages/third-card-details/third-card-details.module').then(m => m.ThirdCardDetailsPageModule)
  },
  {
    path: 'fourth-card-details',
    loadChildren: () => import('./pages/fourth-card-details/fourth-card-details.module').then(m => m.FourthCardDetailsPageModule)
  },
  {
    path: 'fifth-card',
    loadChildren: () => import('./pages/fifth-card/fifth-card.module').then(m => m.FifthCardPageModule)
  },
  {
    path: 'sixth-card',
    loadChildren: () => import('./pages/sixth-card/sixth-card.module').then(m => m.SixthCardPageModule)
  },
  {
    path: 'seventh-card',
    loadChildren: () => import('./pages/seventh-card/seventh-card.module').then(m => m.SeventhCardPageModule)
  },
  {
    path: 'eight-card',
    loadChildren: () => import('./pages/eight-card/eight-card.module').then(m => m.EightCardPageModule)
  },
  {
    path: 'ninth-card',
    loadChildren: () => import('./pages/ninth-card/ninth-card.module').then(m => m.NinthCardPageModule)
  },
  {
    path: 'tenth-card',
    loadChildren: () => import('./pages/tenth-card/tenth-card.module').then(m => m.TenthCardPageModule)
  },
  {
    path: 'ele-card',
    loadChildren: () => import('./pages/ele-card/ele-card.module').then(m => m.EleCardPageModule)
  },
  {
    path: 'twelve-card',
    loadChildren: () => import('./pages/twelve-card/twelve-card.module').then(m => m.TwelveCardPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
