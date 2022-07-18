import axios from "axios";

export default function Geocode(){
    var location = 'Notre Dame IN';
    axios.get('https://maps.googlemaps.com/maps/api/geocode/json',{
        params:{
        address: location,
        key: 'AIzaSyApcmR0zfeQ2GjFXyKZmJhST15fHRYOBLQ'
        }
    })
    .then(function(response){
        console.log(response);
        //formatted address
        console.log(response.data.results[0].formatted_Address);
    });
}