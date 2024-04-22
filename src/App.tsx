import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';
import { lazy } from 'react';

const PageA = lazy(() => import('@/page/PageA'));
const PageB = lazy(() => import('@/page/PageB'));
const PageC = lazy(() => import('@/page/PageC'));

const App = () => {
  return (
    <>
      <BrowserRouter basename="/test-webpack-react">
        <Routes>
          <Route path='/' element={<PageA />}></Route>
          <Route path='b' element={<PageB />}></Route>
          <Route path='c' element={<PageC />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
