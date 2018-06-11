import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import SearchBar from './components/Search_Bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/Video_List';
import VideoDetail from './components/Video_Detail';
import Television from './components/Television';
const APIkey = 'AIzaSyB3lLL3VIRFc2gIDOQkpJCxELNtvqR5lFU';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [] ,
            selectedVideo: null
        };

       this.videoSearch( '1980s music videos');
        
    }

        videoSearch (term) {
            YTSearch ({key: APIkey, term }, videos => {
                this.setState({ 
                    videos: videos,
                    selectedVideo: videos[0]
                    //selected video is video clicked by user
                
                });
            });
        }


    render() {
        const videoSearch = 
        _.debounce((term) => { 
            this.videoSearch(term) }, 300);
    
        return (

            <div>
                {/* <SearchBar onSearchTermChange = {videoSearch} /> */}
                <Television  />
                <VideoDetail className="videoBox" video= {this.state.selectedVideo} />
                <VideoList
                onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                //the onClick Handler for this is defined in Video_List_Item


                 videos = {this.state.videos} />
                {/* <Television /> */}
            </div>
        )
   
    }
}
//take this components html, and put it on the DOM//

ReactDOM.render(<App />, document.querySelector('.container'))