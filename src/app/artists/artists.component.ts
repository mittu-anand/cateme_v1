import { Component, OnInit } from '@angular/core';
import { Artists } from './artists';
import { ArtistsService } from '../artists.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  artists:Artists;
  selectedArtist:Artists;
  allartists:Artists[];
  
  constructor(private artistsService:ArtistsService) { }
  
  onSelectArtist(artist:Artists):void {
	  this.selectedArtist=artist;
  }
  private testfunction(test):void{
	  
  }
  
  getArtists():void {
	  
	this.artistsService.getArtists().subscribe(allartists=>this.allartists=allartists);
  
  }
  
  ngOnInit() {
	 
   	  //this.getArtists();
	  this.artists = this.allartists[0];
	  
  }

}
