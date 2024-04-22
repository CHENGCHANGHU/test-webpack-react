import { Link } from "react-router-dom";

export default function() {
  return (
    <>
      <h1>
        page a
      </h1>
      <div><Link to={'/b'}>Page B</Link></div>
      <div><Link to={'/c'}>Page C</Link></div>
    </>
  );
}