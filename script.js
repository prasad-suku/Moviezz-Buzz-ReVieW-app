
// getting elements

let inp = document.getElementById("inp");
let searchbtn = document.getElementById("search-btn")
let result_container = document.querySelector(".result")
let main_container =  document.querySelector(".container")


// fetch movie data from database

let getmoviedata = ()=>{
    
    let movie_name = inp.value;
     //  api key and url
      let key = `df83ed6`;
         let url = `http://www.omdbapi.com/?t=${movie_name}&apikey=${key}`
    
    if(movie_name.length<=0){
        result_container.innerHTML = `<h3 class="err-message">Please Enter Movie Name<h3>`

    }
    else
    {
       
   
        
         
        //  fetching data through url
        fetch(url).then((res)=>res.json()).then((data)=>{
            console.log(data);
            console.log(data.Poster);
            console.log(data.Title);
            console.log(data.Ratings[0].Value);
            // console.log(data.Rated);
            console.log(data.Year)
            console.log(data.Genre)
            console.log(data.Plot)
            console.log(data.Actors)

     
            // appending datas into result container

            result_container.innerHTML = `
             <div class="movie-info">
              <img src="${data.Poster}" class="poster">
              <div>
               <h3 class="title">${data.Title}</h3>
               <div class="rating">
               <img src="./star-icon.png" alt="">
               <p>${data.Ratings[0].Value}</p> 
               </div>

               <div class="details">
               <span>${data.Year}</span>
               <span>${data.Runtime}</span>
               </div>

            
              
            <div class="genre">
               <div>${data.Genre.split(",").join("</div><div>")}
               </div>
             </div>

              </div>
    
          </div>
       <div class="overview-container">   
           <h3>Overview :</h3>
         <p class=""overview>${data.Plot}</p> 
           <h3>Cast :</h3> 
         <p class="cast">${data.Actors}</p>  
         </div>  
         `
          
            main_container.appendChild(result_container)
        }).catch((err)=>{
            result_container.innerHTML = `<h3 class="err-message">No Data Found<h3>`
        })
        }
}
 
document.addEventListener("keyup",(event)=>{
    if(event.key==="Enter"){
        getmoviedata()
    }
})
searchbtn.addEventListener("click",getmoviedata)
 window.addEventListener("load",getmoviedata)