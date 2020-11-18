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
                 <div ='${result.definition}'>
              <h5>PART OF SPEECH : ${result.partOfSpeech}</h5>
              <h3>${result.definition}</h3>
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
