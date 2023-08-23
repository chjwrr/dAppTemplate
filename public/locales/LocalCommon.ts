import enJson from './en.json'
import ptJson from './pt.json'
import frJson from './fr.json'
import ruJson from './ru.json'
import jaJson from './ja.json'
import koJson from './ko.json'
import zhtwJson from './zhtw.json'

enum LanguageType {
  en = 'en',
  pt = 'pt',
  fr = 'fr',
  ru = 'ru',
  ja = 'ja',
  ko = 'ko',
  zhtw = 'zhtw',
}

const LocalJson = {
  [LanguageType.en]: enJson,
  [LanguageType.pt]: ptJson,
  [LanguageType.fr]: frJson,
  [LanguageType.ru]: ruJson,
  [LanguageType.ja]: jaJson,
  [LanguageType.ko]: koJson,
  [LanguageType.zhtw]: zhtwJson,
}

const Languages = [
  {
    language: LanguageType.en,
    title: 'English',
    icon: '/images/icon_lan_en.png',
    key: LanguageType.en,
  },
  {
    language: LanguageType.pt,
    title: 'Português',
    icon: '/images/icon_lan_pt.png',
    key: LanguageType.pt,
  },
  {
    language: LanguageType.fr,
    title: 'Français',
    icon: '/images/icon_lan_fr.png',
    key: LanguageType.fr,
  },
  {
    language: LanguageType.ru,
    title: 'русский язык',
    icon: '/images/icon_lan_ru.png',
    key: LanguageType.ru,
  },
  {
    language: LanguageType.ja,
    title: '日本語',
    icon: '/images/icon_lan_ja.png',
    key: LanguageType.ja,
  },
  {
    language: LanguageType.ko,
    title: '한국어',
    icon: '/images/icon_lan_ko.png',
    key: LanguageType.ko,
  },
  {
    language: LanguageType.zhtw,
    title: '繁體中文',
    icon: '/images/icon_lan_zhtw.png',
    key: LanguageType.zhtw,
  },
]
export { LanguageType, LocalJson, Languages }
