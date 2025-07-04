import './App.css';
import './style.css';

import React from 'react';
const App = () => {
  return (
  <div className="Layout" style={{background: "#252836"}}>
    <div  className="sidebar" >
        <div className='Logo'>
          <img className="logoImg" src={require('./logo.jpg')}/>
        </div>
        <div id="menu">
            <button className="sidebarOption">
                <p>Home</p>  
            </button>
            <button className="sidebarOption">
                <p>Offers</p>
            </button>
            <button className="sidebarOption">
                <p>Items</p>
            </button>
            <button className="sidebarOption">
                <p>Cart</p>
            </button>
            <button className="sidebarOption">
                <p>Notifications</p>
            </button>
            <button className="sidebarOption">
                <p>Settings</p>
            </button>
        </div>
        <button className="sidebarOption">
            <p>Exit</p>
        </button>
    </div>
    <div className="middleLayout">
        <div className="topColumn">
            <div className="header">
                <div className="title">
                    <div>
                        <h1>Jaegar Resto</h1>
                    </div>
                </div>
                <div className="searchBar" >
                        <form>
                            <label htmlFor="search"></label>
                            <input type="text" id="search" name="search" placeholder='Search...'/>
                        </form>
                </div>
            </div>
            <div className="navbar">
                    <button className="CurrentnavButton">Hot Dishes</button>
                    <button className="navButton">Cold Dishes</button>
                    <button className="navButton">Soup</button>
                    <button className="navButton">Grill</button>
                    <button className="navButton">Appetizer</button>
                    <button className="navButton">Dessert</button>
                </div>
        </div>
        
        <div className="dishes">
            <h2 className='dishesTitle'>Choose Dishes</h2>
            <div className="dish">
                <img src={require("./seafood.jpg")} className="menuPic"/>
                <p className="dishName">Spicy Seasoned Seafood Noodles</p>
                <p className="price">$2.29</p>
                <p className="availability">20 bowls available</p>    
            </div>
            <div className="dish">
                <img src={require("./salted pasta.jpeg")} className="menuPic"/>
                <p className="dishName">Salted Pasta with Mushroom Sauce</p>
                <p className="price">$2.69</p>
                <p className="availability">11 bowls available</p>    
            </div>
            <div className="dish">
                <img src={require("./dumpling.jpeg")} className="menuPic"/>
                <p className="dishName">Beef Dumpling in Hot and Sour Soup</p>
                <p className="price">$2.99</p>
                <p className="availability">16 bowls available</p>    
            </div>
            <div className="dish">
                <img src={require("./spinach.jpg")} className="menuPic"/>
                <p className="dishName">Healthy Noodle with Spinach leaf</p>
                <p className="price">$3.29</p>
                <p className="availability">22 bowls available</p>    
            </div>
            <div className="dish">
                <img src={require("./fried rice.jpeg")} className="menuPic"/>
                <p className="dishName">Hot Spicy Fried Rice with Omlette</p>
                <p className="price">$3.49</p>
                <p className="availability">13 bowls available</p>    
            </div>
            <div className="dish">
                <img src={require("./omlette noodle.jpeg")} className="menuPic"/>
                <p className="dishName">Spicy Instant Noodle with Omlette</p>
                <p className="price">$3.59</p>
                <p className="availability">17 bowls available</p>    
            </div>
        </div>
    </div>
    <div className="rightLayout">
        <h2>Order #3245</h2>
        <div className="options">
            <button className='cartbutton'>Dine In</button>
            <button className='cartbutton'>To go</button>
            <button className='Currentcartbutton'>Delivery</button>
        </div>
        <div className="cartDetails">
            <div className="itemDetail">Item</div>
            <div className="qtyDetail">Qty</div>
            <div className="priceDetail">Price</div>
        </div>
        <hr/>
        <div className="cartItems">
            <div className="Item">
                <p className="cartItemName">Spicy Seasoned Seafood
                    $2.29</p>
                <p className="cartQuantity">2</p>
                <p className="itemTotal">$4.58</p>
            </div>
            <div className="noteBar">
                <form>
                    <label htmlFor="note">Order Note</label>
                    <input type="text" id="note" name="note"/>
                </form>
            </div>
            <div className="Item">
                <p className="cartItemName">Salted Pasta
                    $2.29</p>
                <p className="cartQuantity">2</p>
                <p className="itemTotal">$4.58</p>
            </div>
            <div className="noteBar">
                <form>
                    <label htmlFor="note">Order Note</label>
                    <input type="text" id="note" name="note"/>
                </form>
            </div>
            <div className="Item">
                <p className="cartItemName">Healthy Noodle
                    $2.29</p>
                <p className="cartQuantity">2</p>
                <p className="itemTotal">$4.58</p>
            </div>
            <div className="noteBar">
                <form>
                    <label htmlFor="note">Order Note</label>
                    <input type="text" id="note" name="note"/>
                </form>
            </div>
        </div>
        <div className="PaymentDetails">
            <p className="detail">Discount</p>
            <p className="amount">0$</p>
            <p className="detail">Sub Total</p>
            <p className="amount">$21.03</p>
        </div>
        <div className="SubmitButton">
            <form>
                <label htmlFor="submit"></label>
                <input type="button" id="submit" value="Continue to Payment"/>
            </form>
        </div>
    </div>
</div>
  );
};

export default App;

