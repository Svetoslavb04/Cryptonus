import { Routes, Route } from 'react-router-dom'

import Home from '../Pages/Home/Home'

const RoutesList: React.FC = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
        </Routes>
    )
}

export default RoutesList