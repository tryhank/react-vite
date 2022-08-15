import { i18n } from '@lingui/core'
import { t } from '@lingui/macro'
import { dynamicActivate } from '@/utils/locale'
import styles from './index.module.scss'

export default () => {
  const toggleLocales = () => {
    const locales = ['zh', 'en']
    const locale = locales[(locales.indexOf(i18n.locale) + 1) % locales.length]
    dynamicActivate(locale)
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>{t`Hello World`}</div>
      <button onClick={() => toggleLocales()}>{t`Change Language`}</button>
    </div>
  )
}
