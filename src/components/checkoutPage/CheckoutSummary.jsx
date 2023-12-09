"use client";

import { GoDotFill } from "react-icons/go";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/store/slices/userSlice";
import { useRouter } from "next/navigation";
import PDFView from "../Pdf";

const CheckoutSummary = ({ title, totalPrice, tickets, imgPath }) => {
  const userDetails = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const url = useSelector((state) => state.home.url);
  const baseUrl = url?.movieImg;

  const imgUrl =
    baseUrl && imgPath ? `${baseUrl}${imgPath}` : "/assets/fallback.png";

  const normalPrice = 500;
  const taxAmount = (totalPrice * 13) / 100;
  const discountAmount = 0;
  const total = parseInt(totalPrice) + taxAmount + discountAmount;

  useEffect(() => {
    dispatch(
      setUser({
        normalPrice,
        taxAmount,
        discountAmount,
        total,
        tickets,
        title,
        imgUrl,
      })
    );
  }, [dispatch, taxAmount, tickets, total, title, imgUrl]);
  const handleSubmit = () => {
    router.push(`/pdfView`);
  };
  return (
    <div className="text-text-primary">
      <h2 className="text-xl my-4 font-bold">Checkout Summary</h2>
      <span className="bg-text-secondary h-[1px] w-full block" />

      {/* Order description */}
      <div className="my-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="flex gap-2 items-center text-text-secondary">
          movie <GoDotFill size={12} />
          Kathmandu, Nepal
        </p>
      </div>
      <span className="bg-text-secondary h-[1px] w-full block" />

      {/* Prices */}
      <div className="my-6 flex flex-col gap-2">
        {/* Normal */}
        <p className="flex justify-between">
          <span className="text-text-secondary">Normal</span>
          <span>x{tickets}</span>
          <span>${normalPrice}.00</span>
        </p>

        {/* Subtotal */}
        <p className="flex justify-between">
          <span className="text-text-secondary">Subtotal</span>
          <span>${totalPrice}.00</span>
        </p>

        {/* Tax */}
        <p className="flex justify-between">
          <span className="text-text-secondary">Tax(13%)</span>
          <span>${taxAmount}.00</span>
        </p>

        {/* Discount */}
        <p className="flex justify-between">
          <span className="text-text-secondary">Discount(0%)</span>
          <span>${discountAmount}.00</span>
        </p>
      </div>
      <span className="bg-text-secondary h-[1px] w-full block" />

      {/* Total */}
      <div className="my-6 flex flex-col gap-2">
        <p className="flex justify-between">
          <span className="text-text-secondary">Total</span>
          <span className="flex items-center justify-center gap-2 text-xl">
            <span className="text-text-secondary text-sm">USD</span> {total}.00
          </span>
        </p>
      </div>

      
    </div>
  );
};

export default CheckoutSummary;
