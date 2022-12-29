export default {
    head: [
        ['script', { async: '', src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3673520795587574', crossorigin: 'anonymous' }]
    ],
    title: 'Assistants Center Documentation',
    description: 'Assistants Center Documentation Projects\' Documentation',
    cleanUrls: 'with-subfolders',
    lastUpdated: true,
    themeConfig: {
        lastUpdatedText: 'Last Updated',
        siteTitle: 'Assistants Center Docs',
        nav: [
            { text: 'Discord Support Server', link: 'https://discord.gg/Nkc8MWxHRD' },
            { text: 'GitHub', link: 'https://github.com/Assistants-Center' },
        ],
        sidebar: {
            '/discord-dashboard/v2': [
                {
                    text: 'Discord-Dashboard v2 Documentation',
                    items: [],
                },
                {
                    text: 'Getting Started',
                    items: [
                        { text: 'Introduction', link: '/discord-dashboard/v2/' },
                        { text: 'Code Example', link: '/discord-dashboard/v2/code-example' },
                        { text: 'Get Help', link: '/discord-dashboard/v2/get-help' },
                        { text: 'Video Tutorials', link: "/discord-dashboard/v2/video-tutorials" },
                        { text: 'Installation', link: '/discord-dashboard/v2/installation' },
                        { text: 'First Steps', link: '/discord-dashboard/v2/first-steps' },
                        { text: 'Themes Available', link: '/discord-dashboard/v2/themes' },
                    ]
                },
                {
                    text: 'Required Configuration',
                    items: [
                        { text: 'Port', link: '/discord-dashboard/v2/config/port' },
                        { text: 'Client', link: "/discord-dashboard/v2/config/client" },
                        { text: 'Redirect URI', link: '/discord-dashboard/v2/config/redirect-uri' },
                        { text: "Domain", link: '/discord-dashboard/v2/config/domain' },
                        { text: 'Discord.js Bot Client', link: '/discord-dashboard/v2/config/discord-js-bot-client' },
                        { text: 'Theme Module', link: '/discord-dashboard/v2/config/theme-module' },
                        { text: 'Settings', link: '/discord-dashboard/v2/config/settings' }
                    ]
                },
                {
                    text: 'Optional Configuration',
                    items: [
                        { text: 'Session Store', link: '/discord-dashboard/v2/optional-config/session-store' },
                        { text: 'Required Permissions', link: '/discord-dashboard/v2/optional-config/required-permissions' },
                        { text: 'Rate Limits', link: '/discord-dashboard/v2/optional-config/rate-limits' },
                        { text: 'Accept Privacy Policy', link: '/discord-dashboard/v2/optional-config/accept-privacy-policy' },
                        { text: 'Don\'t create server', link: '/discord-dashboard/v2/optional-config/dont-create-server' },
                        { text: 'SSL', link: '/discord-dashboard/v2/optional-config/ssl' },
                        { text: 'Minimized Console Logs', link: '/discord-dashboard/v2/optional-config/minimized-console-logs' },
                        { text: 'Invite Endpoint', link: '/discord-dashboard/v2/optional-config/invite-endpoint' },
                        { text: 'Support Server', link: '/discord-dashboard/v2/optional-config/support-server' },
                        { text: 'Join Guild After Authorization', link: '/discord-dashboard/v2/optional-config/guild-after-authorization' },
                        { text: 'Efficient Saving System', link: '/discord-dashboard/v2/optional-config/efficient-saving-system' },
                        { text: 'Under Maintenance Mode', link: '/discord-dashboard/v2/optional-config/under-maintenance-mode' },
                    ]
                },
                {
                    text: 'Methods',
                    items: [
                        { text: 'Generate Sample', link: '/discord-dashboard/v2/methods/generate-sample' },
                        { text: 'Create Form Type', link: '/discord-dashboard/v2/methods/create-form-type' },
                        { text: 'Create Custom Page', link: '/discord-dashboard/v2/methods/create-custom-page' },
                        { text: 'Use 3rd Party Module', link: '/discord-dashboard/v2/methods/3rd-party-module' },
                        { text: 'Dashboard Events', link: '/discord-dashboard/v2/methods/dashboard-events' },
                        { text: 'Web Sockets', link: '/discord-dashboard/v2/methods/web-sockets' }
                    ]
                },
            ],
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
                            link: '/discord-dashboard/v3/configuration/theme-and-engine',
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
            '/discord-multi-handler/': [
                {
                    text: 'Discord-Multi-Handler Documentation',
                    items: [
                        {
                            text: 'Getting Started',
                            link: '/discord-multi-handler/getting-started/',
                            items: [
                                { text: 'Introduction', link: '/discord-multi-handler/getting-started/' },
                                { text: 'Installation', link: '/discord-multi-handler/getting-started/installation' },
                                { text: 'Basic Setup', link: '/discord-multi-handler/getting-started/basic-setup' },
                                { text: 'Full Example', link: '/discord-multi-handler/getting-started/full-example' },
                            ]
                        },
                        {
                            text: 'Handlers',
                            link: '/discord-multi-handler/handlers/',
                            items: [
                                { text: 'Command', link: '/discord-multi-handler/handlers/command/', items: [
                                    { text: 'Fetch Commands', link: '/discord-multi-handler/handlers/command/fetch-commands' },
                                    { text: 'Add Command', link: '/discord-multi-handler/handlers/command/add-command' },
                                    { text: 'Reload Command', link: '/discord-multi-handler/handlers/command/reload-command' },
                                ] },
                                { text: 'Event', link: '/discord-multi-handler/handlers/event/', items: [
                                    { text: 'Fetch Events', link: '/discord-multi-handler/handlers/event/fetch-events' }
                                ] },
                                { text: 'Function', link: '/discord-multi-handler/handlers/function/', items: [
                                    { text: 'Fetch Functions', link: '/discord-multi-handler/handlers/function/fetch-functions' },
                                    { text: 'Reload Function', link: '/discord-multi-handler/handlers/function/reload-function' }
                                ] }
                            ]
                        }
                    ],
                }
            ]
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022 - Assistants Center',
        },
    },
}
