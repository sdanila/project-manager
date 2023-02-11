
import React, { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import block from 'bem-cn';

import { ReactComponent as MenuIcon } from 'shared/img/MenuIcon.svg';
import { ReactComponent as ArrowSVG } from 'shared/img/Arrow.svg';

import { menuItems } from './index';

import './MainMenu.style.scss';

const b = block('main-menu');

export default function MainMenu() {
  const location = useLocation();
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(true);

  const items = useMemo(
    () =>
      menuItems
        .map((t) =>
          <div
            key={`${t.title}-${t.route}`}
            className={b('item', { active: t.route === location.pathname })}
          >
            <MenuIcon className={b('item-icon')} />
            <span className={b('item-top')}>{t.title}</span>
          </div>),
    [location.pathname],
  );

  return (
    <>
      <div className={b('curtains', { opened: isOpenMenu })} />
      <div className={b({ opened: isOpenMenu })}>
        <div className={b('toggle')}>
          <div className={b('title')}>
            <div className={b('title-first')}>Название проекта</div>
            <div className={b('title-second')}>Аббревиатура</div>
          </div>
          <ArrowSVG />
        </div>
        <div className={b('items')}>{items}</div>
      </div>
    </>
  );
};