<script setup lang="ts">
import data from "@/data.json";
// import TimesheetOneRowVue from "./TimesheetOneRow.vue"
// const data = myEvents;
// export default {
//     components: { TimesheetOneRowVue },

// }

</script>

<template>
    <section class="timesheet">
        <div class="timesheet__first-block">
            <h2 class="timesheet__header">Расписание</h2>
            <p class="timesheet__description">Вы&nbsp;можете зарегистрироваться на&nbsp;временной слот
                с&nbsp;несколькими активностями. В&nbsp;течении временного слота вы&nbsp;не&nbsp;можете покинуть лодку
                и&nbsp;нельзя опаздывать&nbsp;&mdash; лодка отплывает по&nbsp;расписанию.</p>
        </div>
        <!-- <TimesheetOneRow /> -->
        <TimesheetOneRow v-for="event in data" :key="event.name" :day="event.day"
            :eventStartTime="event.eventStartTime" :eventEndTime="event.eventEndTime" :name="event.name" :description="event.description"
            :slot_start_time="event.slot_start_time"
            :slot_end_time="event.slot_end_time" />
        <!-- {{ console.log("day") }} -->
    </section>
</template>

<style scoped>


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


@media (max-width: 575.98px) {

    .timesheet {
        padding-left: 8px;
        padding-right: 8px;
    }

    .timesheet__first-block {
        grid-template-columns: 1fr;

    }

    .timesheet__header {
        font-size: 5.58vw;
    }

    .timesheet__description {
        font-size: 4.58vw;
        margin-top: 16px;

    }


}
</style>