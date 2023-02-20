import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AppComponentForm } from './pages/main/app.componentform';

//const routes: Routes = []; //rota para ir direto para home

 //rota para direcionar para algum lugar, aqui vamos redirecionar para o login
const routes: Routes = [
{
  path: "",
  pathMatch: "full",
  redirectTo: "login"
},
{
  path: "login", component: LoginComponent
},
{
  path: "pages/main/app.componentform", component: AppComponentForm
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
