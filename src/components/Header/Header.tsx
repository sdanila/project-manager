import React, { useState } from 'react';
import block from 'bem-cn';

import { ReactComponent as HeaderIcon } from 'shared/img/HeaderIcon.svg';
import { ReactComponent as BackSVG } from 'shared/img/Back.svg';

import './Header.scss';

const navigationItems = [
  {
    title: 'Просмотр',
  },
  {
    title: 'Управление',
  },
];

const b = block('header');

export default function Header() {
  const [activeItem, setActiveItem] = useState<string>(navigationItems[0].title)

  const navItems = navigationItems.map(
    (item) =>
      <div
        key={item.title}
        className={b('nav-item', { active: item.title === activeItem })}>
        {item.title}
      </div>
  );

  return (
    <div className={b()}>
      <HeaderIcon className={b('structure-icon')} />
      <BackSVG className={b('back-icon')} />
      <div className={b('nav-items')}>{navItems}</div>
    </div>
  );
}