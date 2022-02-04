import { Injectable, OnInit } from '@angular/core';
import { service } from '../blog-parts/data.model';

@Injectable({
  providedIn: 'root'
})
export class BlogdataService {
  // blog!: any[];
  // data:any;
 

    data= [
    {
     title:"Conulting Reporting Qouncil Arei Not Could More...",
     date:Date(),
     name:"Edsheeran",
     description:"Pluoresntly customize pranci an plcentered customer service anding strategic amerials Interacvely cordinate performe",
     src:"./../../assets/blog01.jfif"
    },
    {
      title:"Conulting Reporting Qouncil Arei Not Could More...",
      date:Date(),
      name:"Taylor",
      src:"./../../assets/blog09.jfif",
      description:"Pluoresntly customize pranci an plcentered customer service anding strategic amerials Interacvely cordinate performe"
 
     },
     {
      title:"Conulting Reporting Qouncil Arei Not Could More...",
      date:Date(),
      name:"Meganstellion",
      src:"./../../assets/blog06.jfif",
      description:"Pluoresntly customize pranci an plcentered customer service anding strategic amerials Interacvely cordinate performe"
 
     },
     {
      title:"Conulting Reporting Qouncil Arei Not Could More...",
      date:Date(),
      name:"Meganstellion",
      src:"./../../assets/blog06.jfif",
      description:"Pluoresntly customize pranci an plcentered customer service anding strategic amerials Interacvely cordinate performe"
 
     },
     {
      title:"Conulting Reporting Qouncil Arei Not Could More...",
      date:Date(),
      name:"Taylor",
      src:"./../../assets/blog09.jfif",
      description:"Pluoresntly customize pranci an plcentered customer service anding strategic amerials Interacvely cordinate performe"
 
     },
     {
      title:"Conulting Reporting Qouncil Arei Not Could More...",
      date:Date(),
      name:"Edsheeran",
      description:"Pluoresntly customize pranci an plcentered customer service anding strategic amerials Interacvely cordinate performe",
      src:"./../../assets/blog01.jfif"
     },
     {
      title:"Conulting Reporting Qouncil Arei Not Could More...",
      date:Date(),
      name:"Edsheeran",
      description:"Pluoresntly customize pranci an plcentered customer service anding strategic amerials Interacvely cordinate performe",
      src:"./../../assets/blog09.jfif"
     },
     {
       title:"Conulting Reporting Qouncil Arei Not Could More...",
       date:Date(),
       name:"Taylor",
       src:"./../../assets/blog01.jfif",
       description:"Pluoresntly customize pranci an plcentered customer service anding strategic amerials Interacvely cordinate performe"
  
      },
      {
       title:"Conulting Reporting Qouncil Arei Not Could More...",
       date:Date(),
       name:"Meganstellion",
       src:"./../../assets/blog06.jfif",
       description:"Pluoresntly customize pranci an plcentered customer service anding strategic amerials Interacvely cordinate performe"
  
      },
  ]
  constructor() {
    // this.data=this.blog;
    // console.log(this.blog);
   }
}
