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
     
    });

  })
