
import { Route, Routes } from 'react-router-dom';
import SignIn from '../pages/SignIn';

const PetShareRoutes = () => {
    return (
        <Routes>
            <Route path='/*' element={<SignIn />} />
        </Routes>
    );
};

export default PetShareRoutes;