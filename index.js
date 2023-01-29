// Remember to import the data and Dog class!
import Dogsdata from './Dog.js'
import dogdata from './data.js'
let currentIndex = 0
let renderedDog = new Dogsdata(dogdata[currentIndex])

function render(){
    document.getElementById('card').innerHTML = renderedDog.getDogsHtml()
}
function getNewDog(){
    if(dogdata.length === currentIndex + 1){
        currentIndex = 0
        renderedDog = new Dogsdata(dogdata[currentIndex])
        render()
    }else{
        currentIndex++
        renderedDog = new Dogsdata(dogdata[currentIndex])
        render()
    }
    
}
function like(){
    renderedDog.setMatchStatus(true)
    renderedDog.hasBeenLiked = true
    document.getElementById('like-img').style.display = "block";
    setTimeout(getNewDog, 500);  
}
function nope(){
        renderedDog.setMatchStatus(true)
        document.getElementById('nope-img').style.display = "block";
        setTimeout(
            getNewDog
        , 500);
     
}
document.getElementById('like').addEventListener('click',like)
document.getElementById('nope').addEventListener('click',nope)
console.log(new Dogsdata(dogdata[currentIndex]))
render()