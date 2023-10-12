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
    const catBreedDropdown = document.getElementById("catBreed");
    catBreedDropdown.addEventListener("change", (e) => {
      const selectedBreed = e.target.value;
      // Call a function to update the displayed content based on the selected breed
      updateContentForBreed(selectedBreed);
    });
    function updateContentForBreed(selectedBreed) {
      // Use a switch statement or an object to define content for each breed
      const breedContent = {
        "persian": {
          title: "Persian",
          description: "Big round eyes inside a round face give Persians their unmistakable look. Add in the flat face and the distinctive profile, or smushed nose, and you know you’ve found a gorgeous, soft, sweet-tempered Persian cat. Affectionate toward their owners, children, and other pets, Persians are generally not very active, preferring a quiet environment. Averaging between 3-6 kg (7-12 lbs) as adults, they are on the smaller side but will provide lots of cuddling and companionship during rest periods. Because of their semi-dense coats, they overheat easily and can require professional grooming to prevent matted fur.",
          
        },
        "maine-coon": {
          title: "Maine Coon",
          description: "The gentle giants of the cat world, Maine Coons are magnificent when they reach their tallest height of 16 inches, length of up to 100 cm (40 in) and weigh in at 3.6-8.2 kg (7-18 lbs) or more. They have lovely tufts of fur in their ears and under their paws, a square face and a big fluffy tail. They are friendly, inquisitive, and very hardy, meaning that they can live in a variety of climates and require less care and attention than other breeds. That’s not to say a Maine Coon won’t want attention. They love to be admired as much as the next fur baby.  They are curious and fascinated by water.",
          // Add more content for Maine Coon breed as needed
        },
        // Add content for other breeds as needed
      };
    
      // Get the breed information based on the selected breed
      const selectedBreedInfo = breedContent[selectedBreed];
    
      // Update the content based on the selected breed
      const breedInfoContainer = document.getElementById("breedInfo");
      if (selectedBreedInfo) {
        breedInfoContainer.innerHTML = `
          <h2>${selectedBreedInfo.title}</h2>
          <p>${selectedBreedInfo.description}</p>
          <!-- Add more content as needed -->
        `;
      } else {
        breedInfoContainer.innerHTML = "Breed information not found.";
      }
    }
     
  })

