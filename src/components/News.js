import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
	articles = [];
	constructor() {
		super();
		console.log('News constructor');
		this.state = {
			articles: this.articles,
			page: 1,
			loading: false,
		};
	}

	async componentDidMount() {
		console.log('News componentDidMount');
		let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=d870bf50d7634ab292e65343fd3bfe4b&page=1&pageSize=20';
		let data = await fetch(url);
		let parsedData = await data.json();
		console.log(parsedData);
		this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
	}

	handlePrevClick = async () => {
		let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d870bf50d7634ab292e65343fd3bfe4b&page=${this.state.page - 1}&pageSize=20`;
		let data = await fetch(url);
		let parsedData = await data.json();
		console.log(parsedData);
		this.setState({
			articles: parsedData.articles,
			page: this.state.page - 1,
		});
	};

	handleNextClick = async () => {
		if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
		} else {
			let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d870bf50d7634ab292e65343fd3bfe4b&page=${this.state.page + 1}&pageSize=20`;
			let data = await fetch(url);
			let parsedData = await data.json();
			console.log(parsedData);
			this.setState({
				articles: parsedData.articles,
				page: this.state.page + 1,
			});
		}
	};

	render() {
		return (
			<div className='container my-3'>
				<h1 className='text-center' style={{ fontSize: '420%' }}>
					News-Bytes Daily Top headlines
				</h1>
				<div className='container d-flex justify-content-between'>
					<button type='button' className='btn btn-info btn-lg' onClick={this.handlePrevClick}>
						&larr; Previous
					</button>
					<button type='button' className='btn btn-info btn-lg' onClick={this.handleNextClick}>
						Next &rarr;
					</button>
				</div>
				<div className='row'>
					{this.state.articles.map((element) => {
						return (
							<div className='col-md-3' key={element.url}>
								<NewsItem
									title={element.title ? element.title.slice(0, 50) : ''}
									description={element.description ? element.description.slice(0, 80) : ''}
									imageUrl={element.urlToImage ? element.urlToImage : 'https://ps.w.org/worldwide-breaking-news-headlines/assets/icon-128x128.jpg'}
									newsUrl={element.url}
								/>
							</div>
						);
					})}
				</div>
				<div className='container d-flex justify-content-between'>
					<button type='button' className='btn btn-dark btn-lg' onClick={this.handlePrevClick}>
						&larr; Previous
					</button>
					<button type='button' className='btn btn-dark btn-lg' onClick={this.handleNextClick}>
						Next &rarr;
					</button>
				</div>
			</div>
		);
	}
}

export default News;
