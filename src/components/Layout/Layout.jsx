import { Suspense } from "react"
import { Link, Outlet } from "react-router-dom"
import css from "./Layout.module.css"

export const Layout = () => {
    return (
        <>
          <nav className={css.navigation}>
            <Link className={css.link} to="/">Home</Link>
            <Link className={css.link}to="/movies">Movies</Link>
          </nav>
          <div className={css.main}>
            <Suspense fallback = {<div>Loading</div>}>
              <Outlet/>
            </Suspense>
          </div>
        </>
    )
}