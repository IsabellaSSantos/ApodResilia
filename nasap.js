$.ajax({
    url: "https://api.nasa.gov/planetary/apod?api_key=lZmvrQCUChc4VTegat4WaWouDxrbKNlqrO3bDp9S",
    success: function(whatyougot){
        document.getElementById("img").innerHTML="<img src='"+whatyougot.url+"'style='width:50%;'/>";
        document.getElementById("copyright").innerHTML="By"+whatyougot.copyright;
        document.getElementById("title").innerHTML=whatyougot.title;
        document.getElementById("explanation").innerHTML=whatyougot.explanation;
    }
});