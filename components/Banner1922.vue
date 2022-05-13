
<script>
import FormTest from "./FormTest.vue";

export default {
    components: { FormTest },
    data() {
        return {
            showModal: false,
        }
    },

}
</script>

<template>

    <FormTest v-show="showModal" @close-modal="showModal = false" />

    <div class="banner1922">
        <div class="banner1922__left">
            <div class="banner1922__top-text-container">
                <p class="banner1922__text">Сыграй в&nbspлегендарном матче</p>
                <p class="banner1922__year">1922</p>
            </div>
            <div class="banner1922__arrow"></div>

            <p class="banner1922__main-text">Каждый желающий может провести свою игру на&nbsp;лодке и&nbsp;стать частью
                истории</p>
            <button class="btn" @click="showModal = true">Записаться на матч</button>

        </div>
        <div class="banner1922__right"></div>
    </div>

</template>

<style>
.banner1922 {
    background-color: var(--colorRed);
    display: grid;
    grid-template-columns: 4fr 5fr;
    min-height: 20.833vw;
}

.banner1922__left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.595vw;
}

.banner1922__top-text-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between
}

.banner1922__year {
    font-family: 'Druk';
    font-style: italic;
    font-weight: 400;
    font-size: 5.952vw;
    line-height: 85%;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: var(--colorLight);

}

.banner1922__text {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 1.860vw;
    line-height: 96%;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    color: var(--colorLight);
    width: min-content;

}

.banner1922__main-text {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 1.860vw;
    line-height: 96%;
    letter-spacing: -0.01em;
    /* text-transform: uppercase; */
    color: var(--colorLight);
    opacity: .5;

}

.banner1922__arrow {
    background-image: url(~/assets/images/arr.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 16px;

}

.banner1922__right {
    position: relative;
    background-image: url(~/assets/images/1922_pattern.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;


}

.banner1922__right::after {
    content: "";
    display: block;
    position: relative;
    background-image: url(~/assets/images/1922_ball.svg);
    background-repeat: no-repeat;
    background-position: center;
    /* background-size: cover; */
    height: 100%;
    width: 100%;
    animation: rotating 5s linear infinite;

}

@keyframes rotating {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}


@media (max-width: 575.98px) {

    .banner1922 {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }

    .banner1922__main-text,
    .banner1922__text {
        font-size: 5.58vw;
    }

    .banner1922__main-text {
        margin-bottom: 8px;
    }

    .banner1922__year {
        font-size: 18vw;
    }

    .banner1922__left {
        padding: 8px;
    }

    .banner1922__right {
        grid-row-start: 1;

    }

}
</style>


