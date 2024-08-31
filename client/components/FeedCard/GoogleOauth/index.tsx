"use client";

import { graphqlClient } from "@/clients/api";
import { verifyUserGoogleTokenQuery } from "@/graphql/query/user";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import React, { useCallback } from "react";
import toast from "react-hot-toast";

const GoogleLoginComponent: React.FC = () => {

  const handleLoginWithGoogle = useCallback(
    async (cred: CredentialResponse) => {
      const googleToken = cred.credential;
      
      if (!googleToken) return toast.error(`Google token not found`);

      try {
        const { verifyGoogleToken } = await graphqlClient.request(
          verifyUserGoogleTokenQuery,
          {
            token: googleToken,
          }
        );

        toast.success("Verified successfully");
        console.log(verifyGoogleToken);

        if (verifyGoogleToken) {
          window.localStorage.setItem("__twibble_token", verifyGoogleToken);
        }
      } catch (error) {
        toast.error("Verification failed");
        console.error("Error verifying Google token:", error);
      }
    },
    []
  );

  return (
    <div>
      <GoogleLogin
        onSuccess={handleLoginWithGoogle}
        onError={() => {
          toast.error("Login Failed");
          console.log("Login Failed");
        }}
      />
    </div>
  );
};

export default GoogleLoginComponent;
