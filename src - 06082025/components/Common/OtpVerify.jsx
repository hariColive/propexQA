import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const OtpVerify = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const phone = queryParams.get("phone");
  const otpRefId = queryParams.get("otpRefId");

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerifyOtp = async () => {
    if (!otp) {
      Swal.fire("Error", "Please enter OTP", "error");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        "https://api.propex.ai/web/qa/api/crm/otp",
        {
          Mobile: phone,
          OTP: otp,
          TypeId: 3, // Keep consistent with backend expectation
          Type: "Verify",
          OTPReferenceId: otpRefId,
          SrcPath: "Login",
          PlatFormId: 18
        },
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.data?.Status?.toLowerCase() === "success") {
        Swal.fire("Verified!", "OTP verification successful", "success");
        navigate("/"); // ✅ Always redirect to homepage
      } else {
        Swal.fire("Error", res.data?.Message || "Invalid OTP", "error");
      }
    } catch (err) {
      Swal.fire("Server Error", err.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">OTP Verification</h2>
      <p className="mb-2">OTP sent to <strong>{phone}</strong></p>
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
        className="border p-2 w-full rounded"
      />
      <button
        onClick={handleVerifyOtp}
        className="bg-pink-600 text-white w-full py-2 rounded mt-4 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Verifying..." : "Verify OTP"}
      </button>
    </div>
  );
};

export default OtpVerify;
