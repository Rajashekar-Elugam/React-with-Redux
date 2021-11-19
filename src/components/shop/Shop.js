import React, { Component } from "react";
import { connect } from "react-redux";

import { buyLaptop, buyMobile, fetchUsers } from "../redux/actions";

import "./Shop.css";

class Shop extends Component {
  render() {
    const {
      numberOfLaptops,
      buyLaptop,
      numberOfMobiles,
      buyMobile,
      numberOfUsers,
      fetchUsers,
    } = this.props;
    return (
      <div>
        <h1 className="title"> Welcome to VShop </h1>
        <div className="items">
          <div className="item">
            <p> Asus Notebook </p>
            <p> Available Laptops: {numberOfLaptops} </p>
            <button onClick={buyLaptop}> Buy Laptop </button>
          </div>
          <div className="item">
            <p> Techno Spark </p>
            <p> Available Mobiles: {numberOfMobiles} </p>
            <button onClick={buyMobile}> Buy Mobile </button>
          </div>
          <div className="item">
            <p>Get Users data</p>
            <p>Count: {numberOfUsers.length}</p>
            <button onClick={fetchUsers}>Call API</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    numberOfLaptops: state.Laptops.numberOfLaptops,
    numberOfMobiles: state.Mobiles.numberOfMobiles,
    numberOfUsers: state.Users.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyLaptop: () => dispatch(buyLaptop()),
    buyMobile: () => dispatch(buyMobile()),
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
