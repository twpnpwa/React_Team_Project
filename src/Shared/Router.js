import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SY />} />
                <Route path="/" element={<JY />} />
                <Route path="/" element={<SJ />} />
                <Route path="/" element={<HB />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;