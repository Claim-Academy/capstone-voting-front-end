import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Form, useNavigate } from "react-router-dom";
import * as yup from "yup";
import InputText from "../components/input-text";
import AuthContext from "../context/auth";
import { userApi } from "../services";
import { getUserFromToken } from "../utils";

// TODO: 🚸 Avoid flash of page while checking for user
export default function SignIn() {
  const [isRegistering, setIsRegistering] = useState(true);

  const [user, setUser] = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (user?.isSuperUser) {
      navigate("/super-admin");
    } else if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const formSchema = yup.object({
    username: yup.string().required("Username is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters long"),
    confirmPassword: isRegistering
      ? yup.string().oneOf([yup.ref("password")], "Passwords must match")
      : null,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

  return (
    <>
      <Container component="main" maxWidth="xs">
        <h1 className="text-center capitalize">Sign in</h1>
        <Form
          className="mt-4 flex flex-col items-center gap-y-4"
          onSubmit={handleSubmit(async (data) => {
            const { token } = await userApi
              .signIn(data, isRegistering)
              .catch((err) => {
                console.error(err.message);
              });

            localStorage.setItem("token", token);

            const user = getUserFromToken(token);

            setUser(user);
          })}
        >
          <InputText label="Username" id="username" register={register}>
            {errors.username && (
              <Alert severity="error">{errors.username.message}</Alert>
            )}
          </InputText>
          <InputText
            label="Password"
            id="password"
            type="password"
            register={register}
          >
            {errors.password && (
              <Alert severity="error">{errors.password.message} </Alert>
            )}
          </InputText>
          {isRegistering && (
            <InputText
              label="Confirm Password"
              id="confirmPassword"
              type="password"
              register={register}
            >
              {errors.confirmPassword && (
                <Alert severity="error">{errors.confirmPassword.message}</Alert>
              )}
            </InputText>
          )}
          <div className="my-4 flex flex-col items-center gap-y-8">
            <Button type="submit" fullWidth variant="contained">
              {isRegistering ? "Sign Up" : "Login"}
            </Button>
            <Button
              // * Avoid the HTML 'reset' for React Hook Form instead use the reset() method ☝️
              type="button"
              onClick={() => {
                reset();
                setIsRegistering((prev) => !prev);
              }}
            >
              {isRegistering
                ? "Already have an account?"
                : "Don't have an account?"}
            </Button>
          </div>
        </Form>
      </Container>
      <DevTool control={control} /> {/* set up the dev tool */}
    </>
  );
}
