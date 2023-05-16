import { Component } from "react";
// import { FiSearch } from 'react-icons';
import PropTypes from 'prop-types';


export default class SearchBar extends Component {
    state = {
        inputData: '',
    }

    onChangeInput = e => {
        this.setState({ inputData: e.currentTarget.value.toLowerCase() });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.inputData);
        this.setState({ inputData: '' });
    };

    render() {
        const { inputData } = this.state.inputData;

        return (
            <header class="searchbar">
  <form class="form"  onSubmit={this.handleSubmit}>
    <button type="submit" class="button">
                    {/* <span class="button-label">Search</span> */}
                    {/* <FiSearch size={20}/> */}
    </button>

    <input
                    class="input"
                    name='inputData'
                    value={inputData}
                    onChange={this.onChangeInput}
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
       )
    };
};

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}


