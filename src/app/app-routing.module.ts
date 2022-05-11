import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { NationsComponent } from './nations/nations.component';
import { RegionComponent } from './nations/region/region.component';
import { OrdersComponent } from './orders/orders.component';
import { ReligionComponent } from './religion/religion.component';
import { TimeComponent } from './time/time.component';
import { SearchresultsComponent } from './search/searchresults/searchresults.component';
import { NationindetailComponent } from './nations/nationindetail/nationindetail.component';
import { OrderComponent } from './order/order.component';
import { DetailedreligionComponent } from './religion/detailedreligion/detailedreligion.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AdminAreaComponent } from './AdminArea/admin-area/admin-area.component';

import { CreateNationComponent } from './AdminArea/create-nation/create-nation.component';
import { UpdateNationComponent } from './AdminArea/update-nation/update-nation.component';
import { DeleteNationComponent } from './AdminArea/delete-nation/delete-nation.component';
import { CreateNationTraitComponent } from './AdminArea/create-nation-trait/create-nation-trait.component';
import { UpdateNationTraitComponent } from './AdminArea/update-nation-trait/update-nation-trait.component';
import { DeleteNationTraitComponent } from './AdminArea/delete-nation-trait/delete-nation-trait.component';
import { CreatePantheonComponent } from './AdminArea/create-pantheon/create-pantheon.component';
import { UpdatePantheonComponent } from './AdminArea/update-pantheon/update-pantheon.component';
import { DeletePantheonComponent } from './AdminArea/delete-pantheon/delete-pantheon.component';
import { CreateGodComponent } from './AdminArea/create-god/create-god.component';
import { UpdateGodComponent } from './AdminArea/update-god/update-god.component';
import { DeleteGodComponent } from './AdminArea/delete-god/delete-god.component';
import { CreateOrderComponent } from './AdminArea/create-order/create-order.component';
import { UpdateOrderComponent } from './AdminArea/update-order/update-order.component';
import { DeleteOrderComponent } from './AdminArea/delete-order/delete-order.component';
import { UserAreaComponent } from './user-area/user-area.component';
import { GiveTraitComponent } from './AdminArea/give-trait/give-trait.component';
import { RemoveTraitComponent } from './AdminArea/remove-trait/remove-trait.component';
import { UserRightsComponent } from './AdminArea/user-rights/user-rights.component';
import { DeleteUserComponent } from './AdminArea/delete-user/delete-user.component';

import { AuthGuard } from './guards/auth-guard';
import { AdminAuthGuard } from './guards/admin-auth-guard';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"time", component:TimeComponent},
  {path:"history", component:HistoryComponent},

  {path:"regions", component:NationsComponent, canActivate:[AuthGuard]},
  {path:"region/:region_id", component:RegionComponent, canActivate:[AuthGuard]},
  {path:"religion", component:ReligionComponent},
  {path:"orders", component:OrdersComponent, canActivate:[AuthGuard]},
  {path:"orders/:order_id", component:OrderComponent, canActivate:[AuthGuard]},
  {path:"nationindetail/:nation_id", component:NationindetailComponent, canActivate:[AuthGuard]},
  {path:"detailedreligion/:pantheon_id", component:DetailedreligionComponent, canActivate:[AuthGuard]},
  {path:"search/searchresults", component:SearchresultsComponent, canActivate:[AuthGuard]},
  {path:"registerUser", component:RegisterUserComponent },

  {path:"admin-backoffice", component:AdminAreaComponent, canActivate:[AdminAuthGuard], children: [
    {path:"create-nation", component:CreateNationComponent},
    {path:"update-nation", component:UpdateNationComponent},
    {path:"delete-nation", component:DeleteNationComponent},
    {path:"create-nation-trait", component:CreateNationTraitComponent },
    {path:"update-nation-trait", component:UpdateNationTraitComponent },
    {path:"delete-nation-trait", component:DeleteNationTraitComponent },
    {path:"give-trait", component:GiveTraitComponent},
    {path:"remove-trait", component:RemoveTraitComponent},
    {path:"create-pantheon", component:CreatePantheonComponent },
    {path:"update-pantheon", component:UpdatePantheonComponent },
    {path:"delete-pantheon", component:DeletePantheonComponent },
    {path:"create-god", component:CreateGodComponent },
    {path:"update-god", component:UpdateGodComponent },
    {path:"delete-god", component:DeleteGodComponent },
    {path:"create-order", component:CreateOrderComponent },
    {path:"update-order", component:UpdateOrderComponent },
    {path:"delete-order", component:DeleteOrderComponent },
    {path:"user-rights", component:UserRightsComponent},
    {path:"delete-user", component:DeleteUserComponent}
  ]},
  
  {path:"user-profile", component:UserAreaComponent, canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
