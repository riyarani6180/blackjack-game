let cards=[] //aray
let sum=0
let hasBlackjack=false //boolean
let isalive=false
let message= " "
let messgaeEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")


let player = { //object
    name: "rani",
    chip: 2344,
    
    }



let playerEl=document.getElementById("player-el")
playerEl.textContent = player.name +"$" + player.chip

function getrandomcard(){

   let randomnumber=Math.floor(Math.random() *13) +1 //0-12  math object
   if(randomnumber > 10){ // if else statemnt
    return 10 //return statemnt
   }
   else if(randomnumber === 1){
    return 11
   }else{
    return randomnumber
    }
}
function startgame(){
    isalive=true
    let firstcard = getrandomcard()
    let secondcard= getrandomcard()
    cards=[fistcard,secondcard]
    sum=firstcard+secondcard


    rendergame()
}
function rendergame(){
  cardEl.textContent="cards: "
     for(let i=0; i < cards.length; i++){ //for loop
        cardEl.textContent +=  cards[i] + " "
     }
     sumEl.textContent="sum: " + sum
if(sum <= 20){ 
   message=" do you want to draaw a new card"
}
else if(sum === 21){ 
    message="woho!! you have gotten a Blacjack"
    hasBlackjack=true
   }
else{ 
    message="you are out of game"
    isAlive=false
}
function startgame(){
    isalive=true
        }
messgaeEl.textContent=message
}
function newcard(){
    console.log("Drawing a new card from the deck")
    if(hasBlackjack === false && isalive === true){ //logical operqator
      let newcard= getrandomcard()
      sum += newcard
      cards.push(newcard)
      console.log(cards)
      rendergame()
    }
 }
