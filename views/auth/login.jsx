const React = require("react");
const Layout = require("../layout.jsx");

class Login extends React.Component {
  render() {
    return (
      <Layout title="LOGIN">
                <div className = "editContainer"> 

        <form action="/auth/login" method="post">
          <input type="text" name="username" placeholder="username"/>
          <input type="text" name="password" placeholder="password"/>
          <input type="submit" value="login"/>
        </form>
        </div>

        <div className = "hetfieldsignup">
        <img className = "mainimg" src = "https://media.npr.org/assets/img/2016/11/16/metallica_wide-d81a804be04b68eb9257504a38c9a8370374d754.jpg?s=1400"></img>
        
        <div className = "signuptxt">
        <a href = "/auth/login">  
          <h1 className = "loginpgtxt">LOGIN!!</h1></a></div>
        </div>
      </Layout>
    );
  }
}

module.exports = Login;
