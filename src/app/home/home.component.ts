import { Component, OnInit } from '@angular/core';
import { Artists } from '../artists/artists';
import { ArtistsService } from '../artists.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private artistService:ArtistsService, private locator:Location, private route:ActivatedRoute) { }
  
  artists:Artists[]=[];
  
  ngOnInit() {
	  
	  this.getArtists();
	  this.getData();
  }
  
  getArtists():void{
	  
	  this.artistService.getArtists().subscribe(artists=>this.artists=artists);
  }
  
  datafromFilter(data):void{
	  this.artistService.getArtistsByFilter(data).subscribe(artists=>this.artists=artists);
  }
  
  getData():void{
	  
	 
	 this.artistService.getData().subscribe((res)=>{
        console.log(res);
      }); 
  }
  
  
}
