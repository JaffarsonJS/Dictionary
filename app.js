let word = document.getElementById("input-tag") ;
// console.log(word);
let button = document.getElementById("btn");
let main = document.querySelector(".main")

button.addEventListener("click", async function() {
    console.log(word.value);
    let apiLink = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.value}`)
    console.log(apiLink);
    let data = await apiLink.json()
    console.log(data[0].phonetics[0].text);

    console.log(data[0].meanings[0].partOfSpeech);
    console.log(data[0].meanings[0].definitions[0].definition);
    console.log(data[0].meanings[0].definitions[0].example);

    main.innerHTML += `<div class="details">
    <div class="wordDiv">
        <h2 id="word">${word.value}</h2>
        <button>
            <i class="fa-solid fa-volume-high"></i>
        </button>
    </div>            
    <div class="phoDiv">
        <p id="grammar">${data[0].meanings[0].partOfSpeech}</p>
        <p id="pho">${data[0].phonetics[0].text}</p>
    </div>
</div>
<div class="meaningExampleDiv">
    <div id="meaningDiv">
        <h5 id="meaning">
        ${data[0].meanings[0].definitions[0].definition} 
        </h5>
    </div>
    <div>
        <h6 id="example">${data[0].meanings[0].definitions[0].example}</h6></h6>
    </div>
</div>`
})


// async function sample() {
//     let word = "lesson"
//     let apiLink = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
//     console.log(apiLink);
//     let data = await apiLink.json()
//     console.log(data[0].phonetics[0].text);

//     console.log(data[0].meanings[0].partOfSpeech);
//     console.log(data[0].meanings[0].definitions[0].definition);
//     console.log(data[0].meanings[0].definitions[0].example);

//     main.innerHTML += `<div class="details">
//     <div class="wordDiv">
//         <h2 id="word">${word}</h2>
//         <button>
//             <i class="fa-solid fa-volume-high"></i>
//         </button>
//     </div>            
//     <div class="phoDiv">
//         <p id="grammar">${data[0].meanings[0].partOfSpeech}</p>
//         <p id="pho">${data[0].phonetics[0].text}</p>
//     </div>
// </div>
// <div class="meaningExampleDiv">
//     <div id="meaningDiv">
//         <h5 id="meaning">
//         ${data[0].meanings[0].definitions[0].definition} 
//         </h5>
//     </div>
//     <div>
//         <h6 id="example">${data[0].meanings[0].definitions[0].example}</h6></h6>
//     </div>
// </div>`
// }

// sample();