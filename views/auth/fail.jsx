const React = require("react");
const Layout = require("../layout.jsx");

class Fail extends React.Component {
  render() {
    return (
      <Layout title="The Title!">
        <h1>FAILED TO LOGIN! <br /> NOT A MEMBER? CLICK SIGNUP!</h1>
      </Layout>
    );
  }
}

module.exports = Fail;
