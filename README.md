# In-Common

We are building a `web-app` for **InCommon**, an organisation that helps connect groups of young people with their older neighbours in retirement homes to learn and build friendships together.

# Table of contents

- [In-Common](#in-common)
- [Table of contents](#table-of-contents)
- [Team](#team)
- [What is the application?](#what-is-the-application)
- [Features](#features)
- [Tech Stack](#tech-stack)
    - [Dependencies](#dependencies)
- [Database Schema](#database-schema)
    - [Airtable: Database & Admin Control](#airtable-database--admin-control)
      - [Accounts](#accounts)
      - [Activity Ideas](#activity-ideas)
      - [Events](#events)
- [Installation](#installation)
- [Key Learnings](#key-learnings)
- [Additional Features](#additional-features)
- [Further Information](#further-information)
  - [Deploy on Vercel](#deploy-on-vercel)
  - [Learn More](#learn-more)

# Team

- [Adriana](https://github.com/aaadriana) :star:
- [Cemal](https://github.com/cemalokten) :star:
- [Barbara](https://github.com/0bubbles0) :star:
- [Alex](https://github.com/lopezelpesado) :star:
- [Mohamed](https://github.com/Alisyad9) :star:

# What is the application?

[(Back to top)](#table-of-contents)

The `web-app` will enable **InCommon** participants (Schools & Retirement homes) to organise events with each other, in the process removing InCommon from the planning process. The `web-app` aims to create a tool with the sole purpose of event planning, moving the correspondence away from email where invites can be lost or forgotten,

# Features

[(Back to top)](#table-of-contents)

What can you do?

# Tech Stack

[(Back to top)](#table-of-contents)

![](https://i.imgur.com/CrRaEI1.png)

### Dependencies

- date-io/date-fns
- emotion/react"
- emotion/styled
- mui/material
- nprogress
- react-dom
- airtable
- firebase

# Database Schema

[(Back to top)](#table-of-contents)

### Airtable: Database & Admin Control

#### Accounts

![](https://i.imgur.com/El1jSXR.png)

#### Activity Ideas

![](https://i.imgur.com/39QtUcW.png)

#### Events

![](https://i.imgur.com/5GyOHD5.png)

# Installation

[(Back to top)](#table-of-contents)

[(Back to top)](#table-of-contents)

To use this project please follow the steps below

- clone this repo on your device using the command `git clone`
- `cd` into the `nn-Common` folder
- Run `npm install` to install dependencies
- Create a `.env.local` file in the root folder. It should contain the following:

```
NEXT_PUBLIC_AIRTABLE_API_KEY=Airtable API Key
NEXT_PUBLIC_AIRTABLE_BASE_ID= Airtable Base ID
```

- Run `npm run dev` to run the app

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Key Learnings

[(Back to top)](#table-of-contents)

-

# Additional Features

[(Back to top)](#table-of-contents)

# Further Information

[(Back to top)](#table-of-contents)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

<!-- ## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages. -->
