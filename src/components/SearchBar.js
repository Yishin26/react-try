import React from "react";

class SearchBar extends React.Component {
  /*onInputChange(event) {
    console.log("Input was Changed");
  }*/

  onFormSubmit=(event)=> {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  state = { term: "" };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e =>
                this.setState({ term: e.target.value.toUpperCase() })
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;