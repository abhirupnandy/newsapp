import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
	articles = [];
	constructor() {
		super();
		console.log('News constructor');
		this.state = {
			articles: this.articles,
			loading: false,
		};
	}

	async componentDidMount() {
		console.log('News componentDidMount');
		let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=d870bf50d7634ab292e65343fd3bfe4b';
		let data = await fetch(url);
		let parsedData = await data.json();
		console.log(parsedData);
		this.setState({ articles: parsedData.articles });
	}
	render() {
		return (
			<div className='container my-3'>
				<h2>News-Bytes Daily Top headlines</h2>
				{/* {this.state.articles.map((element) => {
					console.log(element);
				})} */}
				<div className='row'>
					{this.state.articles.map((element) => {
						return (
							<div className='col-md-4' key={element.url}>
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
			</div>
		);
	}
}

export default News;
