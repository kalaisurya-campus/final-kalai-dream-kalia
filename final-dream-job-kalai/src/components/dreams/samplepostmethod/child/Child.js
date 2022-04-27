import React from 'react';
import './styles/Child.scss';
function Child(props) {
    return (
        <div>
           <div className="card col-sm-12 col-md-12 col-lg-4 text-center">
           {/* <h5>title:{props.post.title}</h5>
            <h5>description:{props.post.description}</h5>
            <h5>name:{props.post.name}</h5>
            <h5>salary:{props.post.salary}</h5> */}
                 {/* <h5>name:{props.post.id}</h5> */}
                 <h5>title:{props.title}</h5>
                 <h5>name:{props.name}</h5>
                 <h5>salary:{props.salary}</h5>
                 <h5>description:{props.description}</h5>
           </div>
        </div>
    );
}

export default Child;