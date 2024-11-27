"use client"
import { login } from "@/actions"
import { useActionState  } from "react";

const LoginForm = () => {
  const [state, formAction] = useActionState(login, undefined);
  return (
    <form
      action={formAction}
      className="space-y-4 p-6 max-w-sm mx-auto bg-base-100 shadow-lg rounded-lg"
    >
      <div className="form-control">
        <label className="label" htmlFor="username">
          <span className="label-text">Username</span>
        </label>
        <input
          type="text"
          id="username"
          name="username"
          required
          placeholder="Enter your username"
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor="password">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          placeholder="Enter your password"
          className="input input-bordered w-full"
        />
      </div>
      <button className="btn btn-primary w-full">Login</button>
      {state?.error && (
        <p className="alert alert-error mt-4" role="alert">
          {state.error}
        </p>
      )}
    </form>
  );
}
export default LoginForm;