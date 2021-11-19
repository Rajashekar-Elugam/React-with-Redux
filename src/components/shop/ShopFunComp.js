import React from "react";
import { connect, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import { buyLaptop, buyMobile, fetchUsers } from "../redux/actions";

import "./Shop.css";

function ShopFunComp(props) {
  let numberOfLaptops = useSelector((state) => state.Laptops.numberOfLaptops);
  let numberOfMobiles = useSelector((state) => state.Mobiles.numberOfMobiles);
  let numberOfUsers = useSelector((state) => state.Users.users);
  return (
    <div>
      <h1 className="title">Wecome to VShop Functional Component</h1>
      <div className="items">
        <div className="item">
          <p>Asus Notebook</p>
          <p>Available Laptops: {numberOfLaptops}</p>
          <button onClick={props.buyLaptop}>Buy Laptop</button>
        </div>
        <div className="item">
          <p>Techno Spark</p>
          <p>Available Mobiles: {numberOfMobiles}</p>
          <button onClick={props.buyMobile}>Buy Mobile</button>
        </div>
        <div className="item">
          <p>Get Users data</p>
          <p>Count: {numberOfUsers.length}</p>
          <button onClick={props.fetchUsers}>Call API</button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      buyLaptop,
      buyMobile,
      fetchUsers,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(ShopFunComp);
