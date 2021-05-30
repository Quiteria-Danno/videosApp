import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'vintedois-contra-terra',
    loadChildren: () => import('./filmes/vintedois-contra-terra/vintedois-contra-terra.module').then( m => m.VintedoisContraTerraPageModule)
  },
  {
    path: 'pets-monstruosos',
    loadChildren: () => import('./filmes/pets-monstruosos/pets-monstruosos.module').then( m => m.PetsMonstruososPageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  },
  {
    path: 'vanquish',
    loadChildren: () => import('./Filmes/vanquish/vanquish.module').then( m => m.VanquishPageModule)
  },
  {
    path: 'the-virtuoso',
    loadChildren: () => import('./Filmes/the-virtuoso/the-virtuoso.module').then( m => m.TheVirtuosoPageModule)
  },
  {
    path: 'godzilla-kong',
    loadChildren: () => import('./Filmes/godzilla-kong/godzilla-kong.module').then( m => m.GodzillaKongPageModule)
  },
  {
    path: 'buffalo-boys',
    loadChildren: () => import('./Filmes/buffalo-boys/buffalo-boys.module').then( m => m.BuffaloBoysPageModule)
  },
  {
    path: 'cruella',
    loadChildren: () => import('./Filmes/cruella/cruella.module').then( m => m.CruellaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
