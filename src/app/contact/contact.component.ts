import { Component, AfterViewInit,ElementRef,ViewChild, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
declare var google:any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit,AfterViewInit{

    @ViewChild("mapContainer", { static: false }) gmap!: ElementRef;
    map=google.maps.Map;
    lat = 23.344315;
    lng = 85.296013;
  
   
    //Coordinates to set the center of the map
    coordinates = new google.maps.LatLng(this.lat, this.lng);
  
    // mapOptions: google.maps.MapOptions = {
    //   center: this.coordinates,
    //   zoom: 8
    // };
  
   
  
    ngAfterViewInit(): void {
      this.mapInitializer();
    }
  
    mapInitializer(): void {
      this.map = new google.maps.Map(this.gmap.nativeElement, {
        center: this.coordinates,
        zoom: 8
      });
   //Default Marker
    const marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
    title: "Hello World!"
  });
  const  markers = [
    {
      position: new google.maps.LatLng(23.041924, 84.540833),
      map: this.map,
      title: "Marker 1"
    },
    {
      position: new google.maps.LatLng(2.2227777778,  84.8669444444),
      map: this.map,
      title: "Marker 2"
    }
  ];

      //Adding Click event to default marker
      marker.addListener("click", () => {
        const infoWindow = new google.maps.InfoWindow({
          content: marker.getTitle()
        });
        infoWindow.open(marker.getMap(), marker);
      });
  
      //Adding default marker to map
      marker.setMap(this.map);
  
      //Adding other markers
    //   this.loadAllMarkers();
    markers.forEach(markerInfo => {
        //Creating a new marker object
        const marker = new google.maps.Marker({
          ...markerInfo
        });
  
        //creating a new info window with markers info
        const infoWindow = new google.maps.InfoWindow({
          content: marker.getTitle()
        });
  
        //Add click event to open info window on marker
        marker.addListener("click", () => {
          infoWindow.open(marker.getMap(), marker);
        });
  
        //Adding marker to google map
        marker.setMap(this.map);
      });

    }

ngOnInit(): void {
    
}

  contactForm=new FormGroup({
   name: new FormControl('',[Validators.required, Validators.minLength(4),Validators.pattern('^[A-Za-z]\\w{5, 29}$')]),
   email:new FormControl("",[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    address:new FormControl('',[Validators.required]),
    text:new FormControl('',[Validators.required]),
    textarea:new FormControl('Enter query',[Validators.required])
  });
  submit(){
    console.log("Form Submitted Successfully!!");
   
   

  console.log(this.contactForm.value);
  }
  // get emails(){ return this.contactForm.get('email');}
  get getControl(){
    return this.contactForm.controls;
  }
  // map



 
 
    
    
    }
 





  

