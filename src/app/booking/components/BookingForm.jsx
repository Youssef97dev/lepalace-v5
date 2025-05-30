"use client";
import React from "react";
import PhoneInput from "react-phone-input-2";
import { useTranslation } from "react-i18next";
import "react-phone-input-2/lib/style.css";

const optionsTime = [
  "19:00",
  "19:15",
  "19:30",
  "19:45",
  "20:00",
  "20:15",
  "20:30",
  "20:45",
  "21:00",
  "21:15",
  "21:30",
  "21:45",
  "22:00",
  "22:15",
  "22:30",
  "22:45",
  "23:00",
  "23:15",
  "23:30",
  "23:45",
  "00:00",
  "00:15",
  "00:30",
  "00:45",
  "01:00",
  "01:15",
  "01:30",
  "01:45",
  "02:00",
];

const optionsGuests = [
  "1 Guest",
  "2 Guests",
  "3 Guests",
  "4 Guests",
  "5 Guests",
  "6 Guests",
  "7 Guests",
  "8 Guests",
  "9 Guests",
  "10 Guests",
  "11 Guests",
  "12 Guests",
];

const BookingForm = () => {
  const { t } = useTranslation();
  return (
    <form className="w-full flex flex-col justify-center items-center gap-4 text-[15.08px] leading-[21.12px] text-primary py-10 px-11  lg:px-8">
      <h1 className="text-[23px] lg:text-[40px] lg:leading-[48px] leading-[36px] font-azahra">
        {t("booking.title")}
      </h1>
      <div className="w-full flex lg:flex-row flex-col justify-center items-center gap-3">
        <div className="w-full flex flex-col justify-center items-start gap-1">
          <label htmlFor="firstName">{t("contact.firstname")}</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="w-full rounded-md p-2 focus:outline-none"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-1">
          <label htmlFor="lastName">{t("contact.lastname")}</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="w-full rounded-md p-2 focus:outline-none"
          />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-start gap-1">
        <label htmlFor="email">{t("contact.email")}</label>
        <input
          type="email"
          name="email"
          id="email"
          className="w-full rounded-md p-2 focus:outline-none"
        />
      </div>
      <div className="w-full flex lg:flex-row flex-col justify-center items-center gap-3">
        <div className="w-full flex flex-col justify-center items-start gap-1">
          <label htmlFor="phone">{t("contact.phone")}</label>
          <PhoneInput
            id="phone"
            country={"ma"}
            inputClass="w-full"
            //value={this.state.phone}
            //onChange={(phone) => this.setState({ phone })}
          />
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-1">
          <label htmlFor="guests">{t("booking.guests")}</label>
          <select
            name="guests"
            id="guests"
            className="w-full rounded-md p-2 focus:outline-none bg-white"
          >
            {optionsGuests.map((guest, i) => (
              <option value={guest} key={i}>
                {guest}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-start gap-1">
        <label htmlFor="reservationDate">{t("booking.reservationDate")}</label>
        <input
          type="date"
          name="reservationDate"
          id="reservationDate"
          className="w-full rounded-md p-2 focus:outline-none bg-white"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-start gap-1">
        <label htmlFor="time">{t("booking.time")}</label>
        <select
          name="time"
          id="time"
          className="w-full rounded-md p-2 focus:outline-none bg-white"
        >
          {optionsTime.map((time) => (
            <option value={time} key={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      <button className="py-4 px-6 border border-primary mr-auto cursor-pointer uppercase">
        {t("booking.request")}
      </button>
    </form>
  );
};

export default BookingForm;
