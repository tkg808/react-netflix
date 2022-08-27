import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

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

const landingFooterLinks =
  [
    { text: "FAQ", link: "" },
    { text: "Help Center", link: "" },
    { text: "Account", link: "" },
    { text: "Media Center", link: "" },
    { text: "Investor Relations", link: "" },
    { text: "Jobs", link: "" },
    { text: "Redeem Gift Cards", link: "" },
    { text: "Buy Gift Cards", link: "" },
    { text: "Ways to Watch", link: "" },
    { text: "Terms of Use", link: "" },
    { text: "Privacy", link: "" },
    { text: "Cookie Preferences", link: "" },
    { text: "Corporate Information", link: "" },
    { text: "Contact Us", link: "" },
    { text: "Speed Test", link: "" },
    { text: "Legal Notices", link: "" },
    { text: "Only on Netflix", link: "" },
  ];

describe("Footer renders", () =>
{
  test("top row renders", () =>
  {
    render(
      <Router>
        <Footer footerLinks={landingFooterLinks} />
      </Router>
    )

    const phone = screen.getByText("1-844-505-2993");
    expect(phone).toBeVisible();
  })

  test("all links render", () =>
  {
    render(
      <Router>
        <Footer footerLinks={landingFooterLinks} />
      </Router>
    )

    const LENGTH = landingFooterLinks.length;
    const lastLink = screen.getByText(landingFooterLinks[LENGTH - 1].text);
    expect(lastLink).toBeVisible();
  })
})