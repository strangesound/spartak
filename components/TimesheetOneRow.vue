<script setup lang="ts">

import data from "@/data.json";

// interface RawProps {
//     day: string;
//     eventStartTime: string;
//     eventEndTime: string;
//     name: string;
//     description: string;
//     slot_end_time: string;
//     slot_start_time: string;
// }

// const elTop = useState('elTop', () => {
//     const bodyRect = document.body.getBoundingClientRect()
//     const currentEl = document.getElementById("05")
//     const elemRect = currentEl.getBoundingClientRect()
//     const offset = elemRect.top - bodyRect.top;

// })
// console.log(elTop)

interface RawProps {
    day: string;
    first_words_selection: string;
    day_description: string;
}


const props = defineProps<RawProps>();
const needDay = data.filter(d => d.day === props.day);
// window.console.log (needDay);


// const element = $refs."day" 
// var bodyRect = document.body.getBoundingClientRect(),
//     elemRect = element.getBoundingClientRect(),
//     offset   = elemRect.top - bodyRect.top;

// alert('Element is ' + offset + ' vertical pixels from <body>');



</script>


<template>
    <div class="black-window" :id="day" ref="day">
        <div class="day_and_description">
            <div class="timesheet__day-container">
                <p class="timesheet__day-number">{{ day }}</p>
                <p class="timesheet__month">июня</p>
            </div>

            <p class="main-day-description"><span>{{ first_words_selection }}</span> {{ day_description }}</p>
        </div>

        <div class="timesheet__timetable-grid">

            <p class="slot-selection-text"> Выбери слот<br>для регистрации </p>
        </div>


        <div class="ober" v-for="event in needDay" :key="event.name" :day="event.day"
            :eventStartTime="event.eventStartTime" :eventEndTime="event.eventEndTime" :name="event.name"
            :description="event.description" :slot_start_time="event.slot_start_time"
            :slot_end_time="event.slot_end_time">
            <div class="timesheet__timetable-grid">

                <div class="container">
                    <div class="thin-line"></div>
                    <div class="timesheet__timetable-grid-description">
                        <div class="timesheet__timetable-grid-time">{{ event.eventStartTime + "—" + event.eventEndTime
                        }}
                        </div>
                        <div>
                            <h3 class="timesheet__timetable-grid-description-head">{{ event.name }}</h3>
                            <p class="timesheet__timetable-grid-description-text">{{ event.description }}</p>
                        </div>
                    </div>
                </div>
                <div class="timesheet__slot">
                    <p>{{ event.slot_start_time + "—" + event.slot_end_time }}</p>
                    <div class="timesheet__slot-arrow"></div>
                </div>
            </div>
        </div>
    </div>




</template>

<style scoped>
.black-window {
    background-color: var(--colorDark);
    padding: 1.190vw;
    border-radius: 24px;
    margin-bottom: 1.190vw;
}

.container {
    /* display: block; */
    grid-column-start: 2;
}

.thin-line {
    width: 100%;
    height: 1px;
    background-color: var(--colorLight);
    margin-bottom: 8px;
}

.day_and_description {
    display: grid;
    grid-template-columns: 2.5fr 16fr;
    grid-gap: 1.190vw;
    margin-top: 1.190vw;

}

.main-day-description {
    /* grid-column-start: 2; */
    /* grid-column-end: 3; */
    /* align-self: end; */
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 1.860vw;
    line-height: 96%;
    letter-spacing: -0.01em;
    color: var(--colorLight);
    white-space: pre-line;
}

.main-day-description span {
    color: var(--colorOrange);
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
    grid-template-columns: 2.5fr 12fr 4fr;
    grid-gap: 1.190vw;
    margin-bottom: 0.818vw;
}


.slot-selection-text {
    margin-top: 1.190vw;
    margin-bottom: 1.190vw;
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 1.116vw;
    line-height: 107%;
    letter-spacing: -0.01em;
    color: var(--colorOrange);
    width: 100%;
    text-align: center;
    grid-column-start: 3;
    align-self: end;
    display: flex;
    flex-direction: row;
    align-items: center;
    white-space: nowrap;
}

.slot-selection-text::before {
    /* display: inline-block; */
    content: "";
    width: 100%;
    height: 1px;
    background-color: var(--colorOrange);
    margin-right: 8px;
}

.slot-selection-text::after {
    /* display: inline-block; */
    content: "";
    width: 100%;
    height: 1px;
    background-color: var(--colorOrange);
    margin-left: 8px;

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
    margin-bottom: 8px;

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
    transition: .25s;
    white-space: pre;

}

.timesheet__slot:hover {
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

.timesheet__slot:hover>.timesheet__slot-arrow {
    filter: brightness(0);
}

@media (max-width: 575.98px) {
    .black-window {
        padding-bottom: 48px;
        margin-bottom: 16px;
    }

    .timesheet__day-container {
        flex-direction: column;
    }

    .timesheet__month {
        font-size: 4.167vw;
        width: min-content;
    }

    .timesheet__timetable-grid-description {
        grid-template-columns: 1fr;
    }

    .timesheet__timetable-grid-time,
    .timesheet__timetable-grid-description-head {
        font-size: 5.58vw;
        white-space: normal;
        min-width: 25vw;
        padding-bottom: 12px;

    }

    .main-day-description {
        font-size: 5.556vw;
    }

    .day_and_description {
        grid-template-columns: 1fr 3fr;
        gap: 4.444vw;
    }

    .timesheet__timetable-grid-time {
        padding-right: 16px;
    }

    .timesheet__slot {
        font-size: 4.444vw;
        padding: 4.444vw 1.785vw;
        margin-top: 20px;
    }

    .container {
        grid-column-start: 1;
    }

    .slot-selection-text {
        grid-column-start: 1;
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
        grid-template-rows: auto;
        padding-top: 32px;
    }

    .timesheet__day-number {
        font-size: 18vw;
        padding-right: 8px;
        text-align: start;

    }

    .slot-selection-text,
    .timesheet__timetable-grid-description-text {
        font-size: 4.444vw;
    }



}
</style>