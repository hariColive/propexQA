import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

const ScheduleVisit = ({ leadSource, LPId, mobNumValidate, otpVerify }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [selected, setSelected] = useState("Locality");
  const [date, setDate] = useState(new Date());
  const [timeSlots, setTimeSlots] = useState([]);

  const dropdownOptions = [
    "AECS Layout", "Bellandur", "Bommanahalli", "BTM Layout", "CV Raman Nagar",
    "Doddanekundi", "Electronic City", "Hebbal", "HSR Layout", "JP Nagar",
    "Koramangala", "Mahadevapura", "Manyata Tech Park", "Marathahalli", "Mysore Road",
    "Nagawara", "Outer Ring Road", "Sarjapura Road", "Silk Board", "Whitefield",
    "ITPL", "Kundalahalli", "Munnekolala", "Spice Garden", "Kadubeesanahalli",
    "HAL Road", "KR Puram", "Horamavu", "Hennur", "Yeshwanthpur", "Yelahanka", "Others"
  ];

  const fetchTimeSlots = async (selectedDate) => {
    const formattedDate = selectedDate.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }).replace(/ /g, '-');

    const input = { Date: formattedDate };
    try {
      const response = await axios.post("https://api.propex.ai/web/qa/CRMapi/PropertyCRM/GetScheduleVisitDays", input);
      if (response.data?.Status === "success") {
        setTimeSlots(response.data?.Data || []);
      } else {
        setResponseMessage(response.data?.Message);
      }
    } catch (error) {
      setResponseMessage("Failed to fetch time slots.");
    }
  };

  useEffect(() => {
    fetchTimeSlots(date);
  }, [date]);

  const onSubmit = async (data) => {
    setIsSubmitted(true);
    try {
      const response = await axios.post("https://api.propex.ai/web/qa/CRMapi/PropertyCRM/LandingPageLeadInsert", data);
      if (response.data?.Status !== "success") {
        setResponseMessage(response.data?.Message);
      }
    } catch (error) {
      setResponseMessage("Submission failed.");
    }
  };

  useEffect(() => {
    reset();
    setIsSubmitted(false);
  }, [reset]);

  return (
    <div>
      <style>
        {`
          .react-date-picker__wrapper {
            border: none;
          }
          .react-date-picker__inputGroup__input {
            appearance: none;
            cursor: pointer;
            pointer-events: none;
          }
          .react-date-picker__clear-button, .react-date-picker__calendar-button {
            display: none;
          }
        `}
      </style>
      <div className="bg-white p-6 rounded-lg border-1 border-solid border-[#dee2e6] shadow-lg max-w-md mx-auto mt-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Schedule a Visit</h2>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-4">
            <input {...register("fname", { required: "Please enter your name" })}
              className="w-full border-b-2 border-pink-500 px-3 py-2"
              placeholder="Full name*"
            />
            {errors.fname && <p className="text-red-500 text-sm">{errors.fname.message}</p>}
          </div>

          <div className="mb-4">
            <input {...register("mobileno", {
              required: "Please enter your mobile number",
              pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10 digit mobile number" }
            })}
              className="w-full border-b-2 border-pink-500 px-3 py-2"
              placeholder="Phone*"
              maxLength={10}
            />
            {errors.mobileno && <p className="text-red-500 text-sm">{errors.mobileno.message}</p>}
          </div>

          <div className="mb-4">
            <input {...register("email", {
              required: "Please enter your email",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address" }
            })}
              className="w-full border-b-2 border-pink-500 px-3 py-2"
              placeholder="Email ID*"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <select {...register("locality", { required: "Please select a locality" })}
              className="w-full border-b-2 border-pink-500 px-3 py-2">
              <option value="" hidden>{selected}</option>
              {dropdownOptions.map((loc, index) => (
                <option key={index} value={loc}>{loc}</option>
              ))}
            </select>
            {errors.locality && <p className="text-red-500 text-sm">{errors.locality.message}</p>}
          </div>

          <div className="mb-4 flex gap-4">
            <DatePicker onChange={setDate} value={date} format="dd-MMM-y" className="w-1/2" />
            <select {...register("slVisitSlots", { required: "Please select Time slot" })}
              className="w-1/2 border-b-2 border-pink-500 px-3 py-2">
              <option value="" hidden>Choose Time</option>
              {timeSlots.map((slot, idx) => (
                <option key={idx} value={slot.TimeId}>{slot.TimeString}</option>
              ))}
            </select>
          </div>
          {errors.slVisitSlots && <p className="text-red-500 text-sm">{errors.slVisitSlots.message}</p>}

          <div className="mt-6">
            <button type="submit" className="bg-[#F31175] text-white w-full py-2 rounded">Submit</button>
            <input type="hidden" {...register("leadSource")} value={leadSource} />
            <input type="hidden" {...register("LandingPageId")} value={LPId} />
            <input type="hidden" {...register("mobile_number_validated")} value={mobNumValidate} />
            <input type="hidden" {...register("isotpverificationrequired")} value={otpVerify} />
          </div>
        </form>
      ) : (
        <div className="text-center">
          <img className="mx-auto w-[70px]" src='/images/babylon/tick-img.png' alt='tick' />
          <p className="mt-5 text-base font-medium">
            Sit back tight!!<br />
            We've captured your interest!<br />
            You are going to receive a sweet call from our PropExpert really soon
          </p>
        </div>
      )}
      </div>
    </div>
  );
};

export default ScheduleVisit;
