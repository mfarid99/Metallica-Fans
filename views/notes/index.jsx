const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const {notes} = this.props
    return (
      <Layout title="My Notes">
        <h1> My Notes </h1>
        <a href = "/notes/new">
           <button>New Note</button> </a> 

        {notes.map((note) => (
                <div>  

        <h2>{note.note}</h2>
        <form action = {`/notes/${note._id}?_method=DELETE`} method = "POST">
          <input type = "submit" value = "delete"/>
        </form>
        </div>
        
        ))}
      </Layout>
    );
  }
}

module.exports = Index;
