<template>
    <section class="timesheet">
        <div class="timesheet__first-block">
            <h2 class="timesheet__header">Расписание</h2>
            <p class="timesheet__description">Вы&nbsp;можете зарегистрироваться на&nbsp;временной слот
                с&nbsp;несколькими активностями. В&nbsp;течении временного слота вы&nbsp;не&nbsp;можете покинуть лодку
                и&nbsp;нельзя опаздывать&nbsp;&mdash; лодка отплывает по&nbsp;расписанию.</p>
        </div>


    </section>

</template>

<style>
.timesheet {
    background-color: #292929;
    padding-top: 5.357vw;
}

.timesheet__first-block {
    display: grid;
    grid-template-columns: 4fr 5fr;

}

.timesheet__header {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 1.860vw;
    line-height: 96%;
    letter-spacing: 0.01em;
    /* text-transform: uppercase; */
    color: var(--colorLight);

}

.timesheet__description {
    font-family: 'Helvetica';
    /* font-style: italic; */
    font-weight: 400;
    font-size: 1.860vw;
    line-height: 96%;
    letter-spacing: 0.01em;
    /* text-transform: uppercase; */
    color: var(--colorLight);

}


</style>