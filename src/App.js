import React            from 'react';
import RecipeList       from './components/RecipeList';
import Search           from './components/Search';

import './style.sass';

export default function App() {
    return <div>
        <Search />
        <RecipeList /> 
        
        </div>;
}