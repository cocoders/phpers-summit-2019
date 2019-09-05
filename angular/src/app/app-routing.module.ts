import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { BeerMenuComponent } from './beer-menu/beer-menu.component';


const routes: Routes = [
  {component: TestComponent, path: 'test'},
  {component: BeerMenuComponent, path: 'beer'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
