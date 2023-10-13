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
let likeCount = 0;
let isLiked = false;
    const likeCountElement = document.getElementById('likeCount');
    likeButton.addEventListener('click', () => {
      if (isLiked) {
          likeCount--;
          likeCountElement.textContent = likeCount;
          likeButton.classList.remove('liked');
      } else {
          likeCount++;
          likeCountElement.textContent = likeCount;
          likeButton.classList.add('liked');
      }
      isLiked = !isLiked;
  });
    
})
  
    
    })
    
    .catch(error => {
      console.error("Error fetching cat:", error);
    });
    const catBreedDropdown = document.getElementById("catBreed");
    catBreedDropdown.addEventListener("change", (e) => {
     const selectedBreed = e.target.value;
      updateContentForBreed(selectedBreed);
    });
    function updateContentForBreed(selectedBreed) {
      
      const breedContent = {
        "persian": {
          title: "Persian",
          description: "Big round eyes inside a round face give Persians their unmistakable look. Add in the flat face and the distinctive profile, or smushed nose, and you know you’ve found a gorgeous, soft, sweet-tempered Persian cat. Affectionate toward their owners, children, and other pets, Persians are generally not very active, preferring a quiet environment. Averaging between 3-6 kg (7-12 lbs) as adults, they are on the smaller side but will provide lots of cuddling and companionship during rest periods. Because of their semi-dense coats, they overheat easily and can require professional grooming to prevent matted fur.",
          Image: "https://www.cathealthy.ca/wp-content/uploads/2021/11/Persian-1024x1024-1.jpg"
        },
        "maine-coon": {
          title: "Maine Coon",
          description: "The gentle giants of the cat world, Maine Coons are magnificent when they reach their tallest height of 16 inches, length of up to 100 cm (40 in) and weigh in at 3.6-8.2 kg (7-18 lbs) or more. They have lovely tufts of fur in their ears and under their paws, a square face and a big fluffy tail. They are friendly, inquisitive, and very hardy, meaning that they can live in a variety of climates and require less care and attention than other breeds. That’s not to say a Maine Coon won’t want attention. They love to be admired as much as the next fur baby.  They are curious and fascinated by water.",
          Image : "https://www.cathealthy.ca/wp-content/uploads/2021/11/Maine_Coon-1024x1024-1.jpg"
        },
       
      
      "scottish-fold": {
        title: "Scottish Fold",
        description: "You don’t have to be Sherlock Holmes to know that the Scottish Fold cat is named for its distinctive folded ears and hails from Scotland. Their hearing is just as acute as any cat and their ears can change directions, lay back flat, and stand straight up. As adults, they are compact and weigh about 3.5-5.5 kg (8-12 lbs). Gentle, mild mannered, and intelligent, Scottish Fold cats adapt well to new owners and residences. They are good family cats but they tend to single out one favourite person among their owners. They will require more grooming because of their dense coats and may retain more ear wax but generally aren’t more prone to ear mites or infections than their prick-eared cousins. ",
         Image :"https://www.cathealthy.ca/wp-content/uploads/2021/11/Scottish_Fold-1024x1024-1.jpg"
      
        },
    };
      
      const selectedBreedInfo = breedContent[selectedBreed];
    
      
      const breedInfoContainer = document.getElementById("breedInfo");
      if (selectedBreedInfo) {
        breedInfoContainer.innerHTML = `
          <h2>${selectedBreedInfo.title}</h2>
          <p>${selectedBreedInfo.description}</p>
          <img src="${selectedBreedInfo.Image}" alt="${selectedBreedInfo.title}" />
          
        `;
      } else {
        breedInfoContainer.innerHTML = "Breed information not found.";
      }
    }
    const loginToggle = document.getElementById("loginToggle");
    const loginForm = document.getElementById("loginForm");

        loginToggle.addEventListener("click", () => {
            if (loginForm.style.display === "none") {
                loginForm.style.display = "block";
            } else {
                loginForm.style.display = "none";
            }
        });
        
        const homeLink = document.getElementById("homeLink");
          const homeSection = document.getElementById("homeSection");
          const catBreedsLink = document.getElementById("catBreedsLink");
          const catBreedsSection = document.getElementById("catBreedsSection");
          const catOfChoiceLink = document.getElementById("catOfChoiceLink");
          const catOfChoiceSection = document.getElementById("catOfChoiceSection");
      
          function addHighlighting(section, link) {
              link.addEventListener("mouseover", () => {
                  section.classList.add("highlighted");
              });
      
              link.addEventListener("mouseout", () => {
                  section.classList.remove("highlighted");
              });
          }
      
          addHighlighting(homeSection, homeLink);
          addHighlighting(catBreedsSection, catBreedsLink);
          addHighlighting(catOfChoiceSection, catOfChoiceLink);
      });
           

