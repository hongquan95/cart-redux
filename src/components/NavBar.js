/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function NavBar() {
    return (
        <ul id="slide-out" className="side-nav hidden custom-scrollbar sn-bg-2 ps ps--theme_default" data-ps-id="c27390a3-9efc-e0d8-197a-ab96d73a156a">
            <li>
                <div className="logo-wrapper waves-light waves-effect waves-light">
                    <a>
                        <img src="http://mdbootstrap.com/img/logo/mdb-transparent.png" className="img-fluid flex-center" />
                    </a>
                </div>
            </li>
            <li>
                <ul className="social">
                    <li>
                        <a className="icons-sm fb-ic">
                            <i className="fa fa-facebook"> </i>
                        </a>
                    </li>
                    <li>
                        <a className="icons-sm pin-ic">
                            <i className="fa fa-pinterest"> </i>
                        </a>
                    </li>
                    <li>
                        <a className="icons-sm gplus-ic">
                            <i className="fa fa-google-plus"> </i>
                        </a>
                    </li>
                    <li>
                        <a className="icons-sm tw-ic">
                            <i className="fa fa-twitter"> </i>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <form className="search-form" role="search">
                    <div className="form-group waves-light waves-effect waves-light">
                        <input type="text" className="form-control" placeholder="Search" />
                    </div>
                </form>
            </li>
            <li>
                <ul className="collapsible collapsible-accordion">
                    <li>
                        <a className="collapsible-header waves-effect arrow-r">
                            <i className="fa fa-shopping-bag" /> Product Page
                                    <i className="fa fa-angle-down rotate-icon" />
                        </a>
                        <div className="collapsible-body">
                            <ul>
                                <li>
                                    <a href="product.html" className="waves-effect">Product Page V.1</a>
                                </li>
                                <li>
                                    <a href="product-page.html" className="waves-effect">Product Page V.2</a>
                                </li>
                                <li>
                                    <a href="product-page-4.html" className="waves-effect">Product Page V.3</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="active">
                        <a className="collapsible-header waves-effect arrow-r active">
                            <i className="fa fa-shopping-cart" /> Cart Pages
                                    <i className="fa fa-angle-down rotate-icon" />
                        </a>
                        <div className="collapsible-body">
                            <ul>
                                <li>
                                    <a href="cart.html" className="waves-effect">Page with shopping cart</a>
                                </li>
                                <li>
                                    <a href="contact.html" className="waves-effect">Page with contact form</a>
                                </li>
                                <li>
                                    <a href="contact-2.html" className="waves-effect">Page with contact form V.2</a>
                                </li>
                                <li>
                                    <a href="login.html" className="waves-effect">Page with sign in form</a>
                                </li>
                                <li>
                                    <a href="terms.html" className="waves-effect">Page with 'terms of use'</a>
                                </li>
                                <li>
                                    <a href="faq.html" className="waves-effect">Page with 'FAQ'</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a className="collapsible-header waves-effect arrow-r">
                            <i className="fa fa-dashboard" /> Homepages
              <i className="fa fa-angle-down rotate-icon" />
                        </a>
                        <div className="collapsible-body">
                            <ul>
                                <li>
                                    <a href="home-page.html" className="waves-effect">Ecommerce homepage default</a>
                                </li>
                                <li>
                                    <a href="home-page-2.html" className="waves-effect">Ecommerce homepage full width</a>
                                </li>
                                <li>
                                    <a href="home-page-3-carousel.html" className="waves-effect">Ecommerce homepage V.3 Carousel</a>
                                </li>
                                <li>
                                    <a href="home-page-3-full-page-carousel.html" className="waves-effect">Ecommerce homepage V.3 Full Page Carousel</a>
                                </li>
                                <li>
                                    <a href="home-page-3-half-page-carousel.html" className="waves-effect">Ecommerce homepage V.3 Half Page Carousel</a>
                                </li>
                                <li>
                                    <a href="home-page-4.html" className="waves-effect">Ecommerce homepage V.4</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a className="collapsible-header waves-effect arrow-r">
                            <i className="fa fa-desktop" /> Post Pages
                                    <i className="fa fa-angle-down rotate-icon" />
                        </a>
                        <div className="collapsible-body">
                            <ul>
                                <li>
                                    <a href="post.html" className="waves-effect">Page with column on the right</a>
                                </li>
                                <li>
                                    <a href="blog-post-left-column.html" className="waves-effect">Page with newsletter on the left</a>
                                </li>
                                <li>
                                    <a href="blog-post.html" className="waves-effect">Page with newsletter on the right</a>
                                </li>
                                <li>
                                    <a href="blog-post-full-width.html" className="waves-effect">Full width page with logged user</a>
                                </li>
                                <li>
                                    <a href="blog-post-full-width%20not%20logged%20in%20user.html" className="waves-effect">Full width page with not logged user</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a className="collapsible-header waves-effect arrow-r">
                            <i className="fa fa-diamond" /> Category Pages
                                    <i className="fa fa-angle-down rotate-icon" />
                        </a>
                        <div className="collapsible-body">
                            <ul>
                                <li>
                                    <a href="category-list-left-column.html" className="waves-effect">Category list with left column</a>
                                </li>
                                <li>
                                    <a href="category-list-right-column.html" className="waves-effect">Category list with right column</a>
                                </li>
                                <li>
                                    <a href="category-grid-left-column.html" className="waves-effect">Category grid with left column</a>
                                </li>
                                <li>
                                    <a href="category-right-column.html" className="waves-effect">Category grid with right column</a>
                                </li>
                                <li>
                                    <a href="category-grid-left-column-carousel.html" className="waves-effect">Category grid with left column carousel</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </li>
            <div className="sidenav-bg mask-strong" />
            <div className="ps__scrollbar-x-rail">
                <div className="ps__scrollbar-x" tabIndex={0} />
            </div>
            <div className="ps__scrollbar-y-rail">
                <div className="ps__scrollbar-y" tabIndex={0} />
            </div>
        </ul>
    );
}

export default NavBar;