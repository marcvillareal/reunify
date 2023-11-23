import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [fields, setFields] = useState({ name: "", password: "" });
  const navigate = useNavigate(); // Access the navigate function
  const updateFields = (field) => {
    setFields({ ...fields, ...field });
  };

  useEffect(() => {
    console.log(fields);
  }, [fields]);

  const handleLogin = () => {
    // Check if the username and password match
    if (fields.name === "lemn" && fields.password === "lemn") {
      // Navigate to the Chatroom page
      navigate("/chatroom");
    } else {
      // Handle authentication failure (show error message, etc.)
      console.log("Authentication failed");
    }
  };

  return (
    <div className="hero min-h-screen bg-reunify-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left"></div>
        <div className="card shrink-0 w-96 mb-36 max-w-sm">
          <img
            className="w-44 ml-24 justify-between items-center"
            src="/reunify-black.png"
            alt="Reunify Logo"
          />
          <form className="card-body">
            <div className="form-control">
              <input
                onChange={(e) =>
                  updateFields({
                    name: e.target.value,
                    password: fields.password,
                  })
                }
                type="Username"
                placeholder="Username"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                onChange={(e) =>
                  updateFields({ name: fields.name, password: e.target.value })
                }
                type="Password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button
                className="btn btn-accent font-bold"
                type="button"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
