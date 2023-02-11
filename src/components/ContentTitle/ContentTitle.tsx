import React, { useMemo } from 'react';
import block from 'bem-cn';
import { useLocation } from 'react-router-dom';

import { menuItems } from 'components/MainMenu'

import './ContentTitle.scss';

const b = block('content-title');

export default function ContentTitle() {
  const location = useLocation();

  const item = useMemo(
    () =>
      menuItems.find((item) => location.pathname === item.route)
    , [location.pathname]
  );

  const title = useMemo(
    () =>
      item?.contentTitle || item?.title || '...'
    , [item]
  );

  return (
    <div className={b()}>{title}</div>
  )
}