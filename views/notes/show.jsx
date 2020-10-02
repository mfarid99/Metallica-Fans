const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {


    return (
      <Layout title="METALLICA FANPAGE">
        {/* <h1>LOGIN PAGE</h1> */}
        <div className = "loginDiv">
        <h1 className = "logintxt">LOG IN  <br /> TO POST YOUR BEST <br /> METALLICA <br /> LIVE SHOW MEMORIES</h1>

        <div className = "fourimg">
        <img className = "imgshow" src = "https://www.ultimate-guitar.com/static/article/news/5/106205_0_wide_ver1589124163.jpg@642"></img>

        <img className = "imgshow" src = "https://i.imgur.com/1aCB3la.jpg"></img>

        <img className = "imgshow" src = "https://i.imgur.com/WFtyYzB.jpg"></img>

        <img className = "imgshow" src = "https://i.imgur.com/eMOJ4RS.jpg"></img>
      <hr />

      <img className = "imgshowWide" src = "https://i.imgur.com/JZisRJu.jpg"></img>


      <hr />

      <img className = "imgshow" src = "https://i.imgur.com/h1xuXrZ.jpg"></img>

      <img className = "imgshow" src = "https://i.imgur.com/qMBjeGq.jpg"></img>

      <img className = "imgshow" src = "https://i.imgur.com/wDMc8Gk.jpg"></img>

      <img className = "imgshow" src = "https://i.imgur.com/l9ymNAJ.jpg"></img>

        </div>
        </div>

      </Layout>

    );
  }
}

module.exports = Index;
