import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Locations from '../pages/Locations';
import LocationsDescription from '../pages/LocationsDescription';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/locations/" element={<Locations />} />
            <Route path="/locations/:id" element={<LocationsDescription />} />
            <Route path="*" element={<div>404</div>} />
        </Routes>
    </BrowserRouter>
);

export default Router;