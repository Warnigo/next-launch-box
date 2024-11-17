import { type FC } from 'react'
import { type Metadata } from 'next'
import { useTranslations } from 'next-intl'

export const metadata: Metadata = {
  title: 'home',
  description: 'home description',
}

const HomePage: FC = () => {
  const t = useTranslations('HomePage')

  return (
    <div>
      <p>{t('title')}</p>
    </div>
  )
}
export default HomePage
