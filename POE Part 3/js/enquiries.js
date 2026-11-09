"use strict";

// Enquiry form elements

const enquiryForm =
    document.getElementById("enquiryForm");

const formResponse =
    document.getElementById("formResponse");

const submitButton =
    document.getElementById("submitButton");

const preferredDate =
    document.getElementById("preferredDate");


// Calculate today's local date

function getLocalDate() {

    const today = new Date();

    return today.getFullYear() + "-" +
        String(today.getMonth() + 1).padStart(2, "0") + "-" +
        String(today.getDate()).padStart(2, "0");

}


// Prevent selection of past dates

const localDate = getLocalDate();

preferredDate.min = localDate;


// Display form messages safely

function displayMessage(message, colour) {

    formResponse.textContent = message;

    formResponse.style.color = colour;

}


// Enquiry form validation

enquiryForm.addEventListener("submit", function(event) {

    // Prevent default form submission

    event.preventDefault();

    // Clear previous messages

    displayMessage("", "");

    // Get form values

    const fullName =
        document.getElementById("fullName").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const enquiryType =
        document.getElementById("enquiryType").value;

    const message =
        document.getElementById("message").value.trim();

    const selectedDate =
        preferredDate.value;


    // Validate full name

    if (
        fullName.length < 3 ||
        fullName.length > 60 ||
        !/^[A-Za-zÀ-ÿ '-]{3,60}$/.test(fullName)
    ) {

        displayMessage(
            "Please enter a valid full name.",
            "red"
        );

        return;

    }


    // Validate email address

    if (
        email.length > 100 ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {

        displayMessage(
            "Please enter a valid email address.",
            "red"
        );

        return;

    }


    // Validate phone number if provided

    if (
        phone !== "" &&
        !/^[+]?[0-9 ()-]{7,20}$/.test(phone)
    ) {

        displayMessage(
            "Please enter a valid phone number.",
            "red"
        );

        return;

    }


    // Validate enquiry category

    const validCategories = [
        "Menu and Products",
        "Restaurant Reservations",
        "Delivery Services",
        "Courses"
    ];

    if (!validCategories.includes(enquiryType)) {

        displayMessage(
            "Please select a valid enquiry option.",
            "red"
        );

        return;

    }


    // Validate enquiry message

    if (
        message.length < 10 ||
        message.length > 1000
    ) {

        displayMessage(
            "Your enquiry must contain between 10 and 1000 characters.",
            "red"
        );

        return;

    }


    // Validate preferred date

    if (
        selectedDate !== "" &&
        selectedDate < getLocalDate()
    ) {

        displayMessage(
            "Please select today or a future date.",
            "red"
        );

        return;

    }


    // Validation successful

    submitButton.disabled = true;

    submitButton.textContent = "Submitting...";


    // Simulate enquiry submission

    setTimeout(function() {

        displayMessage(
            "Thank you! Your enquiry has been validated. This is a demonstration and no actual enquiry has been sent.",
            "green"
        );

        // Reset the form

        enquiryForm.reset();

        // Restore minimum date

        preferredDate.min = getLocalDate();

        // Restore submit button

        submitButton.disabled = false;

        submitButton.textContent = "Submit Enquiry";

    }, 1000);

});
