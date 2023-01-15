import { useForm, SubmitHandler } from "react-hook-form";

type FieldValues = {
  email: string;
  password: string;
};

function Login() {
  const { register, handleSubmit, watch } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  return (
    <>
      <section className="section-login">
        <div className="form-container">
          <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="form-title">Login</h2>
            <div className="form-group">
              <input
                type="text"
                autoComplete="off"
                placeholder="E-mail"
                className="form-control"
                {...register("email")}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                {...register("password")}
              />
            </div>
            <button className="form-forgot-password">
              Forgot your password?
            </button>
            <div className="form-group">
              <button type="submit" className="form-submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
