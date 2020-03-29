export class Quote {
    
    upVote:number;
    downVote:number;

    constructor(public author:string , public username:string , public description:string){
        this.upVote = 0;
        this.downVote = 0;
        
    }
}
