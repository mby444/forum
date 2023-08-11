import './styles/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Detail from './pages/detail/Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="profile">
            <Route path=":profileId" element={<Profile />} />
          </Route>
          <Route path="detail">
            <Route path=":detailId" element={<Detail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
