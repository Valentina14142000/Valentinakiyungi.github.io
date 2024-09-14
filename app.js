document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll("img");

    for(const image of images){
        fetch("https://api.edamam.com/search?q=${recipe_name}&app_id=${app_id}&app_key=${app_key}")
        .then(response => response.json())
        .then(data => {
           image.scr = data.message
           image.width = 50;
           image.height = 50;
       })
   }
})