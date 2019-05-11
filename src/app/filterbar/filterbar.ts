export class Category {
	public name:string;
	public key:string;
	public val:boolean;
}

export class Age {
	public name:string;
	public key:string;
	public val:boolean;
}

export class Experience {
	public name:string;
	public key:string;
	public val:boolean;
}

export class FilterBar {
	constructor(){
	}
	public category:Category[];
	public age:Age[];
	public experience:Experience[];
	
}
