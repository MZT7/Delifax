"use client";
import { useState, useEffect } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import Alert from "@/components/Ads/alert";
import jwt_decode from "jwt-decode";

export async function onLogin(e) {
  try {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "kminchelle",
        password: "0lelplR",
        // expiresInMins: 60, // optional
      }),
    });
    if (!response.ok) {
      throw new Error(response.status);
    }
    Alert("Login Successful", "success");
    const jsonData = await response.json();
    // localStorage.setItem("token", res.data.token);
    localStorage.setItem("userData", JSON.stringify(jsonData));

    return response;
  } catch (err) {
    if (err.message == 400) {
      Alert("Missing Username or Password", "error");
    } else if (err.message == 401) {
      Alert("Unauthorized", "error");
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
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
          // "Content-Type": "multipart/form-data",
        },
        body: formData,
      }
    );
    // const data = response.json();
    // const jsonData = await response.json();
    console.log("response", response);
    if (response.ok !== false) {
      throw new Error(response.status);
    }
    Alert("Registration Successful", "success");
    const jsonData = await response.json();
    console.log("jsonData", jsonData);
    // localStorage.setItem("token", res.data.token);
    localStorage.setItem("userData", JSON.stringify(jsonData));
    return response;
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
