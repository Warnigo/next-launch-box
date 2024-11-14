import { type FC } from 'react'
import { type Metadata } from 'next'

import { Home } from '@features/home'

export const metadata: Metadata = {
  title: 'home',
  description: 'home description',
}

const HomePage: FC = () => <Home />

export default HomePage
