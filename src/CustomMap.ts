import { Company } from "./Company";
import { User } from "./User";


export interface Mappable {
    location: {
        lat: number,
        lng: number
    }
    markerContent(): string;
}

export class CustomMap {
    private googleMap: google.maps.Map;
    private mapId = document.getElementById('map');
    private mapNotNull = this.mapId!;
    constructor() {
        this.googleMap = new google.maps.Map(this.mapNotNull,{
            zoom:1, center: {
                lat: 0,
                lng: 0
            }, draggable: false
        })
    }

    addMarker(mappable : Mappable) : void {
        const marker = new google.maps.Marker({
                map: this.googleMap, 
                position: {
                    lat: mappable.location.lat,
                    lng: mappable.location.lng
                } 
        });
    
        marker.addListener('click', function(){
            const inforWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            })
            inforWindow.open(this.googleMap, marker);
        })
    }

}