const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.min.css" integrity="sha512-xiunq9hpKsIcz42zt0o2vCo34xV0j6Ny8hgEylN3XBglZDtTZ2nwnqF/Z/TTCc18sGdvCjbFInNd++6q3J0N6g==" crossorigin="anonymous" />
          <link rel="stylesheet" href="/css/style.css"/>

          <script src="/js/app.js"></script>
        </head>
        <body>
          <header>
            <h1>Never<span>Note</span></h1>
            <nav>
              <span><a href = "/auth/signup">|SIGNUP|</a></span>
              <span><a href = "/auth/login">|LOGIN|</a></span>
              <span><a href = "/auth/logout">|LOGOUT|</a></span>



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