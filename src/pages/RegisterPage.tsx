import { Logo } from "../components/Logo";
import { FormInput } from "../components/FormInput";
import { FormButton } from "../components/FormButton";

export const RegisterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <Logo className="w-44" />
      <div className="mt-10">
        <div className="px-5 h-3">
          <h2 className="text-center bg-white inline-block w-20 font-bold text-primary-700/50">
            Sign Up
          </h2>
        </div>
        <form
          className="flex flex-col border-2 rounded-md border-primary-400/30 w-80 pt-5 pl-5 pr-5 h-50 z-0"
          action=""
        >
          <FormInput label="Email" inputType="email" />
          <FormInput label="Username" inputType="" />
          <FormInput label="Password" inputType="password" />
          <FormInput label="Confirm password" inputType="email" />
          <div className="flex flex-col items-center">
            <FormButton text="Sign Up" />
          </div>
        </form>
        <h2 className="flex flex-row items-center justify-center mt-10 font-light text-primary-700">
          Have an account?
          <a className="ml-2 text-primary-500 font-bold" href="">
            Login
          </a>
        </h2>
      </div>
    </div>
  );
};