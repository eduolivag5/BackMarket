import NavbarComponent from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ItemDetails from "./pages/ItemDetails";

export default function App() {
    return (
        <div>
            <NavbarComponent />
            <div className="max-w-6xl mx-auto py-10">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/details/:id" element={<ItemDetails />} />
                </Routes>
            </div>
        </div>
    )
}
