export default {
    title: 'Assistants Center Documentation',
    description: 'Assistants Center Documentation Projects\' Documentation',
    cleanUrls: 'with-subfolders',
    themeConfig: {
        siteTitle: 'Assistants Center Docs',
        nav: [
            { text: 'Guide', link: '/guide' },
            { text: 'Configs', link: '/configs' },
            { text: 'Changelog', link: 'https://github.com/...' },
        ],
        sidebar: {
            '/discord-dashboard/v3': [
                {
                    text: 'Discord-Dashboard v3 Documentation',
                    items: [],
                },
                {
                    text: 'Getting Started',
                    items: [
                        { text: 'Introduction', link: '/discord-dashboard/v3/' },
                        { text: 'Requirements', link: '/discord-dashboard/v3/requirements' },
                        {
                            text: 'Creating Project Instance',
                            link: '/discord-dashboard/v3/creating-project-instance',
                        },
                        { text: 'Installation', link: '/discord-dashboard/v3/installation' },
                    ],
                },
                {
                    text: 'Configuration',
                    items: [
                        {
                            text: 'Initiation',
                            link: '/discord-dashboard/v3/configuration/initiation',
                        },
                        {
                            text: 'Development Mode',
                            link: '/discord-dashboard/v3/configuration/development-mode',
                        },
                        {
                            text: 'Theme and Engine',
                            link: '/discord-dashboard/v3//configuration/theme-and-engine',
                        },
                        {
                            text: 'Register the Project',
                            link: '/discord-dashboard/v3/configuration/register-the-project',
                        },
                        {
                            text: 'Discord.js Client',
                            link: '/discord-dashboard/v3/configuration/discord-js-client',
                        },
                        {
                            text: 'Client Credentials',
                            link: '/discord-dashboard/v3/configuration/client-credentials',
                        },
                        {
                            text: 'Redirect URI',
                            link: '/discord-dashboard/v3/configuration/redirect-uri',
                        },
                        {
                            text: 'Options Folder',
                            link: '/discord-dashboard/v3/configuration/options-folder',
                        },
                        {
                            text: 'Required Permissions',
                            link: '/discord-dashboard/v3/configuration/required-permissions',
                        },
                        {
                            text: 'User Static',
                            link: '/discord-dashboard/v3/configuration/user-static',
                        },
                        {
                            text: 'Session Settings',
                            link: '/discord-dashboard/v3/configuration/session-settings',
                        },
                        {
                            text: 'Administrators',
                            link: '/discord-dashboard/v3/configuration/administrators',
                        },
                        {
                            text: 'Fastify Utilities',
                            link: '/discord-dashboard/v3/configuration/fastify-utilities',
                        },
                        {
                            text: 'Port',
                            link: '/discord-dashboard/v3/configuration/port',
                        },
                        {
                            text: 'Starting the Dashboard',
                            link: '/discord-dashboard/v3/configuration/starting-the-dashboard',
                        },
                    ],
                },
                {
                    text: 'Form Types',
                    items: [
                        {
                            text: 'Text Input',
                            link: '/discord-dashboard/v3/form-types/textinput',
                        },
                        {
                            text: 'Text Area',
                            link: '/discord-dashboard/v3/form-types/textarea',
                        },


                        {
                            text: 'Checkbox',
                            link: '/discord-dashboard/v3/form-types/checkbox'
                        },
                        {
                            text: 'Switch',
                            link: '/discord-dashboard/v3/form-types/switch'
                        },


                        {
                            text: 'Select',
                            link: '/discord-dashboard/v3/form-types/select'
                        },
                        {
                            text: 'Multiple Select',
                            link: '/discord-dashboard/v3/form-types/multiple-select'
                        },


                        {
                            text: 'Channel Select',
                            link: '/discord-dashboard/v3/form-types/channel-select'
                        },
                        {
                            text: 'Multiple Channel Select',
                            link: '/discord-dashboard/v3/form-types/multiple-channel-select'
                        },


                        {
                            text: 'Role Select',
                            link: '/discord-dashboard/v3/form-types/role-select'
                        },
                        {
                            text: 'Multiple Role Select',
                            link: '/discord-dashboard/v3/form-types/multiple-role-select'
                        },


                        {
                            text: 'Custom Component',
                            link: '/discord-dashboard/v3/form-types/custom-component'
                        },

                        {
                            text: 'Embed Builder',
                            link: '/discord-dashboard/v3/form-types/embed-builder'
                        }
                    ],
                },
                {
                    text: 'Premium',
                    items: [],
                },
            ],
            '/discord-dashboard/v3/themes/kardex': [
                {
                    text: 'Discord-Dashboard v3 Kardex Theme Documentation',
                    items: [],
                },
            ],
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022 - Assistants Center',
        },
    },
}
