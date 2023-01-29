// Create the Dog class hereclass



class Dogsdata{
    constructor(data){
        Object.assign(this,data)
    }
    setMatchStatus(bool) {
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }
    getDogsHtml(){
        const {name,avatar,age,bio} = this
        return `
            <img src="images/badge-like.png" id="like-img" alt="">
            <img src="images/badge-nope.png" id="nope-img" alt="">
            <img src=${avatar} class="dog-img full-width" alt="do-img">
            <div class="caption">
                <P id="name">${name}, ${age}</P>
                <p id="bio">${bio}</p>
            </div>
        `
    }
}
export default Dogsdata