import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProfilesGate from './ProfilesGate';

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

describe("ProfilesGate renders", () =>
{
  test("title renders", async () =>
  {
    render(
      <Router>
        <ProfilesGate />
      </Router>
    )

    const title = screen.getByText("Who's watching?");
    expect(title).toBeVisible();
  })

  test("manage profiles link renders", () =>
  {
    render(
      <Router>
        <ProfilesGate />
      </Router>
    )

    const profilesLink = screen.getByText("Manage Profiles");
    expect(profilesLink).toBeVisible();
  })
})