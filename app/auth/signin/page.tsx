import SigninForm from "@/components/auth/SigninForm";
import Spinner from "@/components/common/Spinner";
import { Suspense } from "react";

const SigninPage = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Spinner />
        </div>
      }
    >
      <SigninForm />
    </Suspense>
  );
};

export default SigninPage;