import React from 'react';
import ReactDOM from 'react-dom';

let articlesArray
let articles

class ArticleData extends React.Component {
	constructor () {
		super ();
		this.articlesArray = [];
		this.articles;
		// this.state = {
		// 	titles: [],
		// }
	}

	componentDidMount () {
		let url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=dbd9c86c9a9140b38fcaa4c85bc4b689';

        // let req = new Request (url);

		fetch (url)
			.then(results => {
				return results.json();
			}).then(data => {
				this.articlesArray = data.results[articles]
				console.log(this.articlesArray);
				this.titles = this.articlesArray.map((val) => {
					return (
							// <img src={pic.picture.medium} />
							<h3> {val.title} </h3>
					)
				})				
			})
	}

	render (){
		return (
	      <div className="container2">
	      	<div className="container1">
	      		{this.titles}
	      	</div>
	      </div>
	    );
	}
}


export default ArticleData;