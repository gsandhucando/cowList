import React from "react";

let Cow = ({name, description}) => {
  return (
        <li>
          <h3> {name} </h3>
          <p> {description} </p>
        </li>
  )
}
//dont need to export cows because cowlist is already using it inside
let CowList = ({cows}) => {
return (<ul>
  { cows.map(cow =>{
      return (<Cow key={cow._id}
                  name={cow.name}
                  description={cow.description} />)
  })}
  </ul>);
}


export default CowList;