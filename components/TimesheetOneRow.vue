<script setup lang="ts">

interface RawProps {
    day: string;
    eventStartTime: string;
    eventEndTime: string;
    name: string;
    description: string;
    slot_end_time: string;
    slot_start_time: string;

}

const props = defineProps<RawProps>();


</script>


<template>
    <div class="timesheet__timetable-grid">
        <p class="main-day-description">В этот день Winliner уплывает в самое начало пути ФК "Спартак" – в 20-30-е года,
            когда произошло становление клуба! Вместе с вами мы представим как формировался легендарный футбольный
            клуб, воссоздадим уникальную ретро форму и проведем турнир "Московского клуба спорта".</p>
        <p class="slot-selection-text">Выбор слота</p>
    </div>
    <div class="timesheet__timetable-grid">
        <div class="timesheet__day">
            <div class="timesheet__day-sheet-container">
                <div class="timesheet__day-container">
                    <p class="timesheet__day-number">{{ day }}</p>
                    <p class="timesheet__month">июня</p>
                </div>

            </div>
        </div>

        <div class="container">
            <div class="thin-line"></div>
            <div class="timesheet__timetable-grid-description">
                <div class="timesheet__timetable-grid-time">{{ eventStartTime + "—" + eventEndTime }}</div>
                <div>
                    <h3 class="timesheet__timetable-grid-description-head">{{ name }}</h3>
                    <p class="timesheet__timetable-grid-description-text">{{ description }}</p>
                </div>
            </div>
        </div>
        <div class="timesheet__slot">
            <p>{{ slot_start_time + "—" + slot_end_time }}</p>
            <div class="timesheet__slot-arrow"></div>
        </div>
    </div>




</template>

<style scoped>
.thin-line {
    width: 100%;
    height: 1px;
    background-color: var(--colorLight);
    margin-bottom: 8px ;
}

.main-day-description {
    grid-column-start: 1;
    grid-column-end: 3;
    align-self: end;
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 1.2vw;
    line-height: 96%;
    letter-spacing: -0.01em;
    color: var(--colorLight);
    padding-top: 5vw;
    padding-bottom: 2vw;
    opacity: .5;
    white-space: pre-line;
}

.timesheet__day-container {
    display: flex;
    flex-direction: row;
    color: var(--colorLight);

}

.timesheet__day-number {
    font-family: 'Druk';
    font-style: italic;
    font-weight: 400;
    font-size: 5.952vw;
    line-height: 85%;
    /* identical to box height, or 85% */

    text-align: center;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    margin-right: .7vw;


}

.timesheet__month {
    color: #929292;
}

.timesheet__month::before {
    display: block;
    content: "";
    width: 100%;
    height: 1px;
    background-color: #929292;
}

.timesheet__timetable-grid {
    display: grid;
    grid-template-columns: 1.8fr 5fr 2fr;
    grid-gap: 1.190vw;
}


.slot-selection-text {
    margin-top: 5.208vw;

    /* display: flex;
    flex-direction: row; */

    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 1.116vw;
    line-height: 107%;
    letter-spacing: -0.01em;
    color: var(--colorOrange);
    width: 100%;
    text-align: center;
    margin-bottom: 1.190vw;
    grid-column-start: 3;
    align-self: end;


}

.timesheet__timetable-grid-description {
    /* border-top: solid 1px var(--colorLight); */
    display: grid;
    grid-template-columns: 3fr 8fr;
    gap: 1.190vw;
}



.timesheet__timetable-grid-time {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 1.860vw;
    line-height: 96%;
    letter-spacing: -0.01em;
    color: var(--colorLight);
    white-space: nowrap;
    padding-right: 1.190vw;

}

.timesheet__timetable-grid-description-head {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 1.860vw;
    line-height: 96%;
    letter-spacing: -0.01em;
    color: var(--colorLight);
    white-space: pre-line;

    /* white-space: nowrap; */
}


.timesheet__timetable-grid-description-text {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 1.116vw;
    line-height: 107%;
    letter-spacing: -0.01em;
    color: #929292;
    white-space: pre-line;
    margin-top: 8px;

}

.timesheet__slot {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 1.116vw;
    line-height: 107%;
    color: var(--colorOrange);
    border: 1.4px solid var(--colorOrange);
    border-radius: 12px;
    padding: 0.595vw;

}

.timesheet__slot:hover{
    background-color: var(--colorOrange);
    color: var(--colorDark);
    cursor: pointer;
}

.timesheet__slot-arrow {
    background-image: url(~/assets/images/arr2.svg);
    background-repeat: no-repeat;
    width: 1.190vw;
    height: 1.190vw;
}

.timesheet__slot:hover > .timesheet__slot-arrow{
    filter: brightness(0);
}

@media (max-width: 575.98px) {

    .timesheet__timetable-grid-time,
    .timesheet__timetable-grid-description-head {
        font-size: 5.58vw;
        white-space: normal;
        min-width: 25vw;

    }

    .timesheet__timetable-grid-time {
        padding-right: 16px;
    }

    .timesheet__slot {
        font-size: 3.348vw;
        padding: 1.785vw;
        margin-top: 32px;
    }

    /* 
    .timesheet__slot::before {
        position: absolute;
        content: "Зарегистрироваться в слот";
        transform: translateY(-30px);

    } */

    .timesheet__slot-arrow {
        width: 16px;
        height: 16px;
    }

    .timesheet__timetable-grid {
        grid-template-columns: 1fr;
        padding-top: 32px;
    }

    .timesheet__day-number {
        font-size: 18vw;
        padding-right: 8px;

    }

    .slot-selection-text,
    .timesheet__timetable-grid-description-text {
        font-size: 3.348vw;
    }



    .slot-selection-text {
        display: none;
    }
}
</style>