import React from "react";

import LoginForm from "@/components/LoginForm";

export type LoginPageProps = {}

const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <main className="container mx-auto px-4">
      <div className="h-screen flex justify-center items-center">
        <div className="w-1/4 border-solid border-2 border-black p-5">
          <div>
            <p className="mb-5 text-xl">Login</p>
          </div>
          <LoginForm />
        </div>
      </div>
    </main>
  );
};
export default LoginPage;