import Header from './components/Header';
import NavMenu from './components/NavMenu';
import Hero from './pages/Hero';
import Footer from './components/Footer';

function App() {
    return (
        <di className="wrapper">
            <div className="app">
                <NavMenu />
                <div className="main">
                    <Header />
                    <Hero />
                    <Footer />
                </div>
            </div>
        </di>
    );
}

export default App;
