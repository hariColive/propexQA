import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PhoneEntry = () => {
  const navigate = useNavigate();

  const schema = Yup.object({
    phone: Yup.string()
      .matches(/^[6-9]\d{9}$/, "Invalid phone number")
      .required("Phone number is required"),
  });

  const sendOtp = async (values) => {
    try {
      const res = await axios.post(
        "https://api.propex.ai/web/live/api/crm/otp",
        {
          MobileNumber: values.phone,
          Type: "Send",
        },
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.data?.Status === "Success") {
        Swal.fire("OTP Sent!", "Check your SMS for the OTP", "success");
        navigate(`/otp-verify?phone=${values.phone}`);
      } else {
        Swal.fire("Error", res.data?.Message || "Failed to send OTP", "error");
      }
    } catch (err) {
      Swal.fire("Server Error", err.message, "error");
    }
  };

  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Enter Phone Number</h2>
      <Formik
        initialValues={{ phone: "" }}
        validationSchema={schema}
        onSubmit={sendOtp}
      >
        <Form>
          <Field
            name="phone"
            placeholder="Enter phone number"
            className="border p-2 rounded w-full"
          />
          <ErrorMessage
            name="phone"
            component="div"
            className="text-red-500 text-sm"
          />
          <button
            type="submit"
            className="bg-pink-600 text-white px-4 py-2 rounded mt-4 w-full"
          >
            Send OTP
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default PhoneEntry;
