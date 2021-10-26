/*
 *
 *
 */
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Error404 from './components/pages/Error404';
import HomePage from './components/pages/HomePage';

export default function App() {
  return (
    <div className='app'>
      <header className='mb-4 shadow'>
        <Navbar />
      </header>

      <main className='mx-4 mb-4'>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='*'>
            <Error404 />
          </Route>
        </Switch>
      </main>

      <footer className='navbar bg-light fixed-bottom d-flex justify-content-between border-top user-select-none'>
        <div className='d-inline-flex align-content-start mx-1 mx-md-4 fst-em'>
          keep it on the DL...
        </div>
        <div className='d-inline-flex align-content-end mx-1 mx-md-4 fst-em'>
          lowkey technologies
        </div>
      </footer>
    </div>
  );
}
