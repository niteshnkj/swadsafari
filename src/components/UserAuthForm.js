import React from "react";

const UserAuthForm = () => {
  // login/signup based on cookies and local storage
  return (
    <div>
      <h1>Register/Login</h1>
      <div>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Email" />
          <input type="text" placeholder="Set PassWord" />
          <input type="text" placeholder="Confirm Pasword" />
          <button>Submit</button>
          <p>Already Registered? SingnIn</p>
          <p>Not Registered? SignUp</p>
        </form>
      </div>
    </div>
  );
};

export default UserAuthForm;
