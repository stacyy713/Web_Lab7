import React from "react";

let click = 0;
function changeColor(){
    if (click % 2 === 0) {
        let el1 = document.getElementById("birth_place");
        el1.style.background = "purple";
        el1.style.color = "white";
        click++;
    } else {
        let el1 = document.getElementById("birth_place");
        el1.style.background = "red";
        el1.style.color = "black";
        click++;
    }
}

let click2 = 0;
function changeColor2(){
    if (click2 % 2 === 0) {
        let el2 = document.querySelector("#education");
        el2.style.background = "blue";
        el2.style.color = "white";
        click2++;
    } else {
        let el2 = document.querySelector("#education");
        el2.style.background = "green";
        el2.style.color = "black";
        click2++;
    }
}

class Content extends React.Component {
    render () {
        return (
            <div>
                <p id="birth_place" onClick={changeColor}>Місце народження: 7 серпня, 2002 року, м. Дніпро</p>
                <p id="education" onClick={changeColor2}>Освіта: школа №22, м. Дніпро; ліцей "Інтелект", м. Київ;
                    КПІ ім. Ігоря Сікорського, м. Київ</p>
                <p>Хобі:</p>
                <ul>
                    <li>Кулінарія</li>
                    <li>Катання на лижах</li>
                    <li>Подорожі</li>
                    <li>Фотографія</li>
                    <li>Музика</li>
                </ul>
                <p>Улюблені фільми/книги:</p>
                <ol>
                    <li>"Післязавтра", 2004</li>
                    <li>"Назви мене своїм ім'ям", 2017</li>
                    <li>"Людина-невидимка", 2020</li>
                    <li>"Голодні ігри", 2012</li>
                    <li> К. Сільванова, О. Малісова "Літо в піонерській краватці", 2021</li>
                </ol>
                <p>
                    Амстердам (нід. Amsterdam) — столиця Нідерландів. Розташований у провінції Північна Голландія
                    в гирлі річки Амстел. Амстердам сполучений з Північним морем морським каналом. Характерною рисою
                    географії
                    Амстердама є система добре спланованих каналів, спорудження яких активно здійснювалось у XVII столітті,
                    і нині
                    заслужено заробило місту славу «Північної Венеції». Територіально Амстердам знаходиться близько до
                    провінцій Утрехт
                    і Флеволанд. Амстердам — високоурбанізоване місто: його загальна площа становить 219,4 км², а густота
                    населення
                    4 457 осіб на 1 км². Парки та природні заповідники становлять 12 % міської території.
                </p>
            </div>
        );
    }
}
export default Content;
