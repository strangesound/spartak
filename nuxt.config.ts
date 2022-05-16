import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    
    css: [
        '~/assets/css/reset.css',
        '~/assets/css/global.css',
    ],

      
    router: {
      async scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        }
  
        const findEl = async (hash, x = 0) => {
          return (
            document.querySelector(hash) ||
            new Promise((resolve) => {
              if (x > 50) {
                return resolve(document.querySelector('#app'))
              }
              setTimeout(() => {
                resolve(findEl(hash, ++x || 1))
              }, 100)
            })
          )
        }
  
        if (to.hash) {
          const el = await findEl(to.hash)
          if ('scrollBehavior' in document.documentElement.style) {
            // 100 - отступ сверху для меню например
            return window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' })
          } else {
            return window.scrollTo(0, el.offsetTop)
          }
        }
  
        return { x: 0, y: 0 }
      }
    },
  

})


