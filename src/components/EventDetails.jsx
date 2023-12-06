"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { SlCalender } from "react-icons/sl";
import Button from "./Button";

const EventDetails = ({ data }) => {
  const [ticketCounter, setTicketCounter] = useState(1);
  const router = useRouter();

  return (
    <div>
      {/* Event Details */}
      <h1 className="text-3xl">Event Details</h1>
      <span className="bg-text-secondary h-[1px] w-full mt-4 mb-6 block" />

      {/* Date & Time */}
      <div className="flex items-center gap-3">
        <div className="p-4 bg-dark rounded-full">
          <SlCalender />
        </div>
        <div>
          <p className="text-text-secondary">Date and Time</p>
          <p>Sat, Apr 30, 2022 11:30 AM</p>
        </div>
      </div>

      <span className="bg-text-secondary h-[1px] w-full mt-4 mb-6 block" />

      {/* Location */}
      <div className="flex items-center gap-3">
        <div className="p-4 bg-dark rounded-full">
          <SlCalender />
        </div>
        <div>
          <p className="text-text-secondary">Location</p>
          <p>Kathmandu, Nepal</p>
          <p className="text-red-primary">View on map</p>
        </div>
      </div>

      <span className="bg-text-secondary h-[1px] w-full mt-4 mb-6 block" />

      {/* Select Tickets */}
      <h1 className="text-3xl">Select Tickets</h1>
      <div className="p-4 flex items-center justify-between">
        {/* Ticket Details */}
        <div>
          <p className="text-text-secondary">1x Ticket(s)</p>
          <p className="text-xl">USD $500.00</p>
        </div>
        {/* Ticket Counter */}
        <div className="flex items-center justify-center gap-4">
          <p
            className="py-1 px-3 bg-bg-primary rounded-md cursor-pointer"
            onClick={() =>
              ticketCounter > 1 && setTicketCounter((prev) => prev - 1)
            }
          >
            -
          </p>
          <p>{ticketCounter}</p>
          <p
            className="py-1 px-3 bg-red-primary rounded-md cursor-pointer"
            onClick={() =>
              ticketCounter < 10 && setTicketCounter((prev) => prev + 1)
            }
          >
            +
          </p>
        </div>
      </div>

      {/* Checkout button */}
      <Button
        buttonText={`Checkout for ${500 * ticketCounter}`}
        onclick={() =>
          router.push(
            `/checkout?title=${data?.title}&&tickets=${ticketCounter}&&price=${
              500 * ticketCounter
            }&&imgPath=${data?.poster_path}`
          )
        }
      />
    </div>
  );
};

export default EventDetails;
