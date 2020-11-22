const submit = document.getElementById("submit"),
  search = document.getElementById("search"),
  resultHeading = document.getElementById("result-heading"),
  wordEl = document.getElementById("words"),
  singleMealEl = document.getElementById("single-meal");

function searchMeal(e) {
  e.preventDefault();

  singleMealEl.innerHTML = "";
  const term = search.value;
  //   console.log(term);
  if (term.trim()) {
    fetch(`https://wordsapiv1.p.rapidapi.com/words/${term}`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "e4fe7bfb7fmsh76996e99c8353abp16e2adjsnee33573ff050",
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
      }
    })
      .then((response) => response.json())
      .then((response) => {
        wordEl.innerHTML = response.results.map(
          (result) =>
            `<div>
                 <div>
              <div>
              PART OF SPEECH : <p class='colored-text'> ${result.partOfSpeech}</p>
              </div>
              <hr/>
              <div>
              SYNONYM(S) : <p class='colored-text'> ${result.synonyms} </p>
              </div>
              <hr />
              <div>
              HAS TYPES : <p class='colored-text'> ${result.hasTypes} </p>
               </div>
              <hr />
              <div>
              <br />
              <h2>MEANING:</h2>
              <h3 class='word-meaning'>${result.definition}</h3>
              </div>
              
            </div>
            </div>
                 `
        );
        console.log(response);
        setTimeout(() => {
          window.location.reload();
        }, 50000);
        console.log(response.results);
      })
      .catch((err) => {
        console.error(err);
        // resultHeading.innerHTML = `<h2>Nothing Found for '${term.toUpperCase()}'<h2>`;
        resultHeading.innerHTML = `<h2>PLEASE INPUT A CORRECT ENGLISH WORD<h2>`;

        setTimeout(function() {
          window.location.reload(1);
        }, 1500);
      });
  }
}

submit.addEventListener("submit", searchMeal);
