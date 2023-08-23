import { useCallback } from 'react';
import { useLanguage } from "@/Redux/setting";
import { LanguageType, LocalJson } from "@public/locales/LocalCommon";

export default function useTranslationLanguage(){
  const language:LanguageType = useLanguage()
  const languageJson:Record<string, string> = LocalJson[language]
  const t = useCallback(
    (key:string, params: Record<string, any> = {}) => {
      let value = languageJson[key]
      if (!key || !value) return key
      Object.keys(params).forEach((item:string) => {
        value = value.replace(new RegExp(`{${item}}`, 'g'), params[item])
      })
      return value
    },
    [language]
  )

  return { t, language}
}
