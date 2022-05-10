<template>
    <section class="first">
        <div class="first__100-logo"></div>
        <div class="first__top-pattern"></div>
        <div class="first__bottom-pattern"></div>
    </section>

</template>

<style scoped>
.first {
    z-index: 5000;
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--colorDark);
    overflow: hidden;

    animation-delay: 3s;

    animation-name: first-opacity;
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-timing-function: linear;
    animation-fill-mode: forwards;


}

.first__100-logo {
    background-image: url(~/assets/images/logo100.svg);
    background-repeat: no-repeat;
    background-size: contain;
    width: 14.881vw;
    height: 4.025vw;
    /* padding-top: 27.36%; */
}

.first__top-pattern {
    background-image: url(~/assets/images/anima-top.svg);
    background-repeat: no-repeat;
    background-size: cover;
    /* z-index: 5000; */
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    bottom: 0%;
    left: 0;
    right: 0;
    animation-delay: 1s;

    animation-name: top;
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-timing-function: easy;
    animation-fill-mode: forwards;



}

.first__bottom-pattern {
    background-image: url(~/assets/images/anima-bottom.svg);
    background-repeat: no-repeat;
    background-size: cover;
    /* z-index: 5000; */
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    bottom: 0%;
    left: 0;
    right: 0;
    animation-delay: 1s;
    animation-name: bottom;
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-timing-function: ease;
    animation-fill-mode: forwards;


}

@keyframes top {
    0% {
        transform: translate3d(0, 0, 0);
        visibility: visible;
    }

    99% {
        transform: translate3d(0, -100%, 0);
    }

    100% {
        display: none;
        visibility: none;
        opacity: 0;
    }

}

@keyframes bottom {
    0% {
        display: block;

        transform: translate3d(0, 0, 0);
        visibility: visible;
    }

    99% {
        transform: translate3d(0, 100%, 0);
    }

    100% {
        display: none;
        visibility: none;
        opacity: 0;
    }

}

@keyframes first-opacity {
    0% {
        opacity: 1;
        visibility: visible;
    }


    99% {
        opacity: 0;
        visibility: none;
    }


    100% {
        display: none;
        visibility: none;
        opacity: 0;
    }

}
</style>