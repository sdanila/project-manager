import React from 'react';
import block from 'bem-cn';
import { useSelector, shallowEqual } from 'react-redux';

import { selectWorkPlaneListData, selectWorkPlaneListComm } from 'features/workPlane/selectors';

import './ConstructInstallPage.scss';

const b = block('construction-installation');

export default function ConstructInstallPage() {
  const planeList = useSelector(selectWorkPlaneListData, shallowEqual);
  const planeListComm = useSelector(selectWorkPlaneListComm, shallowEqual);

  console.log(planeList, planeListComm);


  return (
    <div className={b()} />
  );
}