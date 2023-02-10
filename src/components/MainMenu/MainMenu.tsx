
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import block from 'bem-cn';

import { ReactComponent as MenuIcon } from 'shared/img/MenuIcon.svg';
import { ReactComponent as ArrowSVG } from 'shared/img/Arrow.svg';

import './MainMenu.scss';

const menuItems = [
  { title: 'По объекту', route: '/lock' },
  { title: 'Объекты', route: '/lock' },
  { title: 'РД', route: '/lock' },
  { title: 'МТО', route: '/lock' },
  { title: 'СМР', route: '/some-route', notDisabled: true },
  { title: 'График', route: '/lock' },
  { title: 'МиМ', route: '/lock' },
  { title: 'Рабочие', route: '/lock' },
  { title: 'Как в положении', route: '/lock' },
  { title: 'Бюджет', route: '/lock' },
  { title: 'Финансирование', route: '/lock' },
  { title: 'Панорамы', route: '/lock' },
  { title: 'Камеры', route: '/lock' },
  { title: 'Поручения', route: '/lock' },
  { title: 'Контрагенты', route: '/lock' },
]

const b = block('main-menu');

export default function MainMenu() {
  const dispatch = useDispatch();
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(true)

  const items = useMemo(
    () =>
      menuItems
        .map((t) =>
          <div key={`${t.title}-${t.route}`} className={b('item')}>
            <MenuIcon className={b('item-icon')} />
            <span className={b('item-top')}>{t.title}</span>
          </div>),
    [],
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