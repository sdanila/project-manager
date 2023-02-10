import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { useAppDispatch } from 'index';

import { getAllList } from 'features/workPlane/actions';
import { selectWorkPlaneListData } from 'features/workPlane/selectors';

import './App.scss';

function App() {
  const dispatch = useAppDispatch();
  const allList = useSelector(selectWorkPlaneListData, shallowEqual);

  console.log(allList);

  React.useEffect(() => {
    dispatch(getAllList())
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
