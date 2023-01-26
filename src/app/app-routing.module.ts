import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureFlagGuard } from './routes/feature.guard';
import { MainComponent } from './routes/main.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
  },
  {
    path: 'secret-page',
    canMatch: [FeatureFlagGuard],
    data: {
      feature: 'secret-page-enabled',
    },
    loadComponent: () => import('./routes/secret.component').then(module => module.SecretComponent),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
