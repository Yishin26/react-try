import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async term => {
    const response = await unsplash.get(
      "https://api.unsplash.com/search/photos",
      {
        params: { query: term }
      }
    );
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div >
        <div style={{margin:'20pt'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList className="ui container" images={this.state.images} />
        Found:{this.state.images.length} images
        </div>
      </div>
    );
  }
}

export default App;
