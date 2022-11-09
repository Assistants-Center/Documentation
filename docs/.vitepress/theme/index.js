import { inBrowser } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { isInvalidRoute, redirect } from './plugins/redirect'

import GoogleAdsense from './components/GoogleAdsense.vue'

const theme = {
    ...DefaultTheme,
    enhanceApp({ app, router }) {
        app.component('GoogleAdsense', GoogleAdsense)
        if (inBrowser) {
            if (isInvalidRoute()) {
                redirect()
            }
        }

        DefaultTheme.enhanceApp({ app, router })
    },
}

export default theme
