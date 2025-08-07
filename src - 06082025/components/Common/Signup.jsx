import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const phoneFromUrl = queryParams.get("phone") || "";
  const otpRefId = queryParams.get("otpRefId") || null;

  const schema = Yup.object({
    phone: Yup.string()
      .matches(/^[6-9]\d{9}$/, "Invalid phone number")
      .required("Phone number is required"),
    name: Yup.string().min(3, "Must be at least 3 characters").required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    option: Yup.string().required("Please select an option"),
  });

  const handleSignup = async (values) => {
    try {
      const payload = {
        Name: values.name,
        Email: values.email,
        Mobile: values.phone,
        UserType: values.option,
        PlatformId: 18,
        OTPReferenceId: otpRefId // Optional if direct signup
      };

      const res = await axios.post(
        "https://api.propex.ai/web/qa/CRMapi/PropertyCRM/CustomerDetailsInsertByOTP_V2",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.data?.Status?.toLowerCase() === "success") {
        Swal.fire("Success", "Account created successfully", "success");
        navigate("/login?phone=" + values.phone);
      } else {
        Swal.fire("Error", res.data?.Message || "Signup failed", "error");
      }
    } catch (err) {
      Swal.fire("Server Error", err.message, "error");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Complete Your Signup</h2>
      <Formik
        initialValues={{
          phone: phoneFromUrl,
          name: "",
          email: "",
          option: "",
        }}
        validationSchema={schema}
        onSubmit={handleSignup}
      >
        <Form>
          <div className="mb-4">
            <label>
              <Field type="radio" name="option" value="Buyer" /> Buyer
            </label>
            <label className="ml-4">
              <Field type="radio" name="option" value="Seller" /> Seller
            </label>
            <ErrorMessage name="option" component="div" className="text-red-500 text-sm" />
          </div>

          <Field name="phone" type="text" placeholder="Enter mobile number" className="border p-2 w-full rounded" />
          <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />

          <Field name="name" type="text" placeholder="Full Name" className="border p-2 w-full rounded mt-4" />
          <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />

          <Field name="email" type="email" placeholder="Email" className="border p-2 w-full rounded mt-4" />
          <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

          <button type="submit" className="bg-pink-600 text-white w-full py-2 rounded mt-4">
            Signup
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Signup;
