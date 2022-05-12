
<script>
import FormTest from "./FormTest.vue";


export default {
    components: { FormTest },
    data() {
        return {
            showModal: false,
        }
    },
    data() {
        return {
            showBurger: true

        }
    }

}
</script>



<template>

    <FormTest v-show="showModal" @close-modal="showModal = false" />

    <label for="check">
        <input type="checkbox" id="check" @click="showBurger = !showBurger" />
        <span></span>
        <span></span>
        <span></span>
    </label>



    <section class="sidetimesheet" v-show="showBurger" @close-modal="showBurger = false">

        <div class="sidetimesheet__top-row">
            <p class="sidetimesheet__cal">Календарь событий</p>
            <p class="sidetimesheet__month">Июнь</p>
        </div>

        <div class="sidetimesheet__one-row">
            <div class="sidetimesheet__stop"></div>
            <p class="sidetimesheet__day sidetimesheet__day-disable">05</p>
            <div class="sidetimesheet__reg-status">завершено</div>
        </div>


        <div class="sidetimesheet__one-row">
            <div class="sidetimesheet__play"></div>
            <p class="sidetimesheet__day">06</p>
            <div class="sidetimesheet__reg-status">открыта регистрация</div>
        </div>


        <div class="sidetimesheet__one-row active">
            <div class="sidetimesheet__play"></div>
            <p class="sidetimesheet__day">07</p>
            <div class="sidetimesheet__reg-status">открыта регистрация</div>
        </div>


        <div class="sidetimesheet__one-row">
            <div class="sidetimesheet__play"></div>
            <p class="sidetimesheet__day">08</p>
            <div class="sidetimesheet__reg-status">открыта регистрация</div>
        </div>


        <div class="sidetimesheet__one-row">
            <div class="sidetimesheet__play"></div>
            <p class="sidetimesheet__day">09</p>
            <div class="sidetimesheet__reg-status">открыта регистрация</div>
        </div>


        <div class="sidetimesheet__one-row">
            <div class="sidetimesheet__play"></div>
            <p class="sidetimesheet__day">10</p>
            <div class="sidetimesheet__reg-status">открыта регистрация</div>
        </div>


        <div class="sidetimesheet__one-row">
            <div class="sidetimesheet__play"></div>
            <p class="sidetimesheet__day">11</p>
            <div class="sidetimesheet__reg-status">открыта регистрация</div>
        </div>

        <div class="sidetimesheet__one-row">
            <div class="sidetimesheet__play"></div>
            <p class="sidetimesheet__day">12</p>
            <div class="sidetimesheet__reg-status">открыта регистрация</div>
        </div>

        <button class="btn" @click="showModal = true">Матч 1922</button>
        <button class="btn" @click="showModal = true">Регистрация СМИ</button>

        <div class="vline-container">
            <div class="vline"></div>
            <div class="vline"></div>
            <div class="vline"></div>
            <div class="vline"></div>
            <div class="vline"></div>
        </div>



    </section>
    <div class="sidetimesheet__overlay" v-show="showBurger" @close-modal="showBurger = false"> </div>

</template>

<style>
.sidetimesheet {
    display: flex;
    flex-direction: column;
    background-color: var(--colorOrange);
    padding: 0.595vw;
    z-index: 999;
    position: fixed;
    overflow-x: hidden;
    height: 100vh;
    top: 0%;
    right: 0%;
    width: 25%;
}

.sidetimesheet__overlay {
    display: none;
}

label {
    display: none;
}

@media (max-width: 991.98px) {
    .sidetimesheet {
        position: absolute;

        /* transform: translateY(100px); */

    }

    .sidetimesheet__overlay {
        display: block;
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, .5);
        /* border: 3px solid #f1f1f1; */
        z-index: 0;
        transition: .5s;
    }




    /* burger btn */
    label {
        z-index: 5050;
        position: absolute;
        top: 16px;
        right: 16px;
        display: flex;
        flex-direction: column;
        width: 40px;
        cursor: pointer;
    }

    label span {
        background: var(--colorLight);
        border-radius: 10px;
        height: 5px;
        margin: 3px 0;
        transition: .4s cubic-bezier(0.68, -0.6, 0.32, 1.6);

    }


    span:nth-of-type(1) {
        width: 50%;

    }

    span:nth-of-type(2) {
        width: 100%;
    }


    span:nth-of-type(3) {
        width: 75%;

    }


    input[type="checkbox"] {
        display: none;
    }


    input[type="checkbox"]:checked~span:nth-of-type(1) {
        transform-origin: bottom;
        transform: rotatez(45deg) translate(4px, 0px);
        background: var(--colorLight);

    }


    input[type="checkbox"]:checked~span:nth-of-type(2) {

        transform-origin: top;
        transform: rotatez(-45deg);
        background: var(--colorLight);

    }


    input[type="checkbox"]:checked~span:nth-of-type(3) {

        transform-origin: bottom;
        width: 50%;
        transform: translate(17px, -6px) rotatez(45deg);
        background: var(--colorLight);


    }

    /* end burger btn */
}



.sidetimesheet__top-row {
    z-index: 5;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 5.208vw;
    padding: 0.595vw;
    border-top: 1px solid var(--colorDark);
}

@media (max-width: 991.98px) {
    .sidetimesheet__top-row {
        margin-top: 50px;

    }
}

.sidetimesheet__cal {
    font-family: 'Helvetica';
    font-style: normal;
    width: min-content;
    font-weight: 400;
    font-size: 1.116vw;
    line-height: 107%;
    color: var(--colorDark);
}

.sidetimesheet__month {
    font-family: 'Druk';
    font-style: italic;
    font-weight: 400;
    font-size: 5.952vw;
    line-height: 85%;
    text-align: center;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    -webkit-text-stroke: 1px var(--colorDark);
    text-stroke: 1px var(--colorDark);
    color: var(--colorOrange);
    transform: translateY(0.372vw)
}


.sidetimesheet__one-row {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 100%;
    min-height: 5.208vw;
    /* border-top: 1px solid var(--colorDark); */
    transition: hover 1s;
    cursor: pointer;
    z-index: 2;
}

/* .sidetimesheet__one-row-hover{
    display: block;
   background-color: orange;
   opacity: 0; 
} */
.sidetimesheet__one-row:hover::before {
    content: "";
    position: absolute;
    width: 105%;
    margin-left: -1.190vw;
    height: 2px;
    background-color: var(--colorLight);
    transform: translateY(1.2vw);
}

.sidetimesheet__one-row::after {
    content: "";
    position: absolute;
    width: 95%;
    margin-left: 0;
    height: 1px;
    background-color: var(--colorDark);
    transform: translateY(-.2vw);
}

.active {
    background-color: var(--colorDark);
    /* color: var(--colorLight); */
    width: 100%;
    margin: 0.35vw 0;
    border-radius: 0.893vw;
    /* transform: translateX(-10); */
}

.active p {
    color: var(--colorLight);
}

.active div {
    filter: invert(100%)
}


.sidetimesheet__play {
    background-image: url(~/assets/images/play.svg);
    background-repeat: no-repeat;
    background-position: center;
}

.sidetimesheet__stop {
    background-image: url(~/assets/images/stop.svg);
    background-repeat: no-repeat;
    background-position: center;

}

.sidetimesheet__day {
    grid-column-start: 3;
    margin: auto;
    font-family: 'Druk';
    font-style: italic;
    font-weight: 400;
    font-size: 5.952vw;
    line-height: 85%;
    text-align: center;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: var(--colorDark);

    transform: translateY(0.35vw)
}

.sidetimesheet__day-disable {
    -webkit-text-stroke: 1px var(--colorDark);
    text-stroke: 1px var(--colorDark);
    color: var(--colorOrange);

    transform: translateY(0.35vw)
}

.sidetimesheet__reg-status {
    grid-column: span 2;
    font-size: 1.116vw;
    /* grid-column-end: span col4-start; */
    margin: auto;
    text-align: center;
}

.vline-container {
    position: absolute;
    display: flex;
    width: 95%;
    height: 98%;
    flex-direction: row;
    justify-content: space-between;
    z-index: 1;


}

.vline {
    width: 1px;
    background-color: var(--colorDark);
    opacity: .1;

}

@media (max-width: 991.98px) {
    .vline-container {
        margin-top: 50px;
        height: calc(98%-50px);

    }
}


@media (max-width: 575.98px) {
    .sidetimesheet {
        width: 75%;
        padding: 8px;
    }


    .sidetimesheet__cal,
    .sidetimesheet__reg-status {
        font-size: 3vw;
    }

    .sidetimesheet__top-row {
        padding: 8px;
    }

    .sidetimesheet__day,
    .sidetimesheet__month {
        font-size: 18vw;
    }

    .btn {
        margin-top: 8px;
    }

    .vline-container {
        width: calc(100%-16px);
    }

    .sidetimesheet__one-row {

        /* margin-top: 4px; */
        /* margin-bottom: 4px; */

    }

    .sidetimesheet__one-row:hover::before {
        margin-left: -16px;
        transform: translateY(3.2vw);
    }

    .sidetimesheet__one-row::after {
        transform: translateY(-.7vw);
    }

    .active {
        width: 100%;
        margin: 0.35vw 0;
        border-radius: 12px;
        /* transform: translateX(-10); */
    }

    .sidetimesheet__day {
        margin: 8px;
        transform: translateY(-1vw);
    }

}
</style>