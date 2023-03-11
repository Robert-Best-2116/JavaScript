import { Link, Route } from "react-router-dom"


const Home = (props) => {
    return (
      <div>
        <h1 style={{ color: "red"}}>
          Home Component
        </h1>
        <div>
        <Link to={"/about"}>Go To About Component</Link>
        </div>
        <Link to={"/survey"}>Go To Survey</Link>
      </div>
    )
  }

  export default Home;