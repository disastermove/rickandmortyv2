import Home from '../components/Home';
import Episodes from '../pages/Episodes';
import Locations from '../pages/Locations';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LocationsDescription from '../pages/LocationsDescription';
import EpisodesDescription from '../pages/EpisodesDescription';
import CharacterDetails from '../pages/CharacterDetails';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/characters/" element={<Home />} />
            <Route path="/episodes/" element={<Episodes />} />
            <Route path="/locations/" element={<Locations />} />
            <Route path="/characters/:id" element={<CharacterDetails />} />
            <Route path="/episodes/:id" element={<EpisodesDescription />} />
            <Route path="/locations/:id" element={<LocationsDescription />} />
            <Route path="*" element={<div>404</div>} />
        </Routes>
    </BrowserRouter>
);

export default Router;