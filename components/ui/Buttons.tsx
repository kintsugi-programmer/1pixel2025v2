'use client'
import styled from 'styled-components';
import Link from "next/link";

export const ContactUs = () => {
  return (
    <Link href="mailto:1pxdesignconf@iiitd.ac.in?subject=Enquiry: Here&body=Body Here">
      <StyledWrapper2>
        <button className="learn-more">
          Contact Us
        </button>
      </StyledWrapper2>
    </Link>
  );
};

export const Archive = () => {
  return (
    <Link href="/">
      <StyledWrapper2>
        <button className="learn-more">
          Archive
        </button>
      </StyledWrapper2>
    </Link>
  );
};

export const JoinCommunity = () => {
  return (
    <Link href="https://chat.whatsapp.com/ISykFouJbWzLFfAnz5PHrv">
      <StyledWrapper2>
        <button className="learn-more">
          Join Community
        </button>
      </StyledWrapper2>
    </Link>
  );
};

export const AboutButton = () => {
  return (
    <Link href="#about">
      <StyledWrapper2>
        <button className="learn-more">
          Learn More
        </button>
      </StyledWrapper2>
    </Link>
  );
};

export const LearnMore = () => {
  return (
    <Link href="#about">
      <StyledWrapper2>
        <button className="learn-more">
          Learn More
        </button>
      </StyledWrapper2>
    </Link>
  );
};

export const Spons = () => {
  return (
    <Link href="mailto:1pxdesignconf@iiitd.ac.in?subject=Enquiry: Here&body=Body Here">
      <StyledWrapper2>
        <button className="learn-more">
          Call For Sponsors
        </button>
      </StyledWrapper2>
    </Link>
  );
};

export const GetTicketsButton = () => {
  return (
    <Link href=" https://forms.gle/TwhBvZASkkjsuGVN6">
      <StyledWrapper2>
        <button className="learn-more">
          Get Tickets
        </button>
      </StyledWrapper2>
    </Link>
  );
};

const StyledWrapper2 = styled.div`
  button {
   position: relative;
   display: inline-block;
   cursor: pointer;
   outline: none;
   border: 0;
   vertical-align: middle;
   text-decoration: none;
   font-family: inherit;
  
   font-size: 15px;
  }

  button.learn-more {
   font-weight: 600;
   color: #382b22;
   text-transform: uppercase;
   padding: 1.25em 2em;
   background: #fff0f0;
   border: 2px solid #b18597;
   border-radius: 0.75em;
   -webkit-transform-style: preserve-3d;
   transform-style: preserve-3d;
   -webkit-transition: background 150ms cubic-bezier(0, 0, 0.58, 1), -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1);
   transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1), -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1);
  }

  button.learn-more::before {
   position: absolute;
   content: '';
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background: #f9c4d2;
   border-radius: inherit;
   -webkit-box-shadow: 0 0 0 2px #b18597, 0 0.625em 0 0 #ffe3e2;
   box-shadow: 0 0 0 2px #b18597, 0 0.625em 0 0 #ffe3e2;
   -webkit-transform: translate3d(0, 0.75em, -1em);
   transform: translate3d(0, 0.75em, -1em);
   transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1), -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1), -webkit-box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
  }

  button.learn-more:hover {
   background: #ffe9e9;
   -webkit-transform: translate(0, 0.25em);
   transform: translate(0, 0.25em);
  }

  button.learn-more:hover::before {
   -webkit-box-shadow: 0 0 0 2px #b18597, 0 0.5em 0 0 #ffe3e2;
   box-shadow: 0 0 0 2px #b18597, 0 0.5em 0 0 #ffe3e2;
   -webkit-transform: translate3d(0, 0.5em, -1em);
   transform: translate3d(0, 0.5em, -1em);
  }

  button.learn-more:active {
   background: #ffe9e9;
   -webkit-transform: translate(0em, 0.75em);
   transform: translate(0em, 0.75em);
  }

  button.learn-more:active::before {
   -webkit-box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2;
   box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2;
   -webkit-transform: translate3d(0, 0, -1em);
   transform: translate3d(0, 0, -1em);
  }`;

