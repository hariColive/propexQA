import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './Login.css';
import LoginList from '/icons/Login/loginlisticon.png'
import Arrow from '/icons/Login/arrowicon.png'
import Swal from "sweetalert2";

const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

const OtpVerification = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const phone = queryParams.get("phone");

  const [otp, setOtp] = useState(generateOTP());
  const [timer, setTimer] = useState(100);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  useEffect(() => {
    startResendTimer();
    alert(`OTP Sent: ${otp}`);
  }, []);

  const startResendTimer = () => {
    setIsResendDisabled(true);
    setTimer(100);
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          setIsResendDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const otpSchema = Yup.object({
    enteredOtp: Yup.string()
      .matches(/^\d{6}$/, "Enter a valid 6-digit OTP")
      .required("OTP is required"),
  });

  const verifyOtp = (values) => {
    if (values.enteredOtp === otp) {
      alert("Login Successful!");
      navigate("/");
    } else {
        Swal.fire({
            icon: "error",
            title: "Invalid OTP!",
            text: "Please enter the correct OTP.",
            confirmButtonColor: "#d33",
          });
    }
  };

  return (
    <>
    <div className='bg-[#fafafa]'>
          <div className='pt-40 pb-40'>
          <div class="grid grid-cols-5 gap-4 body-container">
          <div className="col-span-3">
          <h2 className='text-3xl font-bold'>Perks of Signing in</h2>
          <ul className="list-inside px-4 rounded-lg pl-0">
            <li className="mb-4 mt-4 flex items-center"><img src={LoginList} className='w-6 h-6' /><p className='pl-2 text-xl'> Reliable data trends & market-driven price discovery</p></li>
            <li className="mb-4 mt-4 flex items-center"><img src={LoginList} className='w-6 h-6' /><p className='pl-2 text-xl'> Real Estate Virtual Assistant with PropGPT</p></li>
            <li className="mb-4 mt-4 flex items-center"><img src={LoginList} className='w-6 h-6' /><p className='pl-2 text-xl'> Add favourite properties for i-Connects & site visits</p></li>
            <li className="mb-4 mt-4 flex items-center"><img src={LoginList} className='w-6 h-6' /><p className='pl-2 text-xl'> Discover the perfect matched buyers by listing properties with us</p></li>
            <li className="mb-4 mt-4 flex items-center"><img src={LoginList} className='w-6 h-6' /><p className='pl-2 text-xl'> Get Personalized & property update notifications</p></li>
          </ul>
          </div>
        <div className="col-span-2 px-8 py-4 bg-[#fff] rounded-md border-t-8 border-t-[#EF1284]">
        <h2 className="text-xl font-bold mb-4 flex gap-5 items-center"><a href='Login'><img src={Arrow} className='' /></a> Confirm your number</h2>
        <hr/>
        <p className="text-black mt-3 mb-3 text-base">Enter the Verification code(OTP) we’ve sent via sms to <strong>+91 {phone}</strong> <a className="text-[#EF1284]" href="/Login">Change Number</a></p>
    
        <Formik initialValues={{ enteredOtp: "" }} validationSchema={otpSchema} onSubmit={verifyOtp}>
        <Form>
          <div className="mb-3">
            <Field type="text" name="enteredOtp" className="border p-2 w-full" />
            <ErrorMessage name="enteredOtp" component="div" className="text-red-500" />
          </div>

          <button type="submit" className="bg-[#EF1284] text-white px-4 py-2 text-lg cursor-pointer rounded w-full">
            Verify OTP
          </button>

          <div className="mt-3">
            <p className="flex gap-2.5 items-center">Didn’t receive the OTP?
            <span
              onClick={() => {
                setOtp(generateOTP());
                startResendTimer();
                // alert(`New OTP Sent: ${otp}`);
                Swal.fire({
                    icon: "success",
                    title: "OTP Sent!",
                    text: `New OTP: ${otp}`,
                    confirmButtonColor: "#3085d6",
                  })
              }}
              className={`py-2 text-red-500 rounded ${isResendDisabled ? "text-gray-300" : "text-red-500"}`}
              disabled={isResendDisabled}
            >
              Resend OTP {isResendDisabled ? `(${timer}s)` : ""}
            </span>
            </p>
          </div>
        </Form>
      </Formik>
          </div>
          </div>
          </div>
      </div>
      </>

  );
};

export default OtpVerification;
