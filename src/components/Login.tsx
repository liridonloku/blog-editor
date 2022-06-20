import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

interface Props {}

const Login: React.FC<Props> = () => {
  const [error, seterror] = useState("");
  const { register, handleSubmit } = useForm();
  const onSubmit = async (e: any) => {
    console.log(e.email, e.password);
    try {
      const response = await axios.post(
        "https://stark-bastion-85808.herokuapp.com/users/login",
        `email=${e.email}&password=${e.password}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      const data = response.data;
      console.log(data);
    } catch (err: any) {
      if (err.response.data === "Unauthorized") {
        seterror("Wrong email or password!");
      } else {
        seterror(err.response.data);
      }
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center">
      <h1 className="mb-5">Log In</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="border rounded p-4">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            id="email"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            {...register("password")}
            id="password"
            className="form-control"
          />
        </div>
        <div className="text-center">
          <button className="btn btn-success" type="submit">
            Log In
          </button>
        </div>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
