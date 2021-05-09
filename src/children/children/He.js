import React from "react";

// export function He(props) {
//   return (
//     <div>
//      Mr. {props.name}
//     </div>
//   );
// }

export class He extends React.Component{  
    render(){
        return (
                <div>
                 Mr. {this.props.name}
                </div>
              );
    }
}