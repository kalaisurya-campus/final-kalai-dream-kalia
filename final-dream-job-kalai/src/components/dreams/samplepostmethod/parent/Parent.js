import React, { Component } from "react";
import Child from "../child/Child";
import "./styles/Parent.scss";
import axios from "axios";
import { transformSearchStringJsonSafe } from "serialize-query-params";

const api = axios.create({
  baseURL: "https://datas-projects-default-rtdb.firebaseio.com/datas.json/",
});
class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empty: []
    };
  }
  componentDidMount() {
    api
      .get("/")
      .then((res) => {
        //   console.log([res.data]);
        // const datas = [];
        // for (let key in res.data) {
        //   datas.push({ ...res.data[key], id: key });
        // }
        // this.setState({empty:[res.data]});
        // console.log(datas);
        // this.setState({ empty: datas });
        // this.setState({empty:[res.data]});
    this.setState({empty:[res.data]})
      })
      .catch((err) => {
        console.log(err.res);
      });
  }
  render() {
    const { empty } = this.state;
    console.log(empty);
    const emptys = this.state.empty.map((post) => {
      return(
<Child/> 
      ) 
    });

    return (
      <div>
        
        <h1>welcome too main page!!!</h1>

       {empty&&<div>{empty.map((items,index)=>
       {
           return(
               <>
               <div>
                   {/* <h1>title:{items.id.title}</h1>
                   <h1>name:{items.id.name}</h1>
                   <h1>description:{items.id.description}</h1>
                   <h1>salary:{items.id.salary}</h1> */}
                   {items.id?<div>{items.id.map((item,index)=>
                   {
                       return(
                           <div>
                               <div className="card mb-3 col-lg-6 col-sm-6 col-md-6 px-2">
                               <h1>title:{item.title}</h1>
                               <h1>name:{item.name}</h1>
                               <h1>description:{item.description}</h1>
                               <h1>salary:{item.salary}</h1>
                               </div>
                           </div>
                       )
                   })}</div>:<div>thanks</div>}
               </div>
               </>
           )
       })}</div>}
       {/* <Child/> */}
       {emptys}
      </div>
    );
  }
}

export default Parent;


// [{"name":"kalainazriya","description":"react","salary":"34000","title":"Reatc Developer","id":"1"},
// {"name":"Romankalai","description":"reactkalai","salary":"36700","title":"Html Developer","id":"2"},
// {"name":"Roman","description":"Html Success","salary":"30000","title":"Python Developer","id":"3"}
// ]