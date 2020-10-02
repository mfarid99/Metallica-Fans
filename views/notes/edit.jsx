const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const { note } = this.props;
    return (
      <Layout title="Edit Note">
        
        <div className = "editContainer">  
        <form action = {`/notes/edit/${note._id}?_method=PUT`} method = "post">
          
          <input type = "text" value = {note.name} placeholder = "Name" name = "name" />
          <input type = "text" value = {note.date} placeholder = "Concert Date" name = "date" />
          <input type = "text" value = {note.location} placeholder = "Venue/City/State" name = "location" />
          <input type = "text" value = {note.image} placeholder = "Upload your best concert pic!" name = "image" />
          <input type = "text" value = {note.desc} placeholder = "How was the live show?" name = "desc" />



          


          <input type = "submit" value = "edit note" />

        </form>
        
        </div>
        
              </Layout>
    );
  }
}

module.exports = Index;
