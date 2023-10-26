import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PersonList } from "./components/Lab3/PersonList/PersonList";
import 'bootstrap/dist/css/bootstrap.css';
import { PageWrapper } from "./hoc/PageWrapper";
import { Index } from "./components/Index/Index";
import { Calculator } from "./components/Lab3/Calculator/Calculator";
import { BookStore } from "./components/Lab4/BookStore";

function App() {
  return (
    <>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<PageWrapper />}>
            <Route index element={<Index />} />
            <Route path="scientists" element={<PersonList />} />
            <Route path="calc" element={<Calculator />} />
            <Route path="books" element={<BookStore />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
