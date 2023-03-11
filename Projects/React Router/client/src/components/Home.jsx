import { Link } from "react-router-dom"


const Home = (props) => {
    return (
      <div>
        <h1>
            Welcome
        </h1>
            <Link to={"/"}>Go Back</Link>
      </div>
    )
  }

  export default Home;