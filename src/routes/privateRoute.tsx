
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Logged/Home';
import DonateType from '../pages/Logged/DonateType';
import DonateAnimal from '../pages/Logged/DonateAnimal';
import DonateItem from '../pages/Logged/DonateItem';
import SelectedAnimal from '../pages/Logged/SelectedAnimal';

const PetSharePrivateRoutes = () => {
    return (
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/animal' element={<SelectedAnimal />} />
            <Route path='/DonateType' element={<DonateType />} />
            <Route path='/DonateAnimal' element={<DonateAnimal />} />
            <Route path='/DonateItem' element={<DonateItem />} />
            <Route path='*' element={<Navigate to='/home' />} />
        </Routes>
    );
};

export default PetSharePrivateRoutes;