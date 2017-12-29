"use strict";

function initMap() {
  let leicester = {lat: 52.6333, lng: -1.1333};
  let dmu = {lat: 52.629311, lng: -1.137836};
/*  let uol = {lat: 52.620956, lng: -1.124049};*/
  let mapDemo = document.getElementById("map");

  // this sets the default location for when the map is first loaded
  let map = new google.maps.Map(mapDemo, {
    zoom: 13,
    center: leicester
  });

  // these set different markers you want to show on your map
  let markerDMU = new google.maps.Marker({
    position: dmu,
    map: map,
    title: 'The Good Guys'
  });

/**
 *  let markerUoL = new google.maps.Marker({
    position: uol,
    map: map,
    title: 'The Bad Guys'
  });
 */
}


//slider
var index = 1;

function plusIndex(n){
    index = index + 1;
    showImage(index);
}

showImage(1);

function showImage(n){
    var i;
    var x = document.getElementsByClassName("slides");
    if(n > x.length){ index = 1};
    if(n < 1){ index = x.length};
    for(i=0;i<x.length;i++)
{
    x[i].style.display = "none";
}
    x[index-1].style.display = "block";
}
autoSlide();
function autoSlide(){
    var i;
    var x = document.getElementsByClassName("slides");
    for(i=0;i<x.length;i++){
    x[i].style.display = "none";
}
index++;
    if(index > x.length){index = 1}
    x[index-1].style.display = "block";
    //setTimeout(autoSlide,2000);
}

//form validation
