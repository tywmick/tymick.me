/**
 * @todo Convert old posts to markdown, add to _posts, create dynamic preview
 * list here
 */
import React from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";
import EssayPreview from "../components/essay-preview";

export default () => (
  <>
    <Head>
      <title>Blog – Ty Mick</title>
    </Head>

    <Container className="cap-width-lg">
      <h1 className="mb-4 mb-md-5">Blog</h1>

      <ul className="list-unstyled">
        <EssayPreview
          title="How to make a browser console log wait until after a page reload"
          href="/console-log-after-reload"
          date="June 1, 2020"
        >
          Ever wanted to create a browser console log that persists after a page
          reloads? Sure, that isn&rsquo;t a problem if you enable the
          &ldquo;preserve log&rdquo; option in your developer console, but hear
          me out&hellip;
        </EssayPreview>

        <EssayPreview
          title="COVID-19 social distancing will probably last longer than you think"
          subtitle="And what isolation means for nomads"
          href="/covid-19-social-distancing"
          date="March 26, 2020"
        >
          My goodness gracious, this coronavirus epidemic keeps looking worse
          every single day. From what I&rsquo;m reading lately, it now looks
          like the need for social distancing is going to extend for several
          more months, not just several more weeks. Most frightening, look at
          these maps of projected infection rates in the United States by July 1
          based on three different scenarios&hellip;
        </EssayPreview>

        <EssayPreview
          title="Asking your Uber driver #WhatsMyName is the exact opposite of what you should do"
          href="https://medium.com/@tywmick/whatsmyname-puts-drivers-at-risk-56285d6a56ac?source=friends_link&sk=bd1ad67637a4c0fe3298aec63f0e4c59"
          date="June 9, 2019"
        >
          The tragic death of Samantha Josephson on March 29, 2019, is extremely
          heart-wrenching and was <em>not at all</em> her fault. Her parents’
          mission to educate the world on rideshare safety in her memory is
          noble and absolutely worth pursuing. But unfortunately, their central
          recommendation and social media campaign of asking your driver “What’s
          my name?” when you get in the car is the exact opposite of what you
          should do and in fact puts rideshare drivers at risk&hellip;
        </EssayPreview>

        <EssayPreview
          title="Optimal investing"
          subtitle="Or, Betterment vs Wealthfront 2017"
          href="https://medium.com/@tywmick/simple-effective-investing-4268a1e6229c?source=friends_link&sk=216f469b906f63d7be4e271422facf98"
          date="July 29, 2017"
        >
          I’m a recovering mutual fund investor. Not that I ever thought that
          mutual funds were a good idea&mdash;I just didn’t think about it. But
          now I’ve done just the slightest bit of research and found out how to
          save at least hundreds of thousands of dollars in opportunity cost
          over the coming decades&hellip;
        </EssayPreview>
      </ul>
    </Container>
  </>
);