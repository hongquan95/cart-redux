/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Message from './Message';
import Cart from './Cart';
import Footer from './Footer';
import TopNav from './TopNav';
import NavBar from './NavBar';

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
                        <ProductList />
                    </section>
                    <Message />
                    <section className="section">
                        <Cart />
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
