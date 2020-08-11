/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TopNav from './TopNav';
import NavBar from './NavBar';
import ProductContainer from '../containers/ProductContainer';
import CartContainer from '../containers/CartContainer';
import MessageContainer from '../containers/MessageContainer';

function App() {
    return (
        <div>
            <header>
                <NavBar />
                <TopNav />
            </header>
            <main id="mainContainer">
                <div className="container">
                    <section className="section">
                        <Header />
                        <ProductContainer />
                    </section>
                    <MessageContainer />
                    <section className="section">
                        <CartContainer />
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
