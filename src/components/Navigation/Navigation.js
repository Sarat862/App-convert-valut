import { Link, Outlet } from "react-router-dom";


export default function Navigation() {
  return (
    <div>
        <Link to="/">Convert valut</Link>
        <Link to="/actualConvertValut">Actual convert valut</Link>
        <Outlet/>
    </div>
  )
}
