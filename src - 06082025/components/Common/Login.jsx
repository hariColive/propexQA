import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const schema = Yup.object({
    phone: Yup.string()
      .matches(/^[6-9]\d{9}$/, "Invalid phone number")
      .required("Phone number is required"),
  });

  const handleLogin = async (values) => {
    try {
      // Step 1: Check if user exists
      const checkUser = await axios.post(
        "https://api.propex.ai/web/qa/CRMapi/PropertyCRM/GetCustomerDetailsByMobile",
        { Mobile: values.phone, PlatformId: 18 },
        { headers: { "Content-Type": "application/json" } }
      );

      const isExisting =
        checkUser.data?.Status?.toLowerCase() === "success" &&
        Array.isArray(checkUser.data?.Data?.CustomerDetails) &&
        checkUser.data.Data.CustomerDetails.length > 0;

      if (!isExisting) {
        // New user → go to signup directly
        navigate(`/signup?phone=${values.phone}`);
        return;
      }

      // Step 2: Send OTP for existing user
      const otpRes = await axios.post(
        "https://api.propex.ai/web/live/api/crm/otp",
        {
          Mobile: values.phone,
          TypeId: 1,
          Type: "Send",
          SrcPath: "Login",
          PlatFormId: 18,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      if (otpRes.data?.Status?.toLowerCase() === "success") {
        Swal.fire("OTP Sent!", "Check your SMS for the OTP", "success");
        navigate(
          `/otp-verify?phone=${values.phone}&isNew=0&otpRefId=${otpRes.data.OTPReferenceId}`
        );
      } else {
        Swal.fire("Error", otpRes.data?.Message || "Failed to send OTP", "error");
      }
    } catch (err) {
      Swal.fire("Server Error", err.message, "error");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Login / Signup</h2>
      <Formik
        initialValues={{ phone: "" }}
        validationSchema={schema}
        onSubmit={handleLogin}
      >
        <Form>
          <Field
            name="phone"
            type="text"
            placeholder="Enter mobile number"
            className="border p-2 w-full rounded"
          />
          <ErrorMessage
            name="phone"
            component="div"
            className="text-red-500 text-sm"
          />
          <button
            type="submit"
            className="bg-pink-600 text-white w-full py-2 rounded mt-4"
          >
            Continue
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
