let playMat  = document.querySelector(".playmat")
let array = ['B','C','A','D','D','A','B','C']
shuffle(array)
let count = 0
let lastCard
let left = 0
for(let i = 0; i < 8; i++) {
    playMat.innerHTML += 
    `<div class="thecard">

        <div class="thefront">
            <img src="card.jpeg">
        </div>
                
        <div class="theback">
                <h1>${array[i]}</h1>
        </div>

    </div>`
}
let cards = document.querySelectorAll(".thecard")
let transitioning = false;
cards.forEach((card)=>{   

    card.addEventListener('click', ()=>{
        if(transitioning) {
            return;
        }
        // prevent player from further clicking when clicked once
        transitioning = true
        card.classList.toggle('flip')
        count++;
    })
    card.addEventListener('transitionend', () => {
        
        console.log(count)
        console.log(lastCard)
        //console.log(lastcard)
        if (count === 2) {    
            if(lastCard.innerText !== card.innerText) {
                
                setTimeout(()=>{
                    lastCard.classList.toggle('flip')
                    card.classList.toggle('flip')
                    lastCard = undefined
                    count = 0
                },300)    
            } else {
                left += 2
                if (left === array.length) {
                    alert('you win')
                }
                count = 0
                lastCard = undefined
                transitioning = false;
            }
        } else if (count === 1) {
            lastCard = card
            transitioning = false;
        } else if (count === 0) {
            lastCard === undefined
            transitioning = false;
        }
        //transitioning = false;
    })
})

//shffule function
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}