import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';

export const routes: Routes = [
    { path:'' ,redirectTo:'addUsers',pathMatch:'full'},
    { path: 'getUsers', component: UsersComponent },
    { path: 'addUsers', component:AddUserComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes),],
    exports: [RouterModule]
})
export class AppRoutingModule { }