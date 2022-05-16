<script setup lang="ts">
// import Vue from 'vue';
// import vueSmoothScroll from 'vue2-smooth-scroll';

// nuxt3.use(vueSmoothScroll);



// import data from "@/data.json";

// interface RawProps {
//     day: string;
//     eventStartTime: string;
//     eventEndTime: string;
//     name: string;
//     description: string;
//     slot_end_time: string;
//     slot_start_time: string;
// }

interface RawProps {
    day: string;
    // first_words_selection: string;
    // day_description: string;
}


const props = defineProps<RawProps>();
// const needDay = data.filter(d => d.day === props.day);
// console.log (props.day);



</script>


<template>


    <!-- <nuxt-link to="{ path: '/', hash: props.day }" ; -->
    <!-- <nuxt-link :to="{ path: '/', hash: props.day }" class="button--grey"> -->
    <!-- <nuxt-link :to="`/#${props.day}`" class="button--grey"> -->
    <!-- <nuxt-link :to="{path: '/', params: { id:props.day } }"> -->
    <!-- <button @click="$router.push({ name: '/', hash: '#12' })"> -->
<!-- <nuxt-link :to="{ path: '/',hash:`#${props.day}`}"> -->
<!-- <nuxt-link to="https://nuxtjs.org"> -->

<nuxt-link :to="({path: '/', hash:`#${props.day}`})" class="daylink">

    <!-- <a class="daylink" :href="`#${props.day}`"> -->
        <div class="sidetimesheet__one-row">
            <div class="sidetimesheet__play"></div>
            <p class="sidetimesheet__day">{{ props.day }}</p>
            <div class="sidetimesheet__reg-status">открыта регистрация</div>
        </div>
        <!-- </button> -->
    <!-- </a> -->
    </nuxt-link>
    <!-- 
    <div class="sidetimesheet__one-row">
        <div class="sidetimesheet__play"></div>
        <p class="sidetimesheet__day">06</p>
        <div class="sidetimesheet__reg-status">открыта регистрация</div>
    </div>


    <div class="sidetimesheet__one-row active">
        <div class="sidetimesheet__play"></div>
        <p class="sidetimesheet__day">07</p>
        <div class="sidetimesheet__reg-status">открыта регистрация</div>
    </div> -->
</template>

<style scoped>
a {
    color: inherit;
    text-decoration: none;
    scroll-behavior: smooth;

}

.daylink {
    scroll-behavior: smooth;
    text-decoration: none;
}

.sidetimesheet__one-row {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 100%;
    /* min-height: 5.208vw; */
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
    margin-bottom: .5vh;
    font-family: 'Druk';
    font-style: italic;
    font-weight: 400;
    font-size: 10vh;
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
    text-decoration: none;
    grid-column: span 2;
    font-size: 1.116vw;
    /* grid-column-end: span col4-start; */
    margin: auto;
    text-align: center;
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
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

    .sidetimesheet__day{
        font-size: 10vh;
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
        /* margin: 8px; */
        transform: translateY(.7vh);
    }

}
</style>