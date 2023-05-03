if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition( async (position) => {
        const { latitude, longitude } = position.coords;
        console.log({longitude, latitude}, "$$$$$$");
        document.getElementById('lon').innerHTML = latitude + ", " + longitude
        const response = await fetch(`https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?location=${longitude},${latitude}&f=json&token=AAPK07c0979f73a64b5fb7d24d08aa3734fcH1aA3ZMjZT2sejVTWX-lgQmY6jE1nxGOeB7jZUUKSvvzZr7ZYAxRn0JU70UzGm6Y`)
        const data = await response.json();

        document.getElementById("loc").innerHTML =  data.address.Subregion + ", " + data.address.Region;
    })
}

const geolocation = async ()=>{
    const response = await fetch(`https://ipapi.co/json/`)
    data = await response.json()
    console.log(data);
    document.getElementById("iplan").innerHTML = data.longitude + ", " + data.latitude;
    const response2 = await fetch(`https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?location=${data.longitude},${data.latitude}&f=json&token=AAPK07c0979f73a64b5fb7d24d08aa3734fcH1aA3ZMjZT2sejVTWX-lgQmY6jE1nxGOeB7jZUUKSvvzZr7ZYAxRn0JU70UzGm6Y`)
        const data2 = await response2.json();
        document.getElementById("ip").innerHTML = data2.address.Subregion + ", " + data2.address.Region;
}

geolocation();