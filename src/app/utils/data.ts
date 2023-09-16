export const navigationLinks = [
  { label: 'Início', path: '/' },
  { label: 'Sobre mim', path: '#about' },
  { label: 'Projetos', path: '#projects' },
  { label: 'Habilidades', path: '#skills' },
  { label: 'Contato', path: '#contact' }
]

export type projectType = {
  name: string
  repo: string
  url: string
  image: string
  description: string
  tags: string[]
}

export const projectsData: projectType[] = [
  {
    name: 'Nome do Projeto 1',
    repo: 'https://github.com/',
    url: 'https://github.com/',
    image:
      'https://i.ibb.co/b69XhBD/Screenshot-2023-07-11-at-22-26-22-REST-Countries-API.png',
    description: 'Descrição do projeto',
    tags: ['react', 'typescript', 'styled-components', 'axios', 'api']
  },
  {
    name: 'Nome do Projeto 2',
    repo: 'https://github.com/',
    url: 'https://github.com/',
    image:
      'https://i.ibb.co/b69XhBD/Screenshot-2023-07-11-at-22-26-22-REST-Countries-API.png',
    description: 'Descrição do projeto',
    tags: ['react', 'typescript', 'styled-components', 'axios', 'api']
  },
  {
    name: 'Nome do Projeto 3',
    repo: 'https://github.com/',
    url: 'https://github.com/',
    image:
      'https://i.ibb.co/b69XhBD/Screenshot-2023-07-11-at-22-26-22-REST-Countries-API.png',
    description: 'Descrição do projeto',
    tags: ['react', 'typescript', 'styled-components', 'axios', 'api']
  },
  {
    name: 'Nome do Projeto 4',
    repo: 'https://github.com/',
    url: 'https://github.com/',
    image:
      'https://i.ibb.co/b69XhBD/Screenshot-2023-07-11-at-22-26-22-REST-Countries-API.png',
    description: 'Descrição do projeto',
    tags: ['react', 'typescript', 'styled-components', 'axios', 'api']
  },
  {
    name: 'Nome do Projeto 5',
    repo: 'https://github.com/',
    url: 'https://github.com/',
    image:
      'https://i.ibb.co/b69XhBD/Screenshot-2023-07-11-at-22-26-22-REST-Countries-API.png',
    description: 'Descrição do projeto',
    tags: ['react', 'typescript', 'styled-components', 'axios', 'api']
  },
  {
    name: 'Nome do Projeto 6',
    repo: 'https://github.com/',
    url: 'https://github.com/',
    image:
      'https://i.ibb.co/b69XhBD/Screenshot-2023-07-11-at-22-26-22-REST-Countries-API.png',
    description: 'Descrição do projeto',
    tags: ['react', 'typescript', 'styled-components', 'axios', 'api']
  },
  {
    name: 'Nome do Projeto 7',
    repo: 'https://github.com/',
    url: 'https://github.com/',
    image:
      'https://i.ibb.co/b69XhBD/Screenshot-2023-07-11-at-22-26-22-REST-Countries-API.png',
    description: 'Descrição do projeto',
    tags: ['react', 'typescript', 'styled-components', 'axios', 'api']
  },
  {
    name: 'Nome do Projeto 8',
    repo: 'https://github.com/',
    url: 'https://github.com/',
    image:
      'https://i.ibb.co/b69XhBD/Screenshot-2023-07-11-at-22-26-22-REST-Countries-API.png',
    description: 'Descrição do projeto',
    tags: ['react', 'typescript', 'styled-components', 'axios', 'api']
  }
]

export const skillsData = [
  {
    img: 'html5/html5-original.svg',
    name: 'HTML'
  },
  {
    img: 'css3/css3-original.svg',
    name: 'CSS'
  },
  {
    img: 'javascript/javascript-original.svg',
    name: 'JavaScript'
  },
  {
    img: 'sass/sass-original.svg',
    name: 'Sass'
  },
  {
    img: 'typescript/typescript-original.svg',
    name: 'TypeScript'
  },
  {
    img: 'react/react-original.svg',
    name: 'React'
  },
  {
    img: 'tailwindcss/tailwindcss-plain.svg',
    name: 'Tailwindcss'
  },
  {
    img: 'nextjs/nextjs-original.svg',
    name: 'Nextjs'
  }
]
