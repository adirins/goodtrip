import { defineStore } from 'pinia'

export const useTripsStore = defineStore('trips', {
  state: () => ({
    trips: [
      {
        id: '1',
        title: 'Portugāles piekraste',
        date: '2025. gada marts',
        season: 'pavasaris',
        description: 'Dabas takas, okeāns un brīvības sajūta gar Rota Vicentina maršrutu.',
        image: 'https://picsum.photos/seed/portugal/600/400',
      },
      {
        id: '2',
        title: 'Alpu pārgājiens',
        date: '2025. gada jūlijs',
        season: 'vasara',
        description: 'Augstkalnu piedzīvojums Šveices un Itālijas Alpos ar ainavām kā no pastkartes.',
        image: 'https://picsum.photos/seed/alps/600/400',
      },
      {
        id: '3',
        title: 'Balkānu treks',
        date: '2025. gada septembris',
        season: 'rudens',
        description: 'Mazāk zināmas takas un kalni Albānijā un Melnkalnē.',
        image: 'https://picsum.photos/seed/balkans/600/400',
      },
      {
        id: '4',
        title: 'Islande – uguns un ledus zeme',
        date: '2025. gada jūnijs',
        season: 'vasara',
        description: 'Aizraujošs pārgājiens pa Landmannalaugar maršrutu.',
        image: 'https://picsum.photos/seed/iceland/600/400',
      },
      {
        id: '5',
        title: 'Norvēģijas fjordi',
        date: '2025. gada augusts',
        season: 'vasara',
        description: 'Kalnu pārgājieni ar skatiem uz dziļajiem fjordiem.',
        image: 'https://picsum.photos/seed/norway/600/400',
      },
      {
        id: '6',
        title: 'Slovākijas Tatri',
        date: '2025. gada oktobris',
        season: 'rudens',
        description: 'Īsāki, bet ainaviski bagāti kalnu pārgājieni tuvāk mājām.',
        image: 'https://picsum.photos/seed/tatra/600/400',
      },
      {
        id: '7',
        title: 'Grieķijas Meteora un Olimps',
        date: '2025. gada maijs',
        season: 'pavasaris',
        description: 'Pārgājieni starp klosteriem un sengrieķu dievu kalnu.',
        image: 'https://picsum.photos/seed/greece/600/400',
      },
      {
        id: '8',
        title: 'Pireneji – Spānija un Francija',
        date: '2025. gada jūlijs',
        season: 'vasara',
        description: 'Augstie Pireneju kalni, klusums un daba.',
        image: 'https://picsum.photos/seed/pyrenees/600/400',
      },
      {
        id: '9',
        title: 'Skotijas Highlands',
        date: '2025. gada jūnijs',
        season: 'vasara',
        description: 'Miglas kalni, ezeri un mistiska atmosfēra.',
        image: 'https://picsum.photos/seed/scotland/600/400',
      },
    ]
  }),
})
