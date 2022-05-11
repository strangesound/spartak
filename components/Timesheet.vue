<template>
    <section class="timesheet">
        <div class="timesheet__first-block">
            <h2 class="timesheet__header">Расписание</h2>
            <p class="timesheet__description">Вы&nbsp;можете зарегистрироваться на&nbsp;временной слот
                с&nbsp;несколькими активностями. В&nbsp;течении временного слота вы&nbsp;не&nbsp;можете покинуть лодку
                и&nbsp;нельзя опаздывать&nbsp;&mdash; лодка отплывает по&nbsp;расписанию.</p>
        </div>
        <p class="slot-selection-text">Выбор слота</p>
        <div class="timesheet__timetable-grid">
            <div class="timesheet__day">
                <div class="timesheet__day-sheet-container">
                    <div class="timesheet__day-container">
                        <p class="timesheet__day-number">06</p>
                        <p class="timesheet__month">июня</p>
                    </div>

                </div>

            </div>
            <div class="timesheet__timetable-grid-time">12:00—14:30</div>
            <div class="timesheet__timetable-grid-description">
                <h3 class="timesheet__timetable-grid-description-head">Скиллс челлендж с блогерами и тренерами
                    академии ФК Спартак</h3>
                <p class="timesheet__timetable-grid-description-text">Стать самым надежным букмекером из
                    когда-либо существовавших</p>
            </div>
            <div class="timesheet__slot">
                <p>12:00—14:30</p>
                <div class="timesheet__slot-arrow"></div>
            </div>

        </div>

    </section>

</template>

<style>
.timesheet {
    background-color: #292929;
    padding: 5.357vw 0.595vw;
}

.timesheet__first-block {
    display: grid;
    grid-template-columns: 4fr 5fr;

}

.timesheet__header {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 1.800vw;
    line-height: 96%;
    letter-spacing: 0.01em;
    /* text-transform: uppercase; */
    color: var(--colorLight);

}

.timesheet__description {
    font-family: 'Helvetica';
    /* font-style: italic; */
    font-weight: 400;
    font-size: 1.800vw;
    line-height: 96%;
    letter-spacing: 0.01em;
    /* text-transform: uppercase; */
    color: var(--colorLight);

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
    grid-template-columns: 1.8fr 1.5fr 3.5fr 2fr;
    grid-gap: 1.190vw;
}

.timesheet__timetable-grid-description {
    /* grid-column-start: 2;
    grid-column-end: span 2; */
}

.timesheet__timetable-grid-time,
.timesheet__timetable-grid-description-head {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 1.860vw;
    line-height: 96%;
    letter-spacing: -0.01em;
    color: var(--colorLight);
    border-top: solid 1px var(--colorLight);
}


.timesheet__timetable-grid-description-text {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 1.116vw;
    line-height: 107%;
    letter-spacing: -0.01em;
    color: #929292;

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

.timesheet__slot-arrow {
    background-image: url(~/assets/images/arr2.svg);
    background-repeat: no-repeat;
    width: 1.190vw;
    height: 1.190vw;
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
    text-align: right;
    /* margin-left: auto; */
    margin-bottom: 1.190vw;
    padding-right: 4.5vw;

}
</style>