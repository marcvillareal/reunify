export default function Header() {
  return (
    <div>
      <div className="navbar bg-reunify-grey">
        <div className="navbar-start"></div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-4xl text-white font-body tracking-widest">
            <img src="/reunify.png" className="h-9" />R E U N I F Y
          </a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle"></button>
        </div>
      </div>
    </div>
  );
}
