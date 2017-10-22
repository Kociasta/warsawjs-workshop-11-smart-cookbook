import React            from 'react';
import { connect }          from 'react-redux';
import CriteriaList     from './CriteriaList';

class Search extends React.Component {
    
    constructor(props) {
         super(props)
      
      this.state = {
        searchText: '',
      };
      
          this.handleChange = e => this.setState({searchText: e.target.value});
      this.addCriteria = e => {
        if (this.state.searchText) {
          this.setState({searchText: ''});
          this.props.addCriteria(this.state.searchText);
        }
      };
    }
    
    render() {
        return (
        <div>
            <input type="text" value={this.state.searchText} onChange={this.handleChange}/>
            <button onClick={this.addCriteria}>Add to search</button>
            <button onClick={this.props.wipeCriteria}>Wipe criteria</button>
          <CriteriaList criteria={this.props.criteria} />
        </div>
      );  
    }
    
  }
  

const mapStateToProps = state => ({
  criteria: state.criteria
});
const mapDispatchToProps = dispatch => ({
	addCriteria: (criterium) => {dispatch({type: 'ADD_CRITERIA', criterium})},
    wipeCriteria: () => {dispatch({type: 'WIPE_CRITERIA'})}
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);