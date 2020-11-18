const submit = document.getElementById("submit"),
  search = document.getElementById("search"),
  //   resultHeading = document.getElementById("result-heading"),
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
        console.log(response.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

// fetch(`https://wordsapiv1.p.rapidapi.com/words/{term}`)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
// resultHeading.innerHTML = `<h2>Search results for '${term.toUpperCase()}':<h2>`;
// if (data.meals === null) {
//   resultHeading.innerHTML = `<h2>Nothing Found for '${term.toUpperCase()}'<h2>`;
//           wordEl.innerHTML = "";
//         } else {
//           wordEl.innerHTML = data.meals
//             .map(
//               (meal) =>
//                 `<div class='meal'>
//               <img src ='${meal.strMealThumb}' alt='${meal.strMeal}'/ >
//               <div class='meal-info' data-mealID ='${meal.idMeal}'>
//               <h3>${meal.strMeal}</h3>
//            </div>
//           </div>
//               `
//             )
//             .join("");
//         }
//       });
//     //clear search text.
//     search.value = "";
//   } else {
//     const div = document.createElement("div");
//     div.className = `alert`;
//     div.appendChild(document.createTextNode("Please type a word"));
//     const container = document.querySelector(".container");
//     const before = document.querySelector(".flex");
//     container.insertBefore(div, before);
//     timeOut();
//   }
// }

// function timeOut() {
//   setTimeout(() => {
//     clearAlert();
//     // window.location.reload(true);
//   }, 2000);
// }

// function clearAlert() {
//   const currentAlert = document.querySelector(".alert");
//   if (currentAlert) {
//     currentAlert.remove();
//   }
// }

submit.addEventListener("submit", searchMeal);
