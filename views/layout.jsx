const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.min.css" integrity="sha512-xiunq9hpKsIcz42zt0o2vCo34xV0j6Ny8hgEylN3XBglZDtTZ2nwnqF/Z/TTCc18sGdvCjbFInNd++6q3J0N6g==" crossorigin="anonymous" />
          <link rel="stylesheet" href="/css/style.css"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap" />
          <link rel = "stylesheet" href = "https://fonts.googleapis.com/css2?family=New+Rocker&display=swap" />
          <script src="/js/app.js"></script>
        </head>
        <body>
          <header>
            <h1>THROUGH<span> THE NEVER</span></h1>
            <nav >
              <span><a className = "signheader" href = "/auth/signup">SIGNUP</a></span>
              <span><a className = "signheader" href = "/auth/login">LOGIN</a></span>
              <span><a className = "signheader" href = "/auth/logout">LOGOUT</a></span>
              



            </nav>

          </header>
          <main>{this.props.children}</main>
          <footer>
            <h1></h1>
          </footer>
        </body>
      </html>
    );
  }
}

module.exports = Layout;