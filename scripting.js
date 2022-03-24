

function getxRand()
{console.log(getzoom());
    return Math.random() * (180 - (-180)) + (-180);
    
}

function getyRand()
{
    return Math.random() * (90 - (-90)) + (-90);
}

function getzoom()
{
    return Math.random() * (700 - (500)) + 500;
}

require([
    "esri/config",
     "esri/Map",
     "esri/views/MapView",
     "esri/widgets/BasemapToggle",
     "esri/widgets/BasemapGallery"
   ], function (esriConfig,Map, MapView, BasemapToggle, BasemapGallery) {

     esriConfig.apiKey = "AAPKd2868e06c350482682380e0457547c6eJL7Rfy_i2OADULBHup8dzZFTRETbH1GuAAQ9Vw7aiyGn8AU2boTDQuMsVjgx8YsS";
     const map = new Map({
       basemap: "arcgis-imagery"
     });

     const view = new MapView({
       container: "viewDiv",
       map: map,
       center: [getxRand(),getyRand()],
       zoom: 500
     });
    });