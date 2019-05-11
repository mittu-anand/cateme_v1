import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistsComponent } from './artists/artists.component';
import { HomeComponent } from './home/home.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { AboutComponent } from './about/about.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { NewbieComponent } from './newbie/newbie.component';
import { TheatreComponent } from './theatre/theatre.component';

const routes: Routes = [
{path:'artists',component:ArtistsComponent},
//{path:'home',redirectTo:'home/'},
{path:'home',component:HomeComponent},
{path:'home/:type',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'castme_theatre',component:TheatreComponent},
{path:'recommendations',component:RecommendationsComponent},
{path:'newbie',component:NewbieComponent},
{path:'',component:HomeComponent},
{path:'actor/:id',component:ArtistDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
