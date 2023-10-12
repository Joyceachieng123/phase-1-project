document.addEventListener('DOMContentLoaded', () => {
  const apiUrl = "https://cat14.p.rapidapi.com/v1/images/search";
  
  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'c11e0b62d9mshf17fab7dd9bfd78p199763jsn53e1d4c00de3',
      'X-RapidAPI-Host': 'cat14.p.rapidapi.com'
    },
  };
 fetch(apiUrl, options)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      const catFactContainer = document.getElementById("CatFact");
      data.forEach((item) => {
        const image = document.createElement("img")
        image.src = item.url
        catFactContainer.appendChild(image)
        
     })

     const button = document.getElementById("interchangeButton")
        button.addEventListener ("click",() => {
         location.reload(false) 
       })
let form = document.getElementById("form-cat")
form.addEventListener("submit",(e) =>{
  e.preventDefault()

let inputVal = e.target.input.value
            let p = document.createElement("p")
            p.textContent = inputVal
            catFactContainer.appendChild(p)
})

const likeButtons = document.querySelectorAll(".fa.fa-heart");
likeButtons.forEach((likeButton) => {
  likeButton.addEventListener("click", (e) => {
      likeButton.classList.toggle("liked");
})

})
  
    
    })
    
    .catch(error => {
      console.error("Error fetching cat:", error);
    });

  })

