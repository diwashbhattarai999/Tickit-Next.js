"use client";

import React, { useEffect, useState } from "react";
import {
  Page,
  Text,
  View,
  Image,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { useSelector } from "react-redux";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#E4E4E4",
    width: "100vw",
    height: "100vh",
  },
  body: {
    paddingHorizontal: 20,
    fontSize: "14px",
    color: "#97ABC0",
  },
  nav: {
    backgroundColor: "#E14658",
    height: "48px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  logo: {
    width: "120px",
    paddingLeft: 10,
  },
  invoice: {
    marginVertical: 20,
  },
  title: {
    color: "#000000",
    marginBottom: 5,
  },
  ticket: {
    border: "1pt solid #97ABC0",
    padding: 10,
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  table: {
    border: 1,
    borderRadius: 4,
    padding: 4,
    marginVertical: 10,
  },
  tableHeader: {
    marginTop: 20,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  tableColumn: {
    marginVertical: 20,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  total: {
    fontSize: 24,
    color: "#000",
    textAlign: "right",
    marginVertical: 14,
  },
  poster: {
    width: 100,
    height: 100,
    borderRadius: 4,
  },
  cutouts: {},
});

// Create Document Component
const PDF = ({ data }) => {
  // Get the current date
  const currentDate = new Date();

  // Extract year, month, and day
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(currentDate.getDate()).padStart(2, "0");

  // Create the formatted date string
  const formattedDate = `${year}-${month}-${day}`;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Navbar Section */}
        <View style={styles.nav}>
          <Image src="/assets/Logo.png" alt="Logo" style={styles.logo} />
        </View>

        {/* Body */}
        <View style={styles.body}>
          {/* Invoice */}
          <View style={styles.invoice}>
            <Text style={styles.title}>Invoice</Text>
            <View style={styles.flex}>
              <Text>Invoice to {data?.fullName}</Text>
              <Text>Invoice ID: YCCURW-000000</Text>
            </View>
          </View>

          {/* Address */}
          <View style={styles.address}>
            <View style={styles.flex}>
              <Text>
                {data?.address}
                {data?.city && `, ${data.city}`}
              </Text>
              <Text>Order Date:{formattedDate}</Text>
            </View>
            <Text>
              {data?.state}
              {data?.country && `, ${data.country}`}
            </Text>
          </View>

          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text>#</Text>
              <Text>Event Details</Text>
              <Text>Event Type</Text>
              <Text>Ticket</Text>
              <Text>Unit Price</Text>
              <Text>Discount</Text>
              <Text>Total</Text>
            </View>
            <View style={styles.tableColumn}>
              <Text>1</Text>
              <Text>{data?.title}</Text>
              <Text>movie</Text>
              <Text>{data?.tickets}</Text>
              <Text>{data?.normalPrice}</Text>
              <Text>{data?.discountAmount}</Text>
              <Text>{data?.total}</Text>
            </View>
            <Text
              style={{ height: 1, width: "100%", backgroundColor: "#97ABC0" }}
            ></Text>
            <Text style={styles.total}>Invoice Total: USD ${data?.total}</Text>
          </View>

          {/* Tickets Cutout Section */}

          <View style={styles.section}>
            <Text style={{ fontSize: 16, marginVertical: 20 }}>
              Your Tickets
            </Text>
            {Array.from({ length: data?.tickets }, (_, index) => (
              <View
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                }}
              >
                <Text
                  style={{
                    border: 2,
                    borderStyle: "dotted",
                    marginVertical: 4,
                  }}
                ></Text>
                <View style={styles.ticket}>
                  <Image
                    src={data?.imgUrl}
                    alt={data?.title}
                    style={styles.poster}
                  />
                  <View>
                    <Text style={{ color: "#000" }}>{data?.title}</Text>
                    <Text>Sat, Apr 30, 2022 11:30 AM</Text>
                    <Text>Ticket x1</Text>
                    <Text>
                      Total:
                      <Text style={{ color: "#000" }}>
                        ${data?.normalPrice}.00
                      </Text>
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};
const PDFView = () => {
  const userDetails = useSelector((state) => state.user);

  return (
    <PDFViewer style={{ width: "100vw", height: "100vh" }}>
      <PDF data={userDetails} />
    </PDFViewer>
  );
};

export default PDFView;
