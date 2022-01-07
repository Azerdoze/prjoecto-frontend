import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// pipe 
import { sanitizeHtmlPipe } from './pipes/sanitize-html.pipe';
// fontawesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// Reactive Forms
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
// JWTHelper
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { NationsComponent } from './nations/nations.component';
import { OrdersComponent } from './orders/orders.component';
import { ReligionComponent } from './religion/religion.component';
import { TimeComponent } from './time/time.component';
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
import { DeletePantheonComponent } from './AdminArea/delete-pantheon/delete-pantheon.component';
import { UpdatePantheonComponent } from './AdminArea/update-pantheon/update-pantheon.component';
import { CreateGodComponent } from './AdminArea/create-god/create-god.component';
import { UpdateGodComponent } from './AdminArea/update-god/update-god.component';
import { DeleteGodComponent } from './AdminArea/delete-god/delete-god.component';
import { CreateOrderComponent } from './AdminArea/create-order/create-order.component';
import { UpdateOrderComponent } from './AdminArea/update-order/update-order.component';
import { DeleteOrderComponent } from './AdminArea/delete-order/delete-order.component';
import { UserAreaComponent } from './user-area/user-area.component';
import { RegionComponent } from './nations/region/region.component';
@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    HomeComponent,
    NationsComponent,
    OrdersComponent,
    ReligionComponent,
    TimeComponent,
    NationindetailComponent,
    sanitizeHtmlPipe,
    OrderComponent,
    DetailedreligionComponent,
    RegisterUserComponent,
    AdminAreaComponent,
    CreateNationComponent,
    UpdateNationComponent,
    DeleteNationComponent,
    CreateNationTraitComponent,
    UpdateNationTraitComponent,
    DeleteNationTraitComponent,
    CreatePantheonComponent,
    DeletePantheonComponent,
    UpdatePantheonComponent,
    CreateGodComponent,
    UpdateGodComponent,
    DeleteGodComponent,
    CreateOrderComponent,
    UpdateOrderComponent,
    DeleteOrderComponent,
    UserAreaComponent,
    RegionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('access_token')
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
