import React from "react";
import ReactDom from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://play-lh.googleusercontent.com/vAHBhAstSB8vnMz23pwXexTQrL7Wpv039d9ojVHHtej8ZypqR6nFPAOiyjnUBzkL6B4"
          alt="Rajesh logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="data:image/jpeg;base64,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"
        alt=""
      />
      <h3>Meghana Foods</h3>
      <h4>Biriyani, North Indian , Asian</h4>
      <h4>4.4 stars</h4>
      <h4>38 min</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
