import Link from 'next/link'

interface NavLink {
  url: string,
  title: string
}

interface NavbarProps {
    links: NavLink[]
}

export default function Navbar() {
  return (
    <div className="flex-shrink-0 py-3 bg-light vh-100 position-fixed" style={{ width: "200px" }}>
    <div className="d-flex align-items-center pb-3 px-3 mb-3 link-dark text-decoration-none border-bottom">
      <span className="fs-5 fw-semibold">DevX</span>
    </div>


    <ul className="nav nav-pills flex-column mb-3 pb-3 border-bottom">
      <li>
        <Link href="/docs" className="nav-link link-dark">
          Docs
        </Link>
      </li>
    </ul>


    <ul className="nav nav-pills flex-column mb-auto">
      <li>
        <Link href="/todos" className="nav-link link-dark">
          Todos (server)
        </Link>
      </li>

      <li>
        <Link href="/posts" className="nav-link link-dark">
          Posts (client)
        </Link>
      </li>
    </ul>
  </div>
  )
}
