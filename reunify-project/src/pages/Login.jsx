export default function Login() {
  return (
    <div className="hero min-h-screen bg-reunify-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left"></div>
        <div className="card shrink-0 w-96 mb-36 max-w-sm">
          <img className="w-44 ml-24 justify-between items-center" src="/reunify-black.png" />
          <form className="card-body">
            <div className="form-control">
              <input
                type="Username"
                placeholder="Username"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="Password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-accent font-bold">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
