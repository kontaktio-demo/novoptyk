export const site = {
  name: 'NOVOOPTYK',
  legalName: 'NOVOOPTYK Emilia Sulmowska',
  tagline: 'Salon optyczny - Łódź Nowosolna',
  description:
    'NOVOOPTYK - salon optyczny w Łodzi-Nowosolnej. Bezpłatne badanie wzroku, profesjonalny dobór opraw (Karl Lagerfeld, John Richmond) i soczewek progresywnych Varilux XR. Jesteśmy Essilor Expert Ambassador.',
  url: 'https://novooptyk.pl',
  phone: '+48 539 705 708',
  phoneRaw: '+48539705708',
  phoneShort: '539 705 708',
  email: 'novooptyk@gmail.com',
  address: {
    street: 'ul. Jugosłowiańska 1A',
    postal: '92-720',
    city: 'Łódź',
    district: 'Nowosolna',
  },
  social: {
    facebook: 'https://www.facebook.com/Novooptyk',
    instagram: 'https://www.instagram.com/novooptyk/',
  },
  hours: [
    { days: 'Poniedziałek - Piątek', open: '10:00 - 18:00' },
    { days: 'Sobota', open: '10:00 - 14:00' },
    { days: 'Niedziela', open: 'nieczynne' },
  ],
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=NOVOOPTYK+ul.+Jugos%C5%82owia%C5%84ska+1A+%C5%81%C3%B3d%C5%BA',
  mapEmbed:
    'https://www.google.com/maps?q=ul.+Jugos%C5%82owia%C5%84ska+1A,+92-720+%C5%81%C3%B3d%C5%BA&output=embed',
};

export const nav = [
  { href: '/', label: 'Strona główna' },
  { href: '/oferta', label: 'Oferta' },
  { href: '/o-salonie', label: 'O salonie' },
  { href: '/galeria', label: 'Galeria' },
  { href: '/faq', label: 'FAQ' },
  { href: '/kontakt', label: 'Kontakt' },
];

export const heroIntro = {
  eyebrow: 'Salon optyczny - Łódź Nowosolna',
  headline: 'Twój wzrok',
  headlineAccent: 'w dobrych',
  headlineEnd: 'rękach.',
  lead:
    'Bezpłatne badanie wzroku, profesjonalny dobór opraw i soczewki progresywne Varilux XR. Jesteśmy Essilor Expert Ambassador.',
  image:
    'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=1600&q=80',
  imageAlt: 'Wnętrze salonu optycznego NOVOOPTYK',
};

export const bandCta = {
  eyebrow: 'Pokochaj wyraźne spojrzenie',
  headline: 'Chcesz widzieć',
  headlineAccent: 'więcej?',
  body:
    'Umów bezpłatne badanie wzroku w NOVOOPTYK. Sprawdzimy ostrość widzenia, dobierzemy oprawę pod kształt twarzy i zaproponujemy najlepsze soczewki - wszystko w jednym salonie.',
};

export const salonInfo = {
  eyebrow: 'Twój salon optyczny',
  headline: 'NOVOOPTYK',
  headlineAccent: 'w Łodzi-Nowosolnej',
  body:
    'Salon optyczny prowadzony z pasją. W jednym miejscu znajdziesz badanie wzroku, modne oprawy największych projektantów oraz soczewki najwyższej klasy. Zapraszamy także klientów spoza Łodzi - bezpłatny parking pod salonem.',
  image:
    'https://images.unsplash.com/photo-1556015048-4d3aa10df74c?auto=format&fit=crop&w=1600&q=80',
  imageAlt: 'Oprawy okularowe na ekspozycji w salonie NOVOOPTYK',
  points: [
    {
      title: 'Nowoczesne badania wzroku',
      desc: 'Profesjonalna wieża pomiarowa, doświadczony zespół. Badanie bezpłatne w cenie okularów.',
    },
    {
      title: 'Duży wybór opraw',
      desc: 'Klasyka i najnowsze trendy - Karl Lagerfeld, John Richmond i wiele innych marek.',
    },
    {
      title: 'Stylowe oprawki dla całej rodziny',
      desc: 'Dla dorosłych, młodzieży i dzieci. Strefa NOVOKIDS - kolorowy raj okularowy.',
    },
    {
      title: 'Indywidualne dopasowanie soczewek',
      desc: 'Soczewki Essilor i progresywne Varilux XR PRO. Jesteśmy Essilor Expert Ambassador.',
    },
  ],
};

export const solutions = {
  eyebrow: 'Nasze rozwiązania',
  headline: 'Sprawdź, co możemy',
  headlineAccent: 'dla Ciebie zrobić',
  body:
    'W NOVOOPTYK znajdziesz wszystko, czego potrzebują Twoje oczy - od bezpłatnego badania wzroku po profesjonalnie dopasowane okulary korekcyjne, przeciwsłoneczne i progresywne.',
  cards: [
    {
      title: 'Okulary',
      titleAccent: 'korekcyjne',
      desc: 'Klasyka i najnowsze trendy - m.in. Karl Lagerfeld i John Richmond. Pomoc stylisty.',
      image:
        'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=900&q=80',
      href: '/oferta#korekcyjne',
    },
    {
      title: 'Okulary',
      titleAccent: 'przeciwsłoneczne',
      desc: 'Damskie, męskie i dziecięce. Z polaryzacją i pełną ochroną UV 400.',
      image:
        'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=900&q=80',
      href: '/oferta#sloneczne',
    },
    {
      title: 'Soczewki',
      titleAccent: 'progresywne',
      desc: 'Varilux XR PRO - najlepsza soczewka progresywna z 49% większym polem widzenia.',
      image:
        'https://images.unsplash.com/photo-1582142306909-195724d33ffc?auto=format&fit=crop&w=900&q=80',
      href: '/oferta#progresywne',
    },
    {
      title: 'Okulary',
      titleAccent: 'do pracy',
      desc: 'Soczewki biurowe i relaksacyjne - komfort dla osób pracujących z bliska.',
      image:
        'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80',
      href: '/oferta#biurowe',
    },
    {
      title: 'Okulary',
      titleAccent: 'dla kierowców',
      desc: 'Lepszy kontrast, redukcja olśnień. Bezpieczniejsza jazda dniem i nocą.',
      image:
        'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=900&q=80',
      href: '/oferta#kierowcy',
    },
    {
      title: 'Okulary',
      titleAccent: 'do komputera',
      desc: 'Filtr światła niebieskiego, redukcja zmęczenia oczu przy długiej pracy z ekranem.',
      image:
        'https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=900&q=80',
      href: '/oferta#komputer',
    },
    {
      title: 'Okulary',
      titleAccent: 'do czytania',
      desc: 'Lekkie, eleganckie. Wygoda przy pracy z dokumentami, książką, telefonem.',
      image:
        'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=900&q=80',
      href: '/oferta#czytanie',
    },
    {
      title: 'NOVOKIDS',
      titleAccent: 'dla dzieci',
      desc: 'Kolorowy raj okularowy. Lekkie, wytrzymałe oprawy w ulubionych kolorach.',
      image:
        'https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&w=900&q=80',
      href: '/oferta#novokids',
    },
    {
      title: 'Soczewki',
      titleAccent: 'kontaktowe',
      desc: 'Dobór soczewek kontaktowych i akcesoriów do pielęgnacji.',
      image:
        'https://images.unsplash.com/photo-1609902726285-00668009f004?auto=format&fit=crop&w=900&q=80',
      href: '/oferta#kontaktowe',
    },
    {
      title: 'Bezpłatne',
      titleAccent: 'badanie wzroku',
      desc: '20-30 minut na profesjonalnej wieży pomiarowej. W cenie okularów.',
      image:
        'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=900&q=80',
      href: '/oferta#badanie',
    },
  ],
};

export const brands = {
  eyebrow: 'Szeroki asortyment',
  headline: 'Poznaj',
  headlineAccent: 'marki',
  body:
    'Współpracujemy ze sprawdzonymi producentami opraw i soczewek. W naszej ofercie znajdziesz między innymi:',
  list: [
    { name: 'Karl Lagerfeld' },
    { name: 'John Richmond' },
    { name: 'Essilor' },
    { name: 'Varilux XR PRO' },
    { name: 'Transitions' },
    { name: 'NOVOKIDS' },
  ],
};

export const testimonials = {
  eyebrow: 'Opinie klientów',
  headline: 'Zaufaj naszym',
  headlineAccent: 'specjalistom',
  items: [
    {
      quote:
        'Gorąco polecam! Bardzo duży wybór oprawek, badanie na miejscu, a zespół naprawdę wie, co robi. Wyszłam z idealnymi okularami.',
      author: 'Justyna K.',
    },
    {
      quote:
        'Profesjonalne badanie wzroku i fantastyczna pomoc w doborze opraw. Pierwsze okulary z progresją i nie żałuję - widzę świetnie.',
      author: 'Marek S.',
    },
    {
      quote:
        'Świetna strefa dla dzieci. Mój syn sam wybrał oprawki, a obsługa zadbała, żeby idealnie pasowały. Polecamy całą rodziną.',
      author: 'Anna i Tomasz',
    },
  ],
};

export const finalCta = {
  eyebrow: 'Zarezerwuj wizytę',
  headline: 'Pora na nowe',
  headlineAccent: 'okulary?',
  body:
    'Umów bezpłatne badanie wzroku, przyjdź obejrzeć oprawy lub po prostu zapytaj o szczegóły. Odpowiadamy zwykle tego samego dnia roboczego.',
  image:
    'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=1600&q=80',
  imageAlt: 'Profesjonalne badanie wzroku w NOVOOPTYK',
};

export const faqs = [
  {
    q: 'Czy badanie wzroku jest płatne?',
    a: 'Badanie wzroku w NOVOOPTYK jest bezpłatne w cenie okularów. Trwa zazwyczaj 20-30 minut i odbywa się na profesjonalnej wieży pomiarowej.',
  },
  {
    q: 'Czy trzeba się umawiać na badanie?',
    a: 'Tak, prosimy o wcześniejsze umówienie wizyty - telefonicznie pod numerem 539 705 708 lub e-mailem. Dzięki temu unikniesz oczekiwania.',
  },
  {
    q: 'Jakie marki opraw są dostępne?',
    a: 'W stałej ofercie mamy m.in. Karl Lagerfeld i John Richmond, a także wiele innych marek dla kobiet, mężczyzn i dzieci. Asortyment jest na bieżąco aktualizowany.',
  },
  {
    q: 'Czy oferujecie raty?',
    a: 'Tak, możliwy jest zakup okularów na raty. Szczegóły omawiamy podczas wizyty w salonie.',
  },
  {
    q: 'Czy można u Was zaparkować?',
    a: 'Tak - bezpłatny parking znajduje się tuż przy salonie. Zapraszamy także klientów spoza Łodzi.',
  },
  {
    q: 'Co to jest Varilux XR PRO?',
    a: 'Varilux XR PRO to najnowsza generacja soczewek progresywnych Essilor - z o 49% większym polem widzenia w porównaniu do poprzednich generacji. Polecamy je osobom, którym dotychczasowe okulary progresywne nie wystarczały.',
  },
  {
    q: 'Czy macie strefę dla dzieci?',
    a: 'Tak, prowadzimy dedykowaną strefę NOVOKIDS - z kolorowymi, lekkimi i wytrzymałymi oprawkami dla najmłodszych oraz przyjazną atmosferą wizyty.',
  },
];
