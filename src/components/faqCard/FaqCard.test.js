import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import FaqCard from './FaqCard';
import { questionsData } from './faqCardData';

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

describe("FaqCard renders", () =>
{
  test("title renders", async () =>
  {
    render(
      <Router>
        <FaqCard />
      </Router>)

    const title = await screen.findByText("Frequently Asked Questions");
    expect(title).toBeVisible();
  })

  test("all questions render", async () =>
  {
    render(
      <Router>
        <FaqCard />
      </Router>)

    for (let data of questionsData)
    {
      expect(await screen.findByText(data.question)).toBeVisible();
    }
  })

  test("correct answer opens when question is clicked", async () =>
  {
    render(
      <Router>
        <FaqCard />
      </Router>)

    fireEvent.click(screen.getByText(questionsData[0].question));
    expect(screen.getByText(questionsData[0].answers[0], { exact: false })).toBeVisible();
  })

  test("correct answers open when there are multiple answers for a question", async () =>
  {
    render(
      <Router>
        <FaqCard />
      </Router>)

    fireEvent.click(screen.getByText(questionsData[0].question));
    expect(screen.getByText(questionsData[0].answers[0], { exact: false })).toBeVisible();
    expect(screen.getByText(questionsData[0].answers[1], { exact: false })).toBeVisible();
  })

  test("only one answer opens at a time", async () =>
  {
    render(
      <Router>
        <FaqCard />
      </Router>)

    fireEvent.click(await screen.findByText(questionsData[0].question));
    expect(screen.queryByText(questionsData[0].answers[0], { exact: false })).toBeVisible();

    fireEvent.click(await screen.findByText(questionsData[3].question));
    expect(screen.getByText(questionsData[3].answers[0], { exact: false })).toBeVisible();

    waitFor(() => expect(screen.queryByText(questionsData[0].answers[0], { exact: false })).not.toBeVisible());
  })
})