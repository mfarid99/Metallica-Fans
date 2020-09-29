const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const {notes} = this.props
    return (
      <Layout title="My Notes">
        <h1> My Notes </h1>
        {notes.map(note => <h2>{note.note}</h2>)}
      </Layout>
    );
  }
}

module.exports = Index;
