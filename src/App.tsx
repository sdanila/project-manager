import React from 'react';
import block from 'bem-cn';
import { useSelector, shallowEqual } from 'react-redux';
import { useAppDispatch } from 'index';

import { getAllList } from 'features/workPlane/actions';
import { selectWorkPlaneListData } from 'features/workPlane/selectors';

import Header from 'components/Header';
import MainMenu from 'components/MainMenu';

import './App.scss';

const b = block('app');

function App() {
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
        <MainMenu />
        <div className={b('container')}>
          <div className={b('header-wrapper')}>
            {/* <Header /> */}
          </div>
          <main className={b('main')}>
            <div className={b('main-wrapper')}>
            </div>
          </main>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
