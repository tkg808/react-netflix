import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EmailForm from './EmailForm';

let container = null;

beforeEach(() =>
{
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() =>
{
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("EmailForm renders", () =>
{
  test("title renders", async () =>
  {
    render(
      <Router>
        <EmailForm
          emailInput={""}
          setEmailInput={() => { }}
          activeInput={false}
          setActiveInput={() => { }}
          validInput={false}
          setValidInput={() => { }}
        />
      </Router>)

    const title = await screen.findByText("Ready to watch?", { exact: false });
    expect(title).toHaveClass("email-form-title");
  })

  test("error renders when input is not valid", async () =>
  {
    render(
      <Router>
        <EmailForm
          emailInput={""}
          setEmailInput={() => { }}
          activeInput={false}
          setActiveInput={() => { }}
          validInput={false}
          setValidInput={() => { }}
        />
      </Router>)

    const error = await screen.findByText("Please enter a valid email", { exact: false });
    expect(error).toHaveClass("email-form-input-error-message");
  })

  test("error does not render when input is valid", async () =>
  {
    render(
      <Router>
        <EmailForm
          emailInput={""}
          setEmailInput={() => { }}
          activeInput={false}
          setActiveInput={() => { }}
          validInput={true}
          setValidInput={() => { }}
        />
      </Router>)

    const error = screen.queryByText("Please enter a valid email", { exact: false });

    expect(error).toBeNull();
  })

  test("button renders", async () =>
  {
    render(
      <Router>
        <EmailForm
          emailInput={""}
          setEmailInput={() => { }}
          activeInput={false}
          setActiveInput={() => { }}
          validInput={false}
          setValidInput={() => { }}
        />
      </Router>)

    const buttonSpan = screen.queryByText("Get Started", { exact: false });
    expect(buttonSpan).toBeVisible();
  })
})