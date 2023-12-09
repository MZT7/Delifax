"use client";
import { useState, useEffect } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import Alert from "@/components/Ads/alert";
import jwt_decode from "jwt-decode";
import useAxios from "@/components/hooks/useAxios";
import { useDispatch } from "react-redux";

import {
  getUser,
  startLoading,
  stopLoading,
  getToken,
} from "@/reduxStore/features/auth/authSlice";

export async function OnLogin(e) {
  // const api = useAxios();
  try {
    // const response = await fetch(
    //   "https://dev-backend-service.azurewebsites.net/company/auth/sign-in",
    //   {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       email: e.email_address,
    //       password: e.password,
    //       // expiresInMins: 60, // optional
    //     }),
    //   }
    // );
    const response = await api.post("company/auth/sign-in", {
      email: e.email_address,
      password: e.password,
      // expiresInMins: 60, // optional
    });
    console.log("test", response);
    if (!response.statusText === "OK") {
      throw new Error(response.status);
    }
    Alert("Login Successful", "success");
    const jsonData = await response.data;
    const userData = jwt_decode(jsonData.token);
    const token = jsonData.token; //
    // dispatch(getToken(jsonData.token));

    // localStorage.setItem("token", JSON.stringify(jsonData.token));
    // localStorage.setItem("userData", JSON.stringify(userData));

    return { userData, token };
  } catch (err) {
    if (err.message == 400) {
      Alert("Invalid", "error");
    } else if (err.message == 401) {
      Alert("Missing Username or Password", "error");
    } else if (err.message == 403) {
      Alert("Session expired", "error");
    } else if (err.message == 404) {
      Alert("Not Found", "error");
    } else {
      Alert("Network error", "error");
    }
    return err;
  }
  // console.log("error", error);
}

export async function onRegister(formData) {
  try {
    const response = await fetch(
      "https://dev-backend-service.azurewebsites.net/company/auth/create-company",
      {
        method: "POST",
        // mode: "no-cors",
        // headers: {
        //   // "Content-Type": "application/json",
        //   // "Content-Type": "multipart/form-data",
        //   // "Content-Type": "application/x-www-form-urlencoded",
        // },
        body: formData,
      }
    );

    console.log("response", response);
    if (!response.ok) {
      throw new Error(response.status);
    }
    Alert("Registration Successful", "success");
    const jsonData = await response.json();
    // console.log("jsonData", jsonData);
    // localStorage.setItem("token", res.data.token);
    // localStorage.setItem("userData", JSON.stringify(jsonData));
    return jsonData;
  } catch (err) {
    // console.log("err", err);
    if (err.message == 400) {
      Alert("Missing Username or Password", "error");
    } else if (err.message == 401) {
      Alert("Unauthorized", "error");
    } else {
      Alert("Network error", "error");
    }
    return err;
  }
}

export async function ForgotPass(formData) {
  // console.log("yes", formData);
  try {
    const response = await fetch(
      "https://dev-backend-service.azurewebsites.net/company/auth/forgot-password",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData,
        }),
      }
    );

    // console.log("response", response);
    if (!response.ok) {
      throw new Error(response.status);
    }
    Alert("Email sent", "success");
    const jsonData = await response.json();
    return jsonData;
  } catch (err) {
    // console.log("err", err);
    if (err.message == 400) {
      Alert("Not sent", "error");
    } else if (err.message == 401) {
      Alert("Unauthorized", "error");
    } else if (err.message == 404) {
      Alert("Not Found", "error");
    } else {
      Alert("Network error", "error");
    }
    return err;
  }
}
export async function ChangePass(formData) {
  console.log("yes", formData);
  try {
    const response = await fetch(
      "https://dev-backend-service.azurewebsites.net/company/auth/create-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "text/plain",
        },
        body: JSON.stringify(formData),
      }
    );

    // console.log("response", response);
    if (!response.ok) {
      throw new Error(response.status);
    }
    Alert("Password changed", "success");
    const jsonData = await response.json();
    return jsonData;
  } catch (err) {
    // console.log("err", err);
    if (err.message == 400) {
      Alert("Not sent", "error");
    } else if (err.message == 401) {
      Alert("Unauthorized", "error");
    } else if (err.message == 404) {
      Alert("Not Found", "error");
    } else {
      Alert("Network error", "error");
    }
    return err;
  }
}
