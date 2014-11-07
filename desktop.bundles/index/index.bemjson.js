({
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'css', url: '_index.css' }
    ],
    scripts: [{ elem: 'js', url: '_index.js' }],
    content: [
        {
          block : 'head',
          content: {
            block: 'layout',
            content: [
              {
                elem: 'left',
                content: {
                  tag: 'form',
                  attrs: {action: 'http://yandex.ru/yandsearch'},
                  content:[
                    {
                      block: 'input',
                      name: 'text',
                      val: 'Find'
                    },
                    {
                      block: 'button',
                      type: 'submit',
                      content: 'Search'
                    }
                  ]
                }
              },
              {
                elem: 'right',
                content: {
                  block: 'logo',
                  content: [
                    {
                      block: 'link',
                      url: 'http://ru.bem.info',
                      content: [
                        {
                          block: 'image',
                          attrs: {src: 'http://varya.me/online-shop-dummy/desktop.blocks/b-logo/b-logo.png'}
                        },
                        {
                          block: 'slogan',
                          content: 'A new way of thinking'
                        }
                      ]
                    }
                  ]
                }
              }
            ]
          }
        }
    ]
})