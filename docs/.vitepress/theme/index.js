import { inBrowser } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { isInvalidRoute, redirect } from './plugins/redirect'

import GoogleAdsense from './components/GoogleAdsense.vue'

DefaultTheme.enhanceApp = ({ app, router }) => {
    app.component('GoogleAdsense', GoogleAdsense)
    if (inBrowser) {
        if (isInvalidRoute()) {
            redirect()
        }
    }
}

const theme = {
    ...DefaultTheme,
    enhanceApp({ app, router }) {
        app.component('GoogleAdsense', GoogleAdsense)
        if (inBrowser) {
            if (isInvalidRoute()) {
                redirect()
            }
        }
    },
}

export default theme
