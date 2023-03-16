import Header from './components/Header';
import NavMenu from './components/NavMenu';
import Quiz from './pages/Quiz';
import Footer from './components/Footer';

function App() {
    return (
        <div className="wrapper">
            <div className="app">
                <NavMenu />
                <div className="main">
                    <Header />
                    <Quiz />
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default App;
