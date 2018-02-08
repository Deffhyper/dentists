import React from 'react';
import  axios  from 'axios';
import { createStore } from 'redux';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				data: []
		}
	}

	componentDidMount(){
		const _this = this;
		let instance = axios.create();
		instance.defaults.headers.common["Authorization"] = '39be316c1cae61e53ed3a965f8620595fbfa2893';

		this.serverRequest = instance.get('http://504080.com/api/v1/services')
			.then(function (response) {
				console.log(response);
				_this.setState({
					data: response.data.data.data
				})
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	componentWillUnmount() {
		this.serverRequest.abort();
	}

	render() {
		return (
			<div>
				{this.state.data.map((item)=>{
					return (
						<div key={item.id} className="card">
							<img className="card__image" src={item.image} alt=""/>
							<p className="card__description">{item.description}</p>
						</div>
					)
				})}
			</div>
		)
	}
}





