import { useState } from 'react';
import Header from './Header';
import NavMenu from './NavMenu';
import Hero from '../pages/Hero';
import Footer from './Footer';

function App() {
    let [active, setActive] = useState(false);

    //const handleClick = (event, newValue) => {
    //    setShowNav(newValue);
    //};


    return (
        <div className='wrapper'>
            <div className="app">
                <NavMenu active={active} setActive={setActive} />
                <div className='main'>
                    <Header />
                    <Hero />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
