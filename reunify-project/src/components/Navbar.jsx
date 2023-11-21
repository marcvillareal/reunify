export default function Navbar() {
  return (
    <div>
      <div className="navbar bg-reunify-grey">
        <div className="navbar-start"></div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-4xl font-body">
            <img src="/reunify.png" className="h-7" />R E U N I F Y
          </a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle"></button>
        </div>
      </div>
    </div>
  );
}
