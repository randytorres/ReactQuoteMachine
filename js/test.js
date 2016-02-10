
var RandomQuoteMachine = React.createClass({
	getInitialState: function() {
		return {
			data: this.getRandomQuote()
		}
	},
	getRandomQuote: function() {
	 return names.random;
	},
	handleRandomQuote: function() {
		this.setState({
			data: this.getRandomQuote()
		});
	},
	render: function() {
		return (
			<div className="main-container">
				<QuoteContainer quote={ this.state.data } />
				<button className="random-quote" onClick={ this.handleRandomQuote }>Get random quote!</button>
				<TweetButton text={ this.state.data.quote } />
			</div>
		);
	}
});

var QuoteContainer = React.createClass({
	render: function() {
		return (
			<div className="quote-container">
				<p className="quote-text">{ this.props.quote.quote }</p>
				<p className="author">{ this.props.quote.author }</p>
			</div>
		);
	}
});

var TweetButton = React.createClass({
	render: function() {
		return (
			<iframe scrolling="no" frameBorder="0"
							allowTransparency="true" className="twitter-share-button twitter-share-button-rendered twitter-tweet-button"
							title="Twitter Tweet Button" src={'https://platform.twitter.com/widgets/tweet_button.html?count=horizontal&dnt=false&lang=en&url=""&size=m&text=' + encodeURI(this.props.text)}
							style={{ 'position': 'static', 'visibility': 'visible', 'width': '78px', 'height': '20px' }}>
			</iframe>
		);
	}
});

ReactDOM.render(<RandomQuoteMachine />, document.getElementById('random-quote-machine'));
