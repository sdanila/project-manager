import React from 'react';
import block from 'bem-cn';
import { useSelector, shallowEqual } from 'react-redux';
import { useAppDispatch } from 'index';

import { getAllList } from 'features/workPlane/actions';
import { selectWorkPlaneListData } from 'features/workPlane/selectors';

import Header from 'components/Header';
import MainMenu from 'components/MainMenu';

import './App.scss';
import ContentTitle from 'components/ContentTitle';

const b = block('app');

interface IAppProps {
  children: JSX.Element
}

function App({ children }: IAppProps) {
  const dispatch = useAppDispatch();
  const allList = useSelector(selectWorkPlaneListData, shallowEqual);

  console.log(allList);

  React.useEffect(() => {
    dispatch(getAllList())
  }, [])

  return (
    <div className={b()}>
      <div className={b('wrapper')}>
        <Header />
        <div className={b('container')}>
          <MainMenu />
          <main className={b('main')}>
            <div className={b('main-top')}>
              <ContentTitle />
            </div>
            <div className={b('main-content')}>{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
