import React            from 'react';
import RecipeService    from "./RecipeService";
import Recipe           from "./Recipe";

// RecipeService().then(console.log);

class RecipeList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            recipes: [],
        }
    }

    componentDidMount(){
        RecipeService()
        .then(recipes => this.setState({recipes}))
    }

    render() {
        
        const recipesList = this.state.recipes.map((rec , i) => <li key={i} ><Recipe {...rec} /></li>);

        return (
            <ul>
                {recipesList}
            </ul>
        );
    }
}


export default RecipeList;

