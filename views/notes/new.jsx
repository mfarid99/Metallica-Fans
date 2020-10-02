const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {

    return (
      <Layout title="New Note">

        <div className = "editContainer"> 
          <form action = "/notes/" method = "post">
          <input type = "text" placeholder = "Your Name" name = "name" />
          <input type = "text" placeholder = "Concert Date" name = "date" />
          <input type = "text" placeholder = "Concert Location/Venue" name = "location" />
          <input type = "text" placeholder = "Post your best live show pics here!!" name = "image" />
          <input type = "text" placeholder = "Tell us about the concert" name = "desc" />


          

          <input type = "submit" value = "Post Memory"/>

        </form>

        </div> 
        
        {/* <form action = "/notes/" method = "post">
          Name: <input type = "text" placeholder = "Name" name = "note" />
          Date: <input type = "text" placeholder = "Concert Date" name = "note" />
          Live Show Location: <input type = "text" placeholder = "Venue / City/State" name = "note" />
          Image: <input type = "text" placeholder = "Post your best live show pic here!!!" name = "note" />
          


          <input type = "submit" value = "Share Memories"/>

        </form> */}
        
        
              </Layout>
    );
  }
}

module.exports = Index;
