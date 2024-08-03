"use client";

import { GoogleLogin } from "@react-oauth/google";
import React, { useCallback } from "react";

const GoogleLoginComponent: React.FC = () => {
  const handleLoginWithGoogle = useCallback(
    async (credentialResponse: any) => {},
    []
  );
  return (
    <div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
};

export default GoogleLoginComponent;
