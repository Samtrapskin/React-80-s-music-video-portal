import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_Bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/Video_List';
//Create a new component. This component should produce some 




const APIkey = 'AIzaSyB3lLL3VIRFc2gIDOQkpJCxELNtvqR5lFU';

YTSearch ({key: APIkey, term: '1980s'}, function (data) {
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
                <VideoList videos = {this.state.videos} />
            </div>
        )
   
    }
}
//take this components html, and put it on the DOM//

ReactDOM.render(<App />, document.querySelector('.container'))