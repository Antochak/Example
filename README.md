Frontend Test Task - Simple Two-Page Website

This project is a simple two-page website created as part of a frontend developer test task. It includes a main page and a contact page with a form, and a basic backend for handling form submissions.

Live Site
[https://splendid-marzipan-c7eaf4.netlify.app]

Project Overview

Main Functionality
Responsive Design: Both pages are fully responsive, adapting seamlessly to mobile and desktop screens.
Sticky Header & Footer: Each page includes a sticky header and footer for consistent navigation.
Embedded YouTube Video: The main page has an embedded YouTube video with lazy loading for optimized performance.
Contact Form with Backend Integration: The contact form on the contact page submits data to a backend that logs input to the console and returns a personalized confirmation message.
Technical Stack
Framework: Next.js
Component Library: MUI 5
Form Management: React Hook Form
Styling: CSS-in-JS via MUI
Backend: Basic API route in Next.js to handle form submissions


Project Setup Instructions

Prerequisites
Node.js and npm installed
Installation
Clone this repository.
1. git clone [repository-url]. 
2. Install dependencies.
  yarn 
3. Run the development server. 
  yarn dev

Hosting Details
This project is deployed on Netlify
https://splendid-marzipan-c7eaf4.netlify.app

Styling, SEO, and Performance Strategies

Styling
CSS-in-JS: MUI's styled API was used for component styling, enabling dynamic theming and modular CSS.

Responsive Layout: The mobile layout was manually optimized to maintain usability.

SEO Optimization
Meta Tags:
The project includes SEO meta tags for Core Web Vitals and social media preview tags (Open Graph, Twitter cards).
Heading Hierarchy: A logical heading structure was followed for accessibility and SEO.


Performance Optimization
Lazy Loading for YouTube Video: The embedded YouTube video uses lazy loading to improve Largest Contentful Paint (LCP).
Static Generation (SSG): Implemented static generation for the main and contact pages for faster loading.


Backend Details

The backend is implemented as an API route in Next.js. When the form is submitted, the API route logs the data to the console and responds with a message like: "Thank you for your interest, [Name]".
Additional Notes

Assumptions Made
Placeholder form validation was added for required fields.
The design mockups were treated as wireframes, so exact colors and styles were adjusted for consistency and accessibility.
