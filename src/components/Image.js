import React from "react"

function addImage() {
    let img = document.getElementById("img");
    img.innerHTML += "<img src=\"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/c0/8c/cb/\n" +
        "caption.jpg?w=1400&h=-1&s=1&cx=1417&cy=1042&chk=v1_ad4fa9803937402ad7bf\" id='image' width='720' height='540' " +
        "alt='Amsterdam2'/>";
}

function deleteImage() {
    let img = document.getElementById("img");
    img.innerHTML = "<p></p>";
}

function biggerImage(){
    let myImg = document.getElementById("image");
    let currWidth = myImg.clientWidth;
    let currHeight = myImg.clientHeight;
    if(currWidth >= 1000){
        alert("You have reached the maximum!");
    } else{
        myImg.style.width = (currWidth + 20) + "px";
        myImg.style.height = (currHeight + 20) + "px";
    }
}

function smallerImage(){
    let myImg2 = document.getElementById("image");
    let currWidth2 = myImg2.clientWidth;
    let currHeight2 = myImg2.clientHeight;
    if(currHeight2 <= 160){
        alert("You have reached the minimum!");
    } else{
        myImg2.style.width = (currWidth2 - 20) + "px";
        myImg2.style.height = (currHeight2 - 20) + "px";
    }
}

function Image() {
    return (
        <div>
            <a href="https://www.iamsterdam.com/en"><img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/c0/8c/cb/
caption.jpg?w=1400&h=-1&s=1&cx=1417&cy=1042&chk=v1_ad4fa9803937402ad7bf" width="800" height="550" alt="Amsterdam"/></a>
            <div id="img"></div>
            <p>
                <button onClick={addImage}>Додати</button>
                <button onClick={biggerImage}>Збільшити</button>
                <button onClick={smallerImage}>Зменшити</button>
                <button onClick={deleteImage}>Видалити</button>
            </p>
        </div>
    );
}
export default Image;
