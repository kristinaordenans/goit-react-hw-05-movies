import { Suspense } from "react"
import { Link, Outlet} from "react-router-dom"

export const Layout = () => {
    return (
        <>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </nav>
          <div>
            <Suspense fallback = {<div>Loading</div>}>
              <Outlet/>
            </Suspense>
          </div>
      </>
    )
}