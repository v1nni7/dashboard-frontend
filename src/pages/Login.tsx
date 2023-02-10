import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Oval } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signInService } from "../service/api";

type FieldValues = {
  email: string;
  password: string;
};

function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      setLoading(true);
      const response = await signInService(data);

      if (response.status === 200) {
        navigate("/");
        localStorage.setItem("token", response.data.token);
      }
    } catch (err: Error | any) {
      console.log(err);
      toast.error(err.response.data, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    } finally {
      setLoading(false);
    }
  };

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
                disabled={loading}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                {...register("password")}
                disabled={loading}
              />
            </div>
            <button className="form-forgot-password">
              Forgot your password?
            </button>
            <div className="form-group">
              <button type="submit" className="form-submit" disabled={loading}>
                {loading ? (
                  <Oval
                    height={35}
                    color="#ffffff"
                    secondaryColor="#ffffff"
                    strokeWidth={4}
                    strokeWidthSecondary={4}
                  />
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
