/** @jsx React.DOM */

var React = require('react');

var List = React.createClass({

	wrapped: function(item){
		var Item = this.props.wrapper;

		return (
			<li key={ item.id }>
				<Item data={ item } />
			</li>
		);
	},

	render: function(){
		return (
			<ul>
				{ this.props.items.map(this.wrapped) }
			</ul>
		);
	}

});

module.exports = List;
