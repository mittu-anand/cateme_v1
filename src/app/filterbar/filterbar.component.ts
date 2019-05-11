import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // not required, but just keeping for now
import { FilterBar } from './filterbar';


@Component({
  selector: 'app-filterbar',
  templateUrl: './filterbar.component.html',
  styleUrls: ['./filterbar.component.css']
})


export class FilterbarComponent implements OnInit {
  @Output() searchData = new EventEmitter();
  filterData:FilterBar;
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
	  
	   this.setCategories();
  }
  
  
  setCategories(){
 
  // Get this data from a service later on
  this.filterData={category:[{name:'Actors',key:'actors',val:false},{name:'Directors',key:'directors',val:false},
  {name:'Writers',key:'writers',val:false},{name:'Cinematographers',key:'cinematographers',val:false},{name:'Lyricists',key:'lyricists',val:false},
  {name:'Musicians',key:'musicians',val:false}],
  age:[{name:'0-10',key:'age_0_10',val:false},{name:'11-18',key:'age_11_18',val:false},{name:'19-30',key:'age_19_30',val:false},{name:'31-45',key:'age_31_45',val:false}
  ,{name:'46-60',key:'age_46_60',val:false},{name:'Above 60',key:'age_above_60',val:false}],experience:[{name:'1-5',key:'exp_1_5',val:false},{name:'6-10',key:'exp_6_10',val:false},
	  {name:'Above 10',key:'exp_above_10',val:false}]};
  }
  
  selectedData(){
	 
	 this.searchData.emit(this.filterData);	  
  }

}


