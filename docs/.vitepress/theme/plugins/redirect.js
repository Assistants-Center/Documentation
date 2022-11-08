import { inBrowser } from 'vitepress'

export const redirectMap = {
    update: 'upgrade',
}

export function getRouteName() {
    if (!inBrowser) return ''
    const { pathname } = window.location
    const routeName = pathname.slice(1)
    return routeName
}

export function isInvalidRoute() {
    if (!inBrowser) return false
    const routeName = getRouteName()
    if (routeName == 'discord-dashboard/v3.html' || routeName == 'discord-dashboard/v3') {
        redirect('/discord-dashboard/v3/')
    } else if (routeName == 'discord-dashboard/v3/themes.html' || routeName == 'discord-dashboard/v3/themes') {
        redirect('/discord-dashboard/v3/themes/')
    } else if (
        routeName == 'discord-dashboard/v3/themes/kardex' ||
        routeName == 'discord-dashboard/v3/themes/kardex.html'
    ) {
        redirect('/discord-dashboard/v3/themes/kardex/')
    } else if (
        routeName == 'discord-dashboard/v3/form-types' ||
        routeName == 'discord-dashboard/v3/form-types.html'
    ) {
        redirect('/discord-dashboard/v3/form-types/')
    }
}

export function redirect(to) {
    if (!inBrowser) return
    window.location.replace(to)
}
