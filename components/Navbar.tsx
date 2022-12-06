interface NavbarProps {
    children?: React.ReactElement
}

export default function Navbar({ children } : NavbarProps) {
  return (
    <div className="flex-shrink-0 py-3 bg-light vh-100 position-fixed" style={{ width: "200px" }}>
    <div className="d-flex align-items-center pb-3 px-3 mb-3 link-dark text-decoration-none border-bottom">
      <span className="fs-5 fw-semibold">DevX</span>
    </div>
    <ul className="nav nav-pills flex-column mb-3 pb-3 border-bottom">
      <li>
        <a href="#" className="nav-link link-dark">
          Start Here
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          Documentation
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          SDK
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          Sample Apps
        </a>
      </li>
    </ul>
    <ul className="nav nav-pills flex-column mb-auto">
      <li>
        <a href="#" className="nav-link link-dark">
          My Profile
        </a>
      </li>
      </ul>
  </div>
  )
}
