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
  title: "Hey, I'm Ray",
  description: 'A Computer Engineer creating mobile apps and static websites.',
  image: profile.src,
  buttons: [
    {
      title: 'Contact Me',
      link: '#contact',
      isPrimary: true,
    },
    {
      title: 'Resume',
      link: 'https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing',
      isPrimary: false,
    },
  ],
}

export const about = {
  title: 'Who I am',
  description: [
    'I graduated in 2020 and then worked in front-end development as a front-end development engineer.',
    'The tech industry is constantly evolving, and I love being able to grow with it while building on the foundations. I open source my code from an empathy standpoint - for future developers, teammates, users, and with accessibility in mind. I also enjoy being part of the community, helping and mentoring new developers, and supporting organizations that promote diversity in technology.',
    "When I'm not programming, I focus on my hobbies: blogging, playing games, meeting people, and growing my network.",
  ],
}

export const work = {
  title: 'What I do',
  cards: [
    {
      title: 'Mobile development',
      description: 'Develop programs compatible with mobile terminals.',
      icons: null,
    },
    {
      title: 'Web Development',
      description:
        'I create responsive static websites using Reactjs and Vuejs',
      icons: null,
    },
  ],
}

export const projects = {
  title: 'Projects',
  cards: [
    {
      title: 'Ray Template',
      description: 'A simple and easy-to-use mid-background template.',
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
  title: 'Get in touch',
  description:
    'Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at 443547225@qq.com.',
  buttons: [
    {
      title: 'Email Me',
      link: 'mailto:443547225@qq.com',
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
