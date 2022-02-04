import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopdataService {
  data: any;

  constructor() { }
  list=[
    {
      price:"$499",
      title:"Product title here",
    },
    {
      price:"$899",
      title:"Product title here",
    },
    {
      price:"$679",
      title:"Product title here",
    },
    {
      price:"$099",
      title:"Product title here",
    },
    {
      price:"$879",
      title:"Product title here",
    },
    {
      price:"$789",
      title:"Product title here",
    },
    {
      price:"$789",
      title:"Product title here",
    },
    {
      price:"$819",
      title:"Product title here",
    },
    {
      price:"$709",
      title:"Product title here",
    }
  ]
}
