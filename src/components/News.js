import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
	arttcles = [
		{
			source: {
				id: 'newsweek',
				name: 'Newsweek',
			},
			author: 'Julia Duin',
			title: 'U.S. Supreme Court taking on case of high school football coach fighting for right to pray on 50-yard line',
			description: 'Coach Joe Kennedy, a football coach at Bremerton High School in western Washington, says he has a First Amendment right to pray after a game.',
			url: 'https://www.newsweek.com/us-supreme-court-taking-case-high-school-football-coach-fighting-right-pray-50-yard-line-1693135',
			urlToImage: 'https://d.newsweek.com/en/full/2011150/bremerton-high-school-football-coach-joe-kennedy.jpg',
			publishedAt: '2022-04-14T09:00:01Z',
			content:
				'For six seasons, Coach Joe Kennedy would walk to the middle of the football field, drop to one knee and briefly give thanks to God.\r\nThis ritual – a silent prayer that barely lasted 30 seconds – went… [+14396 chars]',
		},
		{
			source: {
				id: 'four-four-two',
				name: 'FourFourTwo',
			},
			author: 'PA Staff',
			title: 'Football rumours: Liverpool give in to Mohamed Salah’s wage demands',
			description:
				'Liverpool have agreed to pay the Premier League’s top scorer Mohamed Salah £400,000 a week to stop him from leaving, according to Metro. The 29-year-old is out of contract at Anfield in 2023 and has been linked to Real Madrid and Barcelona.',
			url: 'https://www.fourfourtwo.com/news/football-rumours-liverpool-give-in-to-mohamed-salahs-wage-demands-1649917103000',
			urlToImage: 'https://cdn.mos.cms.futurecdn.net/MdeQ9Y9KHPbH6AsMhRiNd8-1200-80.jpg',
			publishedAt: '2022-04-14T07:48:19Z',
			content:
				'What the papers say\r\nLiverpool have agreed to pay the Premier League’s top scorer Mohamed Salah £400,000 a week to stop him from leaving, according to Metro. The 29-year-old is out of contract at Anf… [+1145 chars]',
		},
		{
			source: {
				id: 'talksport',
				name: 'TalkSport',
			},
			author: 'Josh Fordham',
			title: 'Football news and gossip LIVE: Champions League reaction as Pep has ‘nothing to say’ about Atletico Madrid...',
			description: '',
			url: 'https://talksport.com/football/1083784/football-news-chelsea-real-madrid-villarreal-bayern-munich-champions-league-man-city-liverpool-man-utd-ten-hag-transfers/',
			urlToImage: 'https://talksport.com/wp-content/uploads/sites/5/2022/04/TALKSPORT-Blog-5.jpg?strip=all&quality=100&w=1200&h=800&crop=1',
			publishedAt: '2022-04-14T07:06:35Z',
			content:
				'Get all the latest news and gossip from the world of football right here, in talkSPORT.com’s live blog.\r\nManchester City edged past Atletico Madrid in their Champions League quarter-final as a 0-0 dr… [+889 chars]',
		},
		{
			source: {
				id: 'espn',
				name: 'ESPN',
			},
			author: 'Heather DinichESPN Senior Writer ',
			title: "Ed Orgeron tells Fighting Irish football team 'you're going to win it all' during visit to Notre Dame with sons",
			description:
				'Former LSU football coach Ed Orgeron is at Notre Dame this week with two of his sons who are interested in coaching careers, Notre Dame coach Marcus Freeman told ESPN on Wednesday.',
			url: 'http://espn.go.com/college-football/story/_/id/33732593/ed-orgeron-tells-fighting-irish-football-team-going-win-all-visit-notre-dame-sons',
			urlToImage: 'https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0413%2Fr999380_1296x729_16%2D9.jpg',
			publishedAt: '2022-04-13T21:26:00Z',
			content:
				'SOUTH BEND, Ind. -- Former LSU football coach Ed Orgeron is at Notre Dame this week with two of his sons who are interested in coaching careers, Notre Dame coach Marcus Freeman told ESPN on Wednesday… [+2266 chars]',
		},
		{
			source: {
				id: 'espn-cric-info',
				name: 'ESPN Cric Info',
			},
			author: null,
			title: "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
			description: 'Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com',
			url: 'http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles',
			urlToImage: 'https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif',
			publishedAt: '2020-04-27T07:20:43Z',
			content:
				"Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]",
		},
	];
	constructor() {
		super();
		console.log('News constructor');
		this.state = {
			articles: this.articles,
			loading: false,
		};
	}
	render() {
		return (
			<div className='container my-3'>
				<h2>News-Bytes Daily Top headlines</h2>
				<div className='row'>
					<div className='col-md-4'>
						<NewsItem title='myTitle' description='Hello' imageUrl='https://d.newsweek.com/en/full/2011150/bremerton-high-school-football-coach-joe-kennedy.jpg' newsUrl='TODO' />
					</div>
					<div className='col-md-4'>
						<NewsItem title='myTitle' description='Hello' />
					</div>
					<div className='col-md-4'>
						<NewsItem title='myTitle' description='Hello' />
					</div>
				</div>
			</div>
		);
	}
}

export default News;
