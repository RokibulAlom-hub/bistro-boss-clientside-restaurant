import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Authcontext } from "../../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const navigate = useNavigate()
    const {createUserByemail} = useContext(Authcontext);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      
      const onSubmit= (data) => {
        createUserByemail(data.email,data.password)
        .then(result => {
            console.log(result.user);
            alert('register success')
            navigate('/')
        })
      }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col md:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                {...register("name", { required: true })}
                placeholder="Please Enter Name"
                className="input input-bordered"
               
              />
              {errors.name && <span className="text-red-400">This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", { required: true })}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
