import React from "react";
import "./shopList.css"

export default class ShopList extends React.Component {
  static propTypes = {
    filter: React.PropTypes.func.isRequired,
    sort: React.PropTypes.func.isRequired,
    items: React.PropTypes.arrayOf(
    	React.PropTypes.shape({
	    	nazwa: React.PropTypes.string,
	    	cena: React.PropTypes.string,
	    	opis: React.PropTypes.string
    	})
    )
  };

  handleChange(e) {
  	this.props.filter(e.target.value);
  }	

  handleSortName() {
  	this.props.sort("nazwa");		
  }

  handleSortPrice() {
  	this.props.sort("cena");		
  }

  render() {
    return (
    	<div className="ShopList">
	      <table>
	      	<thead>
	      		<tr>
	      			<th onClick={::this.handleSortName}>nazwa</th>
	      			<th onClick={::this.handleSortPrice}>cena</th>
	      			<th>opis</th>
	      		</tr>
	      	</thead>
	      	<tbody>
	      		{this.props.items.map(item => 
	      				<tr key={item.id}>
			      			<td>{item.nazwa}</td>
			      			<td>{item.cena}</td>
			      			<td>{item.opis}</td>	
		      			</tr>	
	      			)}
	      	</tbody>
	      </table>
	      <input type="text" placeholder="serach..." onChange={::this.handleChange}/>
      	</div>
    );
  }
}
