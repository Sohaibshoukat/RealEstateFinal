import React, { useRef } from "react";
import style from "./navbarPopUp.module.css";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Scheduler({sider,title}) {
  const [TourDate, setTourDate] = useState(null);
  const [TourTime, setTourTime] = useState(null);
  const [name, setname] = useState(null)
  const [Email, setEmail] = useState(null)
  const [PhoneNu, setPhoneNu] = useState(null)
  const [Message, setMessage] = useState(null)

  const [activeIndex, setActiveIndex] = useState(-1);
  const [activeTimeIndex, setActiveTimeIndex] = useState(-1);
  const [timeSlots, settimeSlots] = useState([]);

  const [Next, setNext] = useState(false);

  const [slidesToShow, setslidesToShow] = useState(3);
  const [Slidetoscroll, setSlidetoscroll] = useState(3);

  const form = useRef();

  const Schedule_Tour = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title , name, Email,PhoneNu, Message,TourTime,TourDate }),
      });

      if (response.ok) {
        alert('Email sent successfully');
      } else {
        throw new Error('Error sending email');
      }
    } catch (error) {
      console.error(error);
      alert('Error sending email');
    }


  };

  const handleSelectDate = (date, index) => {
    setTourDate(date);
    setActiveIndex(index);
  };

  const handleSelectTime = (date, index) => {
    setTourTime(date);
    setActiveTimeIndex(index);
  };

  useEffect(() => {
    if (sider == true) {
      setslidesToShow(2);
      setSlidetoscroll(2);
    } else {
      setslidesToShow(3);
      setSlidetoscroll(3);
    }
    settimeSlots(getTimeSlots());
  }, [sider]);

  const today = new Date();
  const endDate = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
  const days = Array.from(
    { length: 30 },
    (_, i) =>
      new Date(today.getFullYear(), today.getMonth(), today.getDate() + i)
  );

  const startHour = 11;
  const endHour = 19;
  const interval = 30;

  const getTimeSlots = () => {
    const timeSlots = [];
    let hour = startHour;
    let minute = 0;

    while (hour < endHour || (hour === endHour && minute === 0)) {
      const formattedHour = hour === 12 ? 12 : hour % 12;
      const period = hour < 12 ? "AM" : "PM";
      const formattedMinute = minute < 10 ? `0${minute}` : minute;

      const timeSlot = `${formattedHour}:${formattedMinute} ${period}`;
      timeSlots.push(timeSlot);

      minute += interval;
      if (minute >= 60) {
        minute = 0;
        hour += 1;
      }
    }

    return timeSlots;
  };

  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: slidesToShow,
    slidesToScroll: Slidetoscroll,
    autoplay: false,
    speed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const Form_settings = {
    dots: false,
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: false,
    speed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="tour_data">
        <h2>Schedule A Tour</h2>
        <p>Choose Your Preferred Day</p>
      </div>
      <div
        className={`${style.flxing_schduling}`}
        style={
          sider ? { flexDirection: "column", maxWidth: "350px" } : {}
        }
      >
        <div className={`${style.Date_picker}`}>
          <Slider {...settings} arrows={true}>
            {days &&
              days.map((date, index) => {
                const formattedDate = date.toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  weekday: "long",
                });
                const day = formattedDate.split(" ")[2];
                const weekday = formattedDate.split(",")[0].trim();
                const month = formattedDate.split(" ")[1];

                const isActive = index === activeIndex;

                return (
                  <div
                    className={`${style.date_card} ${
                      isActive && style.active_card
                    }`}
                    onClick={() => handleSelectDate(date, index)}
                  >
                    <div className={`${style.card_data}`}>
                      <p>{weekday}</p>
                      <h4>{day}</h4>
                      <p>{month}</p>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
        <div className={`${style.callToAction}`}>
          {/* <div className={`btn btn-thm ${style.btn_style}`}>Select A Date</div> */}
          <button
            type="button"
            class={`btn btn-thm ${style.btn_style}`}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Select A Date
          </button>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" style={{ maxWidth: "1000px" }}>
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Schedule A Tour
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => {
                      setNext(false);
                    }}
                  ></button>
                </div>
                {Next ? (
                  <div class={`modal-body ${style.Schedule_body}`}>
                    <div className={style.scheduleForm}>
                      <form action="">
                        <h2>Tell us a little about yourself</h2>
                        <div className={style.Form_group}>
                          <div class="form-floating">
                            <input
                              required
                              type="text"
                              class="form-control"
                              id="Name"
                              name="user_name"
                              placeholder="name@example.com"
                              onChange={(e)=>{setname(e.target.value)}}
                            />
                            <label for="Name">Name</label>
                          </div>
                          <div class="form-floating">
                            <input
                              required
                              type="email"
                              class="form-control"
                              id="Email"
                              name="user_email"
                              placeholder="name@example.com"
                              onChange={(e)=>{setEmail(e.target.value)}}
                            />
                            <label for="Email">Email address</label>
                          </div>
                          <div class="form-floating">
                            <input
                              required
                              type="text"
                              class="form-control"
                              id="phoneNo"
                              name="user_Nu"
                              placeholder="Password"
                              onChange={(e)=>{setPhoneNu(e.target.value)}}
                            />
                            <label for="phoneNo">Phone No</label>
                          </div>
                          <div class="form-floating">
                            <textarea
                              style={{ height: "auto" }}
                              rows="4"
                              cols="50"
                              class="form-control"
                              id="Note"
                              name="note"
                              placeholder="Password"
                              onChange={(e)=>{setMessage(e.target.value)}}
                            />
                            <label for="Note">Add Note</label>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div
                      className={style.Btn_next}
                      onClick={Schedule_Tour}>
                      <button className={`btn btn-thm`} onClick={Schedule_Tour}>
                        Schedule Meeting
                      </button>
                    </div>
                  </div>
                ) : (
                  <div class={`modal-body ${style.Schedule_body}`}>
                    <h2>Pick a date</h2>
                    <div className={style.Scheduler_slider}>
                      <Slider {...Form_settings} arrows={true}>
                        {days &&
                          days.map((date, index) => {
                            const formattedDate = date.toLocaleDateString(
                              "en-US",
                              {
                                day: "numeric",
                                month: "long",
                                weekday: "long",
                              }
                            );
                            const day = formattedDate.split(" ")[2];
                            const weekday = formattedDate.split(",")[0].trim();
                            const month = formattedDate.split(" ")[1];

                            const isActive = index === activeIndex;

                            return (
                              <div
                                className={`${style.date_card} ${
                                  isActive && style.active_card
                                }`}
                                onClick={() => handleSelectDate(date, index)}
                              >
                                <div className={`${style.card_data}`}>
                                  <p>{weekday}</p>
                                  <h4>{day}</h4>
                                  <p>{month}</p>
                                </div>
                              </div>
                            );
                          })}
                      </Slider>
                    </div>
                    <h2>Pick a time</h2>
                    <div className={style.Scheduler_slider}>
                      <Slider {...Form_settings} arrows={true}>
                        {timeSlots?.map((time, index) => {
                          const isActive = index === activeTimeIndex;
                          return (
                            <div
                              className={`${style.Time_card} ${
                                isActive && style.active_card
                              }`}
                              onClick={() => handleSelectTime(time, index)}
                            >
                              <div className={`${style.card_Time}`}>
                                <h5>{time}</h5>
                              </div>
                            </div>
                          );
                        })}
                      </Slider>
                    </div>
                    <div
                      className={style.Btn_next}
                      onClick={() => {
                        setNext(true);
                      }}
                    >
                      <button className={`btn btn-thm`}>Next</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={`btn btn-thm ${style.btn_style}`}>
            Add To Dashboard
          </div>
        </div>
      </div>
    </>
  );
}
