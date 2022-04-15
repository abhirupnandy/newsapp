import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

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
		let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=d870bf50d7634ab292e65343fd3bfe4b&page=1&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parsedData = await data.json();
		console.log(parsedData);
		this.setState({
			articles: parsedData.articles,
			totalResults: parsedData.totalResults,
			loading: false,
		});
	}

	handlePrevClick = async () => {
		let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=d870bf50d7634ab292e65343fd3bfe4b&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parsedData = await data.json();
		console.log(parsedData);
		this.setState({
			articles: parsedData.articles,
			page: this.state.page - 1,
			loading: false,
		});
	};

	handleNextClick = async () => {
		if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
		} else {
			let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=d870bf50d7634ab292e65343fd3bfe4b&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
			this.setState({ loading: true });
			let data = await fetch(url);
			let parsedData = await data.json();
			console.log(parsedData);
			this.setState({
				articles: parsedData.articles,
				page: this.state.page + 1,
				loading: false,
			});
		}
	};

	render() {
		return (
			<div className='container my-3'>
				<h1 className='text-center' style={{ fontSize: '6rem' }}>
					News-Bytes Daily Top headlines
				</h1>

				<div className='container d-flex justify-content-between'>
					<button disabled={this.state.page <= 1} type='button' className={`btn btn-${this.state.page <= 1 ? 'danger' : 'info'} btn-lg`} onClick={this.handlePrevClick}>
						&larr; Previous
					</button>
					<button
						disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
						type='button'
						className={`btn btn-${this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize) ? 'danger' : 'info'} btn-lg`}
						onClick={this.handleNextClick}>
						Next &rarr;
					</button>
				</div>
				<div className='row'>
					{this.state.loading && <Spinner />}
					{!this.state.loading &&
						this.state.articles.map((element) => {
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
					<button disabled={this.state.page <= 1} type='button' className={`btn btn-${this.state.page <= 1 ? 'danger' : 'dark'} btn-lg`} onClick={this.handlePrevClick}>
						&larr; Previous
					</button>
					<button
						disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
						type='button'
						className={`btn btn-${this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize) ? 'danger' : 'dark'} btn-lg`}
						onClick={this.handleNextClick}>
						Next &rarr;
					</button>
				</div>
			</div>
		);
	}
}

export default News;
