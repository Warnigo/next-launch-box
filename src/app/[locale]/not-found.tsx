import { type FC } from 'react'
import { useTranslations } from 'next-intl'

const NotFoundPage: FC = () => {
  const t = useTranslations('HomePage')
  return <h1>{t('title')}</h1>
}

export default NotFoundPage
