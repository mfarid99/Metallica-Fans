const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="SIGNUP">
                <div className = "editContainer"> 

        <form action="/auth/signup" method="post">
          <input type="text" name="username" placeholder="username" />
          <input type="text" name="password" placeholder="password" />
          <input type="submit" value="signup" />
        </form>
        
        </div>

        <div className = "hetfieldsignup">
        <img className = "mainimg" src = "https://www.wwaytv3.com/wp-content/uploads/2018/02/1280x960_60802P00-JHMDR.jpg"></img>
        <div className = "signuptxt">
        <a className = "signupscreamlink" href = "/auth/signup">  
          <h1 className = "hetfieldscreamtxt">SIGNUP!!</h1>
          </a>
          </div>
        </div>

        
      </Layout>
    );
  }
}

module.exports = Index;
