
<script setup lang="ts">
import days from "@/day_description.json";

// const width = computed () => 
const options = reactive({
    showModal: false,
    showModalSmi: true,
    showBurger: true
}
)

</script>


<template>

    <FormSmi v-show="options.showModalSmi" @close-modal="options.showModalSmi = !options.showModalSmi" />
    <FormTest v-show="options.showModal" @close-modal="options.showModal = !options.showModal" />


    <button class="burger-btn" @click="options.showBurger = !options.showBurger"></button>

    <section class="sidetimesheet" v-show="options.showBurger">

        <div class="sidetimesheet__top-row">
            <p class="sidetimesheet__cal">Календарь событий</p>
            <p class="sidetimesheet__month">Июнь</p>
        </div>
        <div class="vline-container">
            <div class="vline"></div>
            <div class="vline"></div>
            <div class="vline"></div>
            <div class="vline"></div>
            <div class="vline"></div>
        </div>

        <SideTimeOneRow v-for="myDay in days" :key="myDay.day" :day="myDay.day" />

        <div class="line"></div>
        <button class="btn mtop" @click="options.showModal = true">Матч 1922</button>
        <button class="btn" @click="options.showModalSmi = true">Регистрация СМИ</button>




    </section>
    <div class="sidetimesheet__overlay" v-show="options.showBurger" @click="options.showBurger = !options.showBurger">
    </div>

</template>

<style scoped>
.sidetimesheet__top-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.595vw;
}

.mtop {
    margin-top: auto;
}

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
    /* z-index: 1; */
}

.sidetimesheet__overlay {
    display: none;
}

.burger-btn {
    display: none;
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
    font-size: 10vh;
    line-height: 85%;
    text-align: center;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    -webkit-text-stroke: 1px var(--colorDark);
    text-stroke: 1px var(--colorDark);
    color: var(--colorOrange);
    transform: translateY(0.372vw)
}




.vline-container {
    position: absolute;
    display: flex;
    width: 95%;
    height: 98%;
    flex-direction: row;
    justify-content: space-between;
    z-index: -1;


}

.vline {
    width: 1px;
    background-color: var(--colorDark);
    opacity: .1;

}

.line {
    width: 100%;
    height: 1px;
    background-color: var(--colorDark);

}




@media (max-width: 575.98px) {

    .sidetimesheet {
        position: fixed;
        padding: 4px;

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
        z-index: 1;
        transition: .5s;
    }


    .burger-btn {
        display: block;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        border: 1.4px solid var(--colorDark);
        width: 48px;
        height: 48px;
        right: 8px;
        top: 2vh;
        z-index: 9999;
        background: none;
        /* border: 1.4px solid #FF5D0C; */
        border-radius: 12px;
        padding-left: 2px;
        cursor: pointer;

    }

    .burger-btn::before {
        display: block;
        position: absolute;
        content: "";
        width: 40px;
        height: 2px;
        background-color: var(--colorDark);
        /* transform: rotate(45deg); */
        transform: translateY(-4px);

    }

    .burger-btn::after {
        display: block;
        position: absolute;
        content: "";
        width: 40px;
        height: 2px;
        background-color: var(--colorDark);
        /* transform: rotate(-45deg); */
        transform: translateY(+4px);

    }

    .vline-container {
        margin-top: 50px;
        height: calc(98%-50px);

    }

    .sidetimesheet {
        width: 75%;
        padding: 4px;
    }


    .sidetimesheet__cal {
        font-size: 3vw;
    }

    .sidetimesheet__top-row {
        padding: 8px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

    .sidetimesheet__month {
        font-size: 10vh;
    }

    .btn {
        margin-top: 8px;
    }

    .vline-container {
        width: calc(100%-16px);
    }


}
</style>