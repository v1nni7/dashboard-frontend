import { useForm, SubmitHandler } from "react-hook-form";

type FieldValues = {
  email: string;
  password: string;
};

function SignIn() {
  const { register, handleSubmit, watch } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  return (
    <>
      <section className="form-section flex">
        <div className="form-container">
          <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="form-title">
              Login
            </h2>
            <div className="form-group">
              <input
                type="text"
                placeholder="E-mail"
                className="form-control w-100"
                {...register("email")}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                className="form-control w-100"
                {...register("password")}
              />
            </div>
            <div className="form-group">
              <button className="form-submit" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default SignIn;
