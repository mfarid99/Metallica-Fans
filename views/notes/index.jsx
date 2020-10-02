const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const {notes} = this.props
    return (
      <Layout title="METALLICA FANPAGE">
        <h1 className = "metfanpg"> METALLICA FAN PAGE </h1>
          <div> 
          <img className = "mainImg" src = "https://www.ajc.com/resizer/DPD4duP5lsqeAjYxomfA_lEu5mg=/1066x600/cloudfront-us-east-1.images.arcpublishing.com/ajc/WIV6PUQW3BESDJNJYY2OV6YTDI.jpg"></img>
          
          </div>

        <a href = "/notes/new">
           <button className = "createMemory">Create Memory</button> </a> 

        {notes.map((note) => (
                <div>  
                 
        <h2>{note.name}</h2>
        <h2>{note.date}</h2>
        <h2>{note.location}</h2>
        <img className = "userImg" src = {note.image}></img>
        <h2>{note.desc}</h2>

        <form action = {`/notes/${note._id}?_method=DELETE`} method = "POST">
          <input type = "submit" value = "delete"/>
        </form>

        <form action = {`/notes/edit/${note._id}`} method = "GET">
          <input type = "submit" value = "Edit"/>
        </form>
        <hr/>

        </div>
        
        ))}
      </Layout>
    );
  }
}

module.exports = Index;
