import SignupForm from "@/components/auth/SignupForm";
import Spinner from "@/components/common/Spinner";
import { Suspense } from "react";

const SignupPage = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Spinner />
        </div>
      }
    >
      <SignupForm />
    </Suspense>
  );
};

export default SignupPage;