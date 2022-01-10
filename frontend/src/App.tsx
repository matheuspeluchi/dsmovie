import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "components/Navbar";
import Listing from "pages/Listing/Index";
import Form from "pages/Form/Index";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
