import React from 'react';



export default function CriteriaList(props){
    const criteria = props.criteria.map((crit, index) => <li key={index}>{crit}</li>);
    return (
        <ul>
            {criteria}
        </ul>
    )
}