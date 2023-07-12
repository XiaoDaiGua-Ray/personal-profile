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
  description: '一个前端开发工程师',
  image: profile.src,
  buttons: [],
}

export const about = {
  title: '关于我',
  description: [
    '自2020年毕业，就从事前端开发工作。',
    '扎实的前端开发基础和丰富的实战经验，擅长使用Vue和React等主流前端框架进行项目开发。',
    '在我的职业生涯中，我曾经负责开发和维护多个Web应用程序，包括燃气平台、电气平台、电气交易平台、门户网等系统开发。',
    '在项目开发中，我注重团队合作和代码质量，善于沟通和协作。我能够快速适应新技术和新环境，具备一定的独立解决问题的能力。对于工作我持有高度的责任心，积极主动地解决问题，确保项目按时高质量地完成。',
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
          link: 'https://github.com/XiaoDaiGua-Ray/xiaodaigua-ray.github.io',
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
