import React            from 'react';
import { connect }          from 'react-redux';
import CriteriaList     from './CriteriaList';

class Search extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            searchText: "",
            criteria: []
        }

        this.handleChange = e => this.setState({searchText: e.target.value})
        this.onSubmit = (e, form) => {
            e.preventDefault();
            console.log(form);
            const {searchText , criteria} = this.state;
            this.setState({
                criteria: [...criteria , searchText]
            })
            console.log(criteria);
        }
    }
    render(){
        return (
            <div>
                <CriteriaList criteria={this.state.criteria}/>
                <form onSubmit={this.onSubmit}>
                    <input type="text" value={this.state.searchText} onChange={this.handleChange} / >
                    <button type="submit"> Add to search</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
	addCriteria: (criterium) => {dispatch({type: 'ADD_CRITERIA', criterium})},
  wipeCriteria: () => {dispatch({type: 'WIPE_CRITERIA'})}
});

export default connect(undefined, mapDispatchToProps)(Search);