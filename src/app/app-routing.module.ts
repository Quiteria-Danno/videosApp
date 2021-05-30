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
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
