import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Settings } from './components/Settings/Settings';
import { Music } from './components/Music/Music';
import { News } from './components/News/News';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';

function App() {
      return (
            <BrowserRouter>
                  <div className='App-wrapper'>
                        <Header />
                        <Navbar />
                        <Footer />
                        <div className='app-wrapper-content'>
                              <Routes>
                                    <Route
                                          exact
                                          path='/profile/*'
                                          element={<Profile />}
                                    ></Route>
                                    <Route
                                          exact
                                          path='/dialogs/*'
                                          element={<Dialogs />}
                                    ></Route>
                                    <Route
                                          exact
                                          path='/news/*'
                                          element={<News />}
                                    ></Route>
                                    <Route
                                          exact
                                          path='/music/*'
                                          element={<Music />}
                                    ></Route>
                                    <Route
                                          exact
                                          path='/settings/*'
                                          element={<Settings />}
                                    ></Route>
                              </Routes>
                        </div>
                  </div>
            </BrowserRouter>
      );
}

export default App;
