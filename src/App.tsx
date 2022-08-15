import { Suspense } from 'react'
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { en, zh } from 'make-plural/plurals'
import { dynamicActivate } from './utils/locale'
import HelloWorld from './views/HelloWorld'
import Login from './views/Login'

i18n.loadLocaleData({
  zh: { plurals: zh },
  en: { plurals: en }
})

function App() {
  useEffect(() => {
    dynamicActivate('en')
  }, [])
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <I18nProvider i18n={i18n}>
        <Routes>
          <Route path="/" element={<HelloWorld />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </I18nProvider>
    </Suspense>
  )
}

export default App
