
var RandomQuoteMachine = React.createClass({
	getInitialState: function() {
		return {
			data: this.getRandomQuote()
		}
	},
	getRandomQuote: function() {
		var quotes = [
			{author: "- Yoda", quote: "When 900 years old, you reach… Look as good, you will not."},
			{author: "- Senator palpatine", quote: "The Dark Side of the Force is the pathway to many " +
			"abilities some consider to be.. Unnatural."},
			{author: "- Count dooku", quote: "I sense great fear in you, Skywalker. You have hate… you " +
			"have anger… but you don’t use them."},
			{author: "- Darth vader", quote: "Luke, you can destroy the Emperor. He has foreseen this. " +
			"It is your destiny. Join me, and together we can rule the galaxy as father and son."},
			{author: "- Princess leila", quote: "Aren't you a little short for a storm trooper?"},
			{author: "- Yoda", quote: "Mmm. Lost a planet, Master Obi-Wan has. How embarrassing."},
			{author: "- Qui-Gon Jinn", quote: "Your focus determines your reality"},
			{author: "- Yoda", quote: "Do. Or do not. There is no try."},
			{author: "- Obi-Wan-Kenobi", quote: "In my experience there is no such thing as luck."}
		];

		var random = randomGen(0, quotes.length - 1);
		return quotes[random];

		function randomGen(max, min) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
	},
	handleRandomQuote: function() {
		this.setState({
			data: this.getRandomQuote()
		});
	},
	render: function() {
		return (
			<div className="main-container">
				<h1 className="header">Star Wars Random Quote Generator</h1>
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
