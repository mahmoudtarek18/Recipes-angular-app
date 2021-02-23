import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule) },
  // {path: 'recipes', loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule) }
  { path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule' },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
