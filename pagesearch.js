/**
 *  pagesearch.js
 *  version 1.0.0
 *  Thomas Adamek | tom@julia-und-tom.de
 *  Free to use for everyone
 *  */ 

/**
 * searchIdentifier => the contents that should be searched
 * searchInput => the input field to enter the query
 * searchPauseTimerInterval => Timeinterval for key inputs
 * searchPauseTimer => Timeout for the key inputs
 */
let searchIdentifier = document.querySelectorAll(".card")
let searchInput = document.getElementById("pagesearch_input")
let searchPauseTimerInterval = 500
let searchPauseTimer = undefined

// script section
function pageSearch() {
    let searchValue = searchInput.value
    searchIdentifier.forEach((content, index) => {
       if (content.innerText.toLowerCase().includes(searchValue.toLowerCase())) {
        searchIdentifier[index].classList.remove("hide")
       } else {
        searchIdentifier[index].classList.add("hide")
       }
    })
}

searchInput.addEventListener("keyup", () => {
    clearTimeout(searchPauseTimer)
    searchPauseTimer = setTimeout(pageSearch, searchPauseTimerInterval)
})