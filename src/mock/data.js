import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Colton Bonner | Software Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Colton Bonner',
  subtitle: 'I am a Full-Stack Software Engineer',
  cta: 'Meet me',
};

// ABOUT DATA
export const aboutData = {
  img: 'EditedHeadShot.jpeg',
  paragraphOne: `I was born in southern California in the early '90s, and have spent more time in the desert than I care to admit. One fantastic side effect of living in a severely seasonal area is that I have developed a keen sense of predicting trends and planning accordingly to stay ahead for when the workflow inevitably drys up.`,
  paragraphTwo: `I have always applied myself fully to my work and anything I find joy or purpose. Whether it was trying to be the fastest busboy at my first real job, or being as good a husband and father as I am capable of being, or now learning as much as I can about software development.`,
  paragraphThree: `My self motivating motto is, "there is always someone better," and this is how I keep myself striving to be better in my personal and professional life. I enjoy being around people who bring out the best in me, and I love it when I can motivate others to reach their goals. I cannot wait to meet new teammates and learn from them as much as I can, and if I am fortunate, maybe teach them something too.`,
  resume:
    'https://docs.google.com/document/d/1PxfPI_TDjr7asqaQIwj8-0aQ8MEnBH-ee3d2SKLYsrg/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'PocketBook.png',
    title: 'Pocket Book',
    info:
      'I built a simple financial tracker for users who prefer a less complicated experience. I mainly developed this for myself, because most finance trackers I have used become cumbersome over time.',
    info2: 'Node.js | Express | PostgreSQL | React.js | JavaScript | CSS',
    url: 'https://pocket-book-client.vercel.app/',
    repo: 'https://github.com/cbonner26118/pocket-book-server', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'BabyBook.PNG',
    title: 'Baby Book',
    info:
      "I built a newborn event tracker, such as diaper changes or feedings, with a simplified app style approach. I created this because I just recently had my firstborn with my wife, and we needed a simple way to keep track of when our sons' last feeding was, etc.",
    info2: 'Node.js | Express | PostgreSQL | React.js | JavaScript | CSS',
    url: 'https://baby-book-app.now.sh/',
    repo: 'https://github.com/cbonner26118/baby-book-api', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Anything.PNG',
    title: 'Anything',
    info:
      "I used Spoonaculars API to create a random recipe generator to help inspire meal prep and family dinners. I built this because spending hours planning a set of meals for the week isn't something that I enjoy doing, so a little help goes a long way. You can search by cuisine or get a completely random recipe.",
    info2: 'HTML5 | JavaScript | jQuery | CSS',
    url: 'https://cbonner26118.github.io/AnythingAPI/',
    repo: 'https://github.com/cbonner26118/AnythingAPI', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Looking forward to working on a strong team!',
  btn: '',
  email: 'cbonner26118@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/bwregaming',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/cbonner26118',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/coltonbonner/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/cbonner26118',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
