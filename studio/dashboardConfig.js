export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61e6e391d5eabeff3d99696d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-j9144hyz',
                  apiId: 'a45ed1cf-827c-40bf-a7a7-992ac1c93056'
                },
                {
                  buildHookId: '61e6e391af98a2272a87e36b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-tk1ybvi3',
                  apiId: '98208bc8-4564-4103-9f20-1d76c4b7b328'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stu-wriggle/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-tk1ybvi3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
