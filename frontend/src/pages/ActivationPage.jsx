import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { server } from "../server";
import axios from "axios";

const ActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   if (activation_token) {
  //     const activationEmail = async () => {
  //       try {
  //         const res = await axios.post(`${server}/user/activation`, {
  //           activation_token,
  //         });
  //         console.log(res.data.message);
  //       } catch (error) {
  //         console.log(error.response.data.message);
  //         setError(true);
  //       }
  //     };
  //     activationEmail();
  //   }
  // }, [activation_token]);

  useEffect(() => {
    if (activation_token) {
      const sendRequest = async () => {
        await axios
          .post(`${server}/user/activation`, {
            activation_token,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            setError(true);
          });
      };
      sendRequest();
    }
  }, [activation_token]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <p>Your token is expired!</p>
      ) : (
        <p>Your account has been created suceessfully!</p>
      )}
    </div>
  );
};

export default ActivationPage;
