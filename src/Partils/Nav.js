import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div className="nav" id="navarea">
        <ul className="ularea">
          <Link to="/" style={{ textDecoration: "none" }}>
            {" "}
            <li className="listitem"> Porjects</li>{" "}
          </Link>
          <Link to="/resume" style={{ textDecoration: "none" }}>
            {" "}
            <li className="listitem"> Resume</li>
          </Link>

          <Link to="/" style={{ textDecoration: "none" }}>
            {" "}
            <li className="listitem"> Home</li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            {" "}
            <li className="listitem"> About</li>{" "}
          </Link>
        </ul>
      </div>
    </>
  );
}
