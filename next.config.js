module.exports = {
    async rewrites() {

        const baseUrl = 'https://www.planb.net';

        return [
            {
                source: '/js/p.js',
                destination: 'https://plausible.io/js/plausible.js'
            },
            {
                source: '/api/event', // Or '/api/event/' if you have `trailingSlash: true` in this config
                destination: 'https://plausible.io/api/event'
            },
            {
                source: '/de-m365-modernmanagedservice',
                destination: `${baseUrl}/de-m365-modernmanagedservice`
            },
            {
                source: '/de-azure-modernmanagedservice',
                destination: `${baseUrl}/de-azure-modernmanagedservice`
            },
            {
                source: '/de-useradoptionchangemanagement',
                destination: `${baseUrl}/de-useradoptionchangemanagement`
            },
            {
                source: '/cloud-native-apps',
                destination: `${baseUrl}/cloud-native-apps`
            },
            {
                source: '/uxui-mitgestaltergesucht',
                destination: `${baseUrl}/uxui-mitgestaltergesucht`
            },
            {
                source: '/ausbildung',
                destination: `${baseUrl}/ausbildung`
            },
            {
                source: '/co-innovation-plattform',
                destination: `${baseUrl}/co-innovation-plattform`
            },
            {
                source: '/vhv',
                destination: `${baseUrl}/vhv`
            }
        ];
    },

    async redirects() {
        return [
            {
                source: '/join-us',
                destination: '/karriere',
                permanent: true
            },
            {
                source: '/company-information',
                destination: '/imprint',
                permanent: true
            }
        ]
    }
}