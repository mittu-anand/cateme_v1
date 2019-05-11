import { Component, OnInit, Input } from '@angular/core';
import { Artists } from '../artists/artists';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ArtistsService } from '../artists.service';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {

	
  constructor(private route:ActivatedRoute,private locate:Location,private artistsService:ArtistsService) { }

  ngOnInit() {
	  this.getArtist();
  }
  artist:Artists;
  getArtist():void{
	  const id = +this.route.snapshot.paramMap.get('id');
	  this.artistsService.getArtist(id).subscribe(artist=>this.artist=artist);
  }
  goBack(){
	  this.locate.back();
  }
  datafromFilter(){
  }

}
