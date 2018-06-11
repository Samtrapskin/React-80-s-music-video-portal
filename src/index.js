import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_Bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/Video_List';
import VideoDetail from './components/Video_Detail';
// import Television from './components/Television';
//Create a new component. This component should produce some 




const APIkey = 'AIzaSyB3lLL3VIRFc2gIDOQkpJCxELNtvqR5lFU';

YTSearch ({key: APIkey, term: '1980s music videos'}, function (data) {
});

//html
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {videos: [] };

            YTSearch ({key: APIkey, term: '1980s music videos'}, (videos) => {
                this.setState({ videos: videos});
            });
        
    }
    render() {
        return (

            <div>
                <SearchBar />
                <VideoDetail video= {this.state.videos[0]} />
                <VideoList videos = {this.state.videos} />
                {/* <Television /> */}
            </div>
        )
   
    }
}
//take this components html, and put it on the DOM//

ReactDOM.render(<App />, document.querySelector('.container'))