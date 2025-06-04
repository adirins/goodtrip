// stores/blogs.ts
import { defineStore } from 'pinia'

export interface BlogPost {
  id: string
  title: string
  date: string
  image: string
  content: string
}

export const useBlogStore = defineStore('blogs', {
  state: () => ({
    posts: [
      {
        id: '1',
        title: 'Kā sagatavoties pārgājienam',
        date: '2025-03-10',
        image: 'https://picsum.photos/seed/hiking/800/400',
        content: `
          <p>Padomi ekipējuma izvēlē, pārtikas plānošanā un drošības pasākumos.</p>
          <p>Ir svarīgi izvēlēties pareizu apavu, neaizmirst ūdens rezerves un pielāgoties laika apstākļiem.</p>
        `,
      },
      {
        id: '2',
        title: 'Labākās takas Portugālē',
        date: '2025-02-25',
        image: 'https://picsum.photos/seed/portugaltrail/800/400',
        content: `
          <p>Iepazīsti skaistākās dabas takas un jūras piekraste no Alentežo līdz Algarve.</p>
        `,
      },
      {
        id: '3',
        title: 'Ko ņemt līdzi kalnos vasarā',
        date: '2025-01-15',
        image: 'https://picsum.photos/seed/summermountains/800/400',
        content: `
          <p>Praktiski ieteikumi inventāram un apģērbam, lai pārgājiens būtu ērts un drošs.</p>
        `,
      },
      {
        id: '4',
        title: 'Pārgājieni rudens sezonā',
        date: '2024-10-05',
        image: 'https://picsum.photos/seed/fallhiking/800/400',
        content: `<p>Rudens pārgājieni ar krāsainu ainavu un mieru dabā.</p>`,
      },
      {
        id: '5',
        title: 'Nakšņošana dabā – teltī vai kempingā?',
        date: '2024-08-12',
        image: 'https://picsum.photos/seed/campingvswild/800/400',
        content: `<p>Plusi un mīnusi, izvēloties starp teltīm un organizētiem kempingiem.</p>`,
      },
      {
        id: '6',
        title: 'Kas jāzina par kalnu laikapstākļiem',
        date: '2024-07-30',
        image: 'https://picsum.photos/seed/mountainweather/800/400',
        content: `<p>Kā sagatavoties pēkšņām izmaiņām kalnos.</p>`,
      },
      {
        id: '7',
        title: 'Pārgājiens draugu lokā vai vienatnē?',
        date: '2024-06-18',
        image: 'https://picsum.photos/seed/soloorgroup/800/400',
        content: `<p>Kā izvēlēties sev piemērotāko pārgājiena veidu.</p>`,
      },
      {
        id: '8',
        title: '10 obligātas lietas tavā mugursomā',
        date: '2024-05-04',
        image: 'https://picsum.photos/seed/backpackessentials/800/400',
        content: `<p>Kas nekad nedrīkst pietrūkt pārgājiena laikā.</p>`,
      },
      {
        id: '9',
        title: 'Kā orientēties bez telefona',
        date: '2024-04-10',
        image: 'https://picsum.photos/seed/nogps/800/400',
        content: `<p>Kartes, kompasi un citas tradicionālās metodes.</p>`,
      },
      {
        id: '10',
        title: 'Ceļojumu apdrošināšana pārgājienos',
        date: '2024-03-22',
        image: 'https://picsum.photos/seed/insurance/800/400',
        content: `<p>Kāpēc tā ir svarīga un ko izvēlēties.</p>`,
      },
    ] as BlogPost[],
  }),

  getters: {
    getById: (state) => (id: string) => state.posts.find((post) => post.id === id),
    allPosts: (state) => state.posts,
  },
})
