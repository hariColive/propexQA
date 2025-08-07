import axios from "axios";

const API_URL = "https://your-api.com/api"; // Replace with your API

export const sendOTP = async (phone) => {
  return axios.post(`${API_URL}/send-otp`, { phone });
};

export const verifyOTP = async (phone, otp) => {
  return axios.post(`${API_URL}/verify-otp`, { phone, otp });
};
