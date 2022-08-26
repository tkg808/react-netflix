import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginForm from './LoginForm';

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

describe("LoginForm renders", () =>
{
  test("title renders", async () =>
  {
    render(
      <Router>
        <LoginForm />
      </Router>
    )

    const matches = screen.getAllByText("Sign In");
    expect(matches[0]).toHaveClass("login-form-title");
  })

  test("user contact label renders", () =>
  {
    render(
      <Router>
        <LoginForm />
      </Router>
    )

    const label = screen.getByText("Email or phone number");
    expect(label).toBeVisible();
  })

  test("user password label renders", () =>
  {
    render(
      <Router>
        <LoginForm />
      </Router>
    )

    const label = screen.getByText("Password");
    expect(label).toBeVisible();
  })

  test("button renders", async () =>
  {
    render(
      <Router>
        <LoginForm />
      </Router>
    )

    const matches = screen.getAllByText("Sign In");
    expect(matches[1]).toHaveClass("login-form-submit-button");
  })

  test("sign up link renders", () =>
  {
    render(
      <Router>
        <LoginForm />
      </Router>
    )

    const link = screen.getByText("Sign up now", { exact: false });
    expect(link).toBeVisible();
  })

  test("recaptcha renders", () =>
  {
    render(
      <Router>
        <LoginForm />
      </Router>
    )

    const recaptcha = screen.getByText("recaptcha", { exact: false });
    expect(recaptcha).toBeVisible();
  })
})