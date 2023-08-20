import profile from './profile.png'
import {
  faAppStore,
  faGithub,
  faGooglePlay,
} from '@fortawesome/free-brands-svg-icons'
import {} from '@fortawesome/free-solid-svg-icons'

export const navigation = {
  name: 'Ray',
  links: [
    {
      title: 'About',
      link: '#about',
    },
    {
      title: 'Projects',
      link: '#projects',
    },
    {
      title: 'Contact',
      link: '#contact',
    },
    {
      title: 'Links',
      link: '/links',
    },
  ],
}
export const intro = {
  title: '你好，我是 Ray',
  description: '一名前端开发工程师',
  image: profile.src,
  buttons: [],
}

export const about = {
  title: '关于我',
  description: [
    '自2020年毕业，致力于前端开发，一名有着扎实的前端开发基础的前端开发者。',
    '擅长使用Vue和React等主流前端框架进行项目开发。',
    '并且以负责人身份负责过：冬奥会鸟巢保电系统、电气能量交易平台、电力暂降风险分析系统、燃气SaaS平台等系统的开发与设计。',
  ],
}

export const work = {
  title: '技术栈',
  cards: [
    {
      title: '移动端开发',
      description: '熟练掌握React Native和UNIApp开发技术进行移动端开发',
      icons: null,
    },
    {
      title: 'Web开发',
      description: '熟练使用React与Vue进行网站与平台的开发',
      icons: null,
    },
  ],
}

export const projects = {
  title: 'Projects',
  cards: [
    {
      title: 'Ray Template',
      description: '一个使用全新技术栈开发的、简洁易用的中后台模板',
      icons: [
        {
          icon: faGithub,
          link: 'https://github.com/XiaoDaiGua-Ray/ray-template',
        },
      ],
    },
    {
      title: 'Vue Hooks Plus',
      description: '一个关于 vue3.x 的 hooks 库',
      icons: [
        {
          icon: faGithub,
          link: 'https://github.com/InhiblabCore/vue-hooks-plus',
        },
      ],
    },
  ],
}

export const contact = {
  title: '联系我',
  description: '可以随时保持交流～',
  buttons: [
    {
      title: 'QQ Email',
      link: 'mailto:443547225@qq.com',
      isPrimary: true,
    },
    {
      title: 'GEmail',
      link: 'mailto:xiaodaiguaray@gmail.com',
      isPrimary: true,
    },
  ],
}

// SEARCH ENGINE
export const SEO = {
  // 50 - 60 char
  title: 'Ray | Computer Engineer | Vuejs | Reactjs | Ray Template',
  description:
    'I graduated in 2020 and then worked in front-end development as a front-end development engineer.',
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: 'Ray',
  description: 'Ray | Computer Engineer | Vuejs | Reactjs | Ray Template',
  cards: [
    {
      title: 'My github',
      link: 'https://github.com/XiaoDaiGua-Ray/xiaodaigua-ray.github.io',
    },
  ],
}
