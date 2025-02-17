import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useReducer, useEffect } from "react";

export default function Registration() {
  const init = {
    uname: "",
    pwd: "",
    fname: "",
    lname: "",
    adhaar: "",
    contact: "",
    email: "",
    address: "",
    city: 0,
    role: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        return { ...state, [action.fld]: action.value };
      case "reset":
        return init;
      default:
        return state;
    }
  };

  const [info, dispatch] = useReducer(reducer, init);
  const [errors, setErrors] = useState({ uname: "", pwd: "", adhaar: "", contact: "" });
  const [cities, setCities] = useState([]);
  const [roles, setRoles] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:8020/authentication/getAllCities") 
      .then((response) => response.json())
      .then((data) => setCities(data))
      .catch((error) => console.error("Error fetching cities:", error));

      fetch("http://localhost:8020/authentication/getAllRoles") 
      .then((response) => response.json())
      .then((data) => setRoles(data))
      .catch((error) => console.error("Error fetching roles:", error));
  }, []);


  const validateUsername = (username) => {
    const regex = /^[a-zA-Z0-9]{8,16}$/;
    if (!regex.test(username)) {
      return "Username must be 8-16 alphanumeric characters.";
    }
    return "";
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;
    if (!regex.test(password)) {
      return "Password must be 8-12 characters long, with at least one numeric, one uppercase letter, and one special character.";
    }
    return "";
  };

  const validateContact = (contact) => {
    const regex = /^\d{10}$/;
    if (!regex.test(contact)) {
      return "Contact number must be exactly 10 digits.";
    }
    return "";
  };

  const validateAadhaar = (aadhaar) => {
    const regex = /^\d{12}$/;
    if (!regex.test(aadhaar)) {
      return "Aadhaar number must be exactly 12 digits.";
    }
    return "";
  };


  const sendData = (e) => {
    e.preventDefault(); // Prevent page refresh

    const payload = {
      ...info,
      city: { cid: info.city }, // Nest city object with cid
      role: { rid: info.role }, // Nest role object with rid
    };

    const unameError = validateUsername(info.uname);
    const pwdError = validatePassword(info.pwd);
    const contactError = validateContact(info.contact);
    const adhaarError = validateAadhaar(info.adhaar);

    if (unameError || pwdError || contactError || adhaarError) {
      setErrors({
        uname: unameError,
        uname: unameError,
        pwd: pwdError,
        adhaar: adhaarError,
        contact: contactError
      });
      return;
    }

    const reqinfo = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    };

    fetch("http://localhost:8020/authentication/saveUser", reqinfo)
    .then((resp) => {
      if (resp.ok) {
        alert("Registration Successful!");
        dispatch({type:"reset"});
        setErrors({ uname: "", pwd: "", adhaar: "", contact: "" });
        window.location.href = "/";
      } else {
        alert("Registration Failed.");
      }
    })
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white text-center">
          <h2>Registration Page</h2>
        </div>

        <div className="card-body p-4">
          <form onSubmit={sendData}>
            {/* Personal Information Section */}
            <h4 className="mb-3 text-primary">Personal Information</h4>
            <div className="row mb-3">
              <label htmlFor="uname" className="col-sm-2 col-form-label">
                User Name:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className={`form-control ${errors.uname ? "is-invalid" : ""}`}
                  name="uname"
                  value={info.uname}
                  placeholder="Enter username"
                  onChange={(e) => {
                    dispatch({
                      type: "update",
                      fld: "uname",
                      value: e.target.value,
                    });
                    setErrors({ ...errors, uname: "" }); // Clear error on change
                  }}
                />
                {errors.uname && (
                  <div className="invalid-feedback">{errors.uname}</div>
                )}
              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="pwd" className="col-sm-2 col-form-label">
                Password:
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className={`form-control ${errors.pwd ? "is-invalid" : ""}`}
                  name="pwd"
                  value={info.pwd}
                  placeholder="Enter password"
                  onChange={(e) => {
                    dispatch({
                      type: "update",
                      fld: "pwd",
                      value: e.target.value,
                    });
                    setErrors({ ...errors, pwd: "" }); // Clear error on change
                  }}
                />
                {errors.pwd && (
                  <div className="invalid-feedback">{errors.pwd}</div>
                )}
              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="fname" className="col-sm-2 col-form-label">
                First Name:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="fname"
                  value={info.fname}
                  placeholder="Enter your first Name"
                  onChange={(e) => {
                    dispatch({
                      type: "update",
                      fld: "fname",
                      value: e.target.value,
                    });
                  }}
                />
              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="lname" className="col-sm-2 col-form-label">
                Last Name:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="lname"
                  value={info.lname}
                  placeholder="Enter your Last Name"
                  onChange={(e) => {
                    dispatch({
                      type: "update",
                      fld: "lname",
                      value: e.target.value,
                    });
                  }}
                />
              </div>
            </div>

            {/* Contact Details Section */}
            <h4 className="mb-3 text-primary">Contact Details</h4>
            <div className="row mb-3">
              <label htmlFor="adhar" className="col-sm-2 col-form-label">
                Adhar:
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className={`form-control ${errors.adhaar ? "is-invalid" : ""}`}
                  name="adhaar"
                  value={info.adhaar}
                  placeholder="Enter your Adhar No"
                  onChange={(e) => {
                    dispatch({
                      type: "update",
                      fld: "adhaar",
                      value: e.target.value,
                    });
                    setErrors({ ...errors, adhaar: "" }); // Clear error on change
                  }}
                />
                {errors.adhaar && (
                  <div className="invalid-feedback">{errors.adhaar}</div>
                )}
              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="contact" className="col-sm-2 col-form-label">
                Contact Details:
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className={`form-control ${errors.contact ? "is-invalid" : ""}`}
                  name="contact"
                  value={info.contact}
                  placeholder="Enter your Contact No"
                  onChange={(e) => {
                    dispatch({
                      type: "update",
                      fld: "contact",
                      value: e.target.value,
                    });
                    setErrors({ ...errors, contact: "" }); // Clear error on change
                  }}
                />
                {errors.contact && (
                  <div className="invalid-feedback">{errors.contact}</div>
                )}
              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="email" className="col-sm-2 col-form-label">
                Email:
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={info.email}
                  placeholder="Enter Email ID"
                  onChange={(e) => {
                    dispatch({
                      type: "update",
                      fld: "email",
                      value: e.target.value,
                    });
                  }}
                />
              </div>
            </div>

            <h4 className="mb-3 text-primary">Address</h4>
            <div className="row mb-3">
              <label htmlFor="address" className="col-sm-2 col-form-label">
                Address:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={info.address}
                  placeholder="Enter Address"
                  onChange={(e) => {
                    dispatch({
                      type: "update",
                      fld: "address",
                      value: e.target.value,
                    });
                  }}
                />
              </div>
            </div>

            {/* Address Section */}
            <div className="row mb-3">
              <label htmlFor="city" className="col-sm-2 col-form-label">
                City:
              </label>
              <div className="col-sm-10">
                <select
                  className="form-control"
                  value={info.city}
                  onChange={(e) =>
                    dispatch({ type: "update", fld: "city", value: e.target.value })
                  }
                  required
                >
                  <option value="">-- Choose a City --</option>
                  {cities.map((city) => (
                    <option key={city.cid} value={city.cid}>
                      {city.cname}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <h4 className="mb-3 text-primary">Other Details</h4>
            <div className="row mb-3">
              <label htmlFor="role" className="col-sm-2 col-form-label">
                Role:
              </label>
              <div className="col-sm-10">
                <select
                  className="form-control"
                  value={info.role}
                  onChange={(e) =>
                    dispatch({ type: "update", fld: "role", value: e.target.value })
                  }
                  required
                >
                  <option value="">-- Choose a Role --</option>
                  {roles.map((role) => (
                    <option key={role.rid} value={role.rid}>
                      {role.rname}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submission */}
            <div className="row mb-3">
              <div className="col-sm-10 offset-sm-2">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
                <button
                  type="reset"
                  className="btn btn-secondary"
                  onClick={() => {
                    dispatch({ type: "reset" });
                  }}
                >
                  Reset
                </button>
              </div>
            </div>
            <div className="text-center mt-4">
                    <p>Do you have an Account ? 
                        <a href ="/">Login</a> 
                    </p>
                </div>
          </form>

          <br />
          {/* {JSON.stringify(info)} */}
          <br />
        </div>
      </div>
    </div>
  );
}

