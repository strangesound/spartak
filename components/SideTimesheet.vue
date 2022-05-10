<template>
    <section class="sidetimesheet">
        <div class="vline-container">
            <div class="vline"></div>
            <div class="vline"></div>
            <div class="vline"></div>
            <div class="vline"></div>
            <div class="vline"></div>
        </div>
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


        <div class="sidetimesheet__one-row">
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

        <button class="btn">Матч 1922</button>
        <button class="btn">Регистрация СМИ</button>

    </section>

</template>

<style>
.sidetimesheet {
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
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

.sidetimesheet__top-row {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 5.208vw;
    padding: 0.595vw;
    border-top: 1px solid var(--colorDark);
}

.sidetimesheet__cal {
    font-family: 'Helvetica Neue';
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
    border-top: 1px solid var(--colorDark);
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

    transform: translateY(0.372vw)
}

.sidetimesheet__day-disable {
    -webkit-text-stroke: 1px var(--colorDark);
    text-stroke: 1px var(--colorDark);
    color: var(--colorOrange);

    transform: translateY(0.372vw)
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
    width: calc(100%-1.190vw);
    height: calc(100%-1.190vw);
    flex-direction: row;
    justify-content: space-between;
    /* z-index: 10000; */


}

.vline {
    width: 1px;
    background-color: var(--colorDark);
    /* height: calc(100%-2vw); */
    opacity: .1;

}
</style>