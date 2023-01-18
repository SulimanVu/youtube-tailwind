import CardBlock from "./components/CardBlock/CardBlock";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <CardBlock />
      </div>
      <Footer />
    </>
  );
};

export default App;
