import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Artists } from './artists/artists';
import { Allartists } from './artists/mock-artists';
import { Filteredartists } from './artists/mock-filtered-artists';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ArtistsService {
  apiURL:string='http://mittuanand.com/my_tech_experiments';
  constructor( private http:HttpClient, private messageService:MessageService ) { }
  
  //Function to get all artists.
  
  getArtists():Observable<Artists[]>{
	  
	  this.messageService.add("Successfully fetched the artists");
	  return of(Allartists);
  }
  
  //Function to get a single artists
  
  getArtist(id):Observable<Artists>{
	  
	  return of (Allartists.find(artist=>artist.id==id));
  }
  
  // Funciton to filter the artists based on the user selection 
  
  getArtistsByFilter(data):Observable<Artists[]>{
	  
	  return of (Filteredartists);
  }
  
  //Funciton to get all artists data from api
  
  getData():Observable<Artists[]>{
	  
	  return this.http.get<Artists[]>(`${this.apiURL}/api/`);
  }
 
  
}
