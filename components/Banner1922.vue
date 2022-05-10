<template>
    <div class="banner1922">
        <div class="banner1922__left">
            <div class="banner1922__top-text-container">
                <p class="banner1922__text">Сыграй в&nbspлегендарном матче</p>
                <p class="banner1922__year">1922</p>
            </div>
            <div class="banner1922__arrow"></div>

            <p class="banner1922__main-text">Каждый желающий может провести свою игру на&nbsp;лодке и&nbsp;стать частью истории</p>
            <button class="btn">Записаться на матч</button>

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
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 1.860vw;
    line-height: 96%;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    color: var(--colorLight);
    width: min-content;

}

.banner1922__main-text{
        font-family: 'Helvetica Neue';
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
    background-image: url(~/assets/images/1922pattern.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;


}
</style>