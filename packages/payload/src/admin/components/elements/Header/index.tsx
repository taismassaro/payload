import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import Account from '../../graphics/Account'
import { useConfig } from '../../utilities/Config'
import Localizer from '../Localizer'
import StepNav from '../StepNav'
import { NavToggler } from '../Nav/NavToggler'
import { Hamburger } from '../Hamburger'

import './index.scss'

const baseClass = 'app-header'

export const AppHeader: React.FC = (props) => {
  const { t } = useTranslation()

  const {
    routes: { admin: adminRoute },
  } = useConfig()

  return (
    <header className={[baseClass].filter(Boolean).join(' ')}>
      <div className={`${baseClass}__bg`} />
      <div className={`${baseClass}__content`}>
        <div className={`${baseClass}__wrapper`}>
          <NavToggler className={`${baseClass}__mobile-nav-toggler`}>
            <Hamburger />
          </NavToggler>
          <StepNav className={`${baseClass}__step-nav`} />
          <div className={`${baseClass}__controls`}>
            <Localizer className={`${baseClass}__localizer`} />
            <Link
              aria-label={t('authentication:account')}
              className={`${baseClass}__account`}
              to={`${adminRoute}/account`}
            >
              <Account />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}