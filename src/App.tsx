import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.scss';
import { Suspense, lazy } from 'react';

const PageA = lazy(() => import('@/page/PageA'));
const PageB = lazy(() => import('@/page/PageB'));
const PageC = lazy(() => import('@/page/PageC'));

const App = () => {
  return (
    <>
      <BrowserRouter basename="/test-webpack-react">
        <Link to={'/'}>Page A</Link>
        <Routes>
          <Route path='/' element={<Suspense fallback={null}><PageA /></Suspense>}></Route>
          <Route path='/b' element={<Suspense fallback={null}><PageB /></Suspense>}></Route>
          <Route path='/c' element={<Suspense fallback={null}><PageC /></Suspense>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
