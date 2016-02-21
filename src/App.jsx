import React from "react";
import ShopHeader from "./ShopHeader"; 
import ShopList from "./ShopList";
import store from "./store";
import { sortListName, sortListPrice } from "./actionCreators/shopActionCreators";

export default class App extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = store.getState();
  	console.warn(store.getState());
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(::this.onChange);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onChange() {
    this.setState(store.getState());
  }

  handleFilter(text) {	
  	// const foundProduct = this.products.filter(item => {
  	// 	return item.nazwa.match(new RegExp(text, 'g'));	
  	// });
  	// //console.warn(foundProduct.length);
  	// this.setState({products: foundProduct.length ? foundProduct : this.products});
  }

  handleSort(column) {
  	//console.warn(column);
  	if (column === "nazwa") {
  		store.dispatch(sortListName());
  	}
  	if (column === "cena") {
  		store.dispatch(sortListPrice());
  	}
  }

  render() {
    return (
    	<div>
    		<ShopHeader />
      		<ShopList items={this.state.products} filter={::this.handleFilter} sort={::this.handleSort} />
      	</div>	
    );
  }
}
