<template>
  <FirstAnimation />
          <!-- <nuxt-link :to="{path: '/', hash: '#12'}" class="btn">Anchor1</nuxt-link> -->


  <div class="container1344">
    <div class="grid-container">
      <div class="left-side">
        <TheHeader />
        <Banner1922 />
        <Timesheet />
        <FooterNew />

      </div>
      <SideTimesheet />
    </div>
  </div>
</template>

<style>
.grid-container {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 3fr) 1fr
}

@media (max-width: 991.98px) {
  .grid-container {
    display: flex;
    flex-direction: column;

  }
}



.container1344 {
  /* max-width: 1344px; */
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
}
</style>

<script>
export default {
  head: {
    title: 'Winliner',
    meta: [
      // { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Столетняя история легендарного клуба и его болельщиков, объединённая в 8 тематических мероприятиях'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/static/favicon.ico' }]
  }
}


</script>

