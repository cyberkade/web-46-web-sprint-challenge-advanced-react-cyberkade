import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {render(<CheckoutForm />)});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm />)
    const firstName = screen.getByLabelText('First Name:')
    userEvent.type(firstName, 'Kader')
    const lastName = screen.getByLabelText('Last Name:')
    userEvent.type(lastName, 'Griffith')
    const address = screen.getByLabelText('Address:')
    userEvent.type(address, '747 W 1560 N')
    const city = screen.getByLabelText('City:')
    userEvent.type(city, 'Saint George')
    const state = screen.getByLabelText('State:')
    userEvent.type(state, 'Utah')
    const zip = screen.getByLabelText('Zip:')
    userEvent.type(zip, '85790')
    const submit = screen.getByTestId('submit')
    userEvent.click(submit)
    expect(screen.getByTestId('successMessage'))
});
