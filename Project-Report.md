# **Apprenticeship project report**

The following sections are required. Your report is supposed to demonstrate a certain set of knowledge, skills and behaviours. These are listed alongside the relevant questions as quotes.

## **Introduction**

- **What are you building?**
  We are building a `web-app` for **InCommon**, an organisation that helps connect groups of young people with their older neighbours in retirement homes to learn and build friendships together.
  The `web-app` will enable **InCommon** participants (Schools & Retirement homes) to organise events with each other, in the process removing InCommon from the planning process. The `web-app` aims to create a tool with the sole purpose of event planning, moving the correspondence away from email where invites can be lost or forgotten,
  - The `web-app` will help InCommon participants (Schools and Retirement homes) organise events.
- **Why are you building it?**
  Currently **InCommon** is involved in the planning and organisation all of the events, but would like a way that participants (School teachers and Retirement home scheme managers) can organise events themselves; saving **InCommon**'s resources and allowing for more meetings to take place.

## **Project scope**

- What are you *not* building?

- How did you decide what features were important?

## **Project plan**

- How are you going to structure your sprints?

**Kanban**

We used the Kanban board to layout our sprint highlighting User Story, Stretch, Tech Spike and estimation (es).

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ef262b86-2707-4dc4-be49-e1825902c375/Untitled.png)

Each issues in the kanban board has got tasks. They can tick each one of them off

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1db4edc4-d176-4550-9fa0-3878b8b367a3/Untitled.png)

- What order are you going to build in?

- How did user research inform your plan?
- [ ] We had a product owner meetings across all the weeks of development
- [ ] Usability testing

## **Requirement analysis**

- How will you ensure your project is accessible to as many users as possible?
- Are there any legal or regulatory requirements you should consider?

## **Project learnings**

- Did your team work effectively?
- [ ] Selecting each task and breaking it into small pieces
- [ ] Console.log() each value to see its outcome
- [ ] Ticking each tasks in the issues
- [ ] Only merging branch with the main when issues has been resolved (vercel)

- What would you do differently next time?
- [ ] People are getting tired. In future playing games together could help us all.
- [ ] Making sure prettier is configured correctly

## **Research and findings**

### Method

- Interviews with Users were completed in 30 minute sessions with two memebers of the development team and one Product Owner present. The questions were asked by one member of the development team while the other took notes.
- Questions were non-leading with the aim of gaining as much insight as possible.

### Findings

- Colours used need to have good contrast (will check with constrast site)
- Breaking event creation down into the smallest parts was useful
- Simple UI with simple interactions
- Events viewed on calender (not in-scope for MVP)
- Not too much test on pages
- Minimise spe

Tech Spikes

### Firebase

- [Firebase](https://firebase.google.com/) is a platform from Google that provides tools for app development.
- We looked into using [Firebase's Auth](https://firebase.google.com/products/auth) product which provides easy authentication functionality with various authentication providers.
- You can sign up with an email and password, creating an account that is assigned a unique user ID.
- We'll be able to use this ID to link up with a database storing user data.
- Installation was very easy thanks to [Firebase's documentation](https://firebase.google.com/docs/auth/web/start?authuser=0).
- We were quickly able to implement authentication with passwords and emails on a [test page](https://in-common-f8ahx9ddi-tfb-in-common.vercel.app/firebase-test).
- We will continue using Firebase for the project.

### Material UI

- Material UI is a component library that includes many pre-built components that will allow us to build a functional and accessible react UI quickly.
- Customisation can be achieved by creating inline styles or by creating a `Theme.js`
- Functions and values can be passed in out and out of components
- Documentation and Code examples for each element are here: [https://mui.com/components/](https://mui.com/components/)

### Airtable

- Airtable is a platform where a user can store, organise and manage all their app data in different tables
  - For example: Admin can activate user accounts, connect partnered schools and retirement homes
- For this project, Airtable would be a great place for a non-coding Admin team to oversee all the information that passes through our new website.
- **Useful links**:
  - Airtable Features Webinar Tutorial: [https://www.airtable.com/get_started_faster?prefill_Source=Referral](https://www.airtable.com/get_started_faster?prefill_Source=Referral)
  - Airtable API Practice & Commands: [https://airtable.com/api](https://airtable.com/api)
  - Airtable Formulae: [https://support.airtable.com/hc/en-us/articles/203255215-Formula-field-reference](https://support.airtable.com/hc/en-us/articles/203255215-Formula-field-reference)
  - Set up in Next.js: [https://dev.to/finiam/next-js-and-airtable-a-tale-of-empowering-no-code-tools-cb9](https://dev.to/finiam/next-js-and-airtable-a-tale-of-empowering-no-code-tools-cb9)
- **Features of the Airtable Platform**:
  - A base has several tables
  - Can auto-toggle View modes: Table, Calendar, Timeline, Gallery, Kanban...
  - Can set columns to auto-formatted Text, Date, Labels, Link to other other Tables...
  - Can view & edit values from here
- **Airtable API**:
  - Handle Tables from webpage: Display, Add, Update, Delete
  - **Limits**: The API is limited to 5 requests per second per base. If you exceed this rate, you will receive a 429 status code and will need to wait 30 seconds before subsequent requests will succeed.
  - **Set up**:
  ```jsx
  $ npm install airtable

  //.env.local
  NEXT_PUBLIC_AIRTABLE_API_KEY=getThisFromUserDashboard
  NEXT_PUBLIC_AIRTABLE_BASE_ID=sameForWholeBase

  //access the table "Schedule"
  import Airtable from "airtable";

  const base = new Airtable({
    apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
  }).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

  const tableSchedule = base("📆 Schedule");
  ```

## **Project outcomes**

- Were your assumptions right or wrong?

## **Recommendations and conclusions**

- What features would you prioritise to build next?
- Was the project a success?

## **Software Development Lifecycle stages**

### **Planning**

- What roles did your team take on?
  > Explain the roles and responsibilities of all people working within the software development lifecycle, and how they relate to the project (K2)
- Did these roles help your team work effectively?
  > Outline how teams work effectively to produce software and how to contribute appropriately (K6)Compare and contrast the requirements of a software development team, and how they would ensure that each member (including themselves) were able to make a contribution (K6)

### **Analysis**

- What might be the intended and unintended consequences of building this product?

### **Design**

- How did you plan a user experience?
- What technical decisions did you make?
  - Server-render vs client-render vs both
  - Relational or non-relational or no DB
  - Self-hosted or platform-as-a-service
  - Frontend first vs DB first
- Did you create a technical specification?
  > Review methods of software design with reference to functional/technical specifications and apply a justified approach to software development (K11, S11, S12)

### **Implementation/Build**

- How did you ensure your code was good?
  > Create logical and maintainable code to deliver project outcomes, explaining their choice of approach. (S1)
- What interesting technical problems did you have to solve?
  > Outline and apply the rationale and use of algorithms, logic and data structures. (K9, S16)
- How did you debug issues that arose?
  > Apply structured techniques to problem solving to identify and resolve issues and debug basic flaws in code (S7)

### **Test**

- How did you verify your project worked correctly?
  > Identify and create test scenarios which satisfy the project specification (S6)
- Did writing automated tests catch any bugs?
  > Analyse unit testing results and review the outcomes, correcting errors. (S4)

### **Deploy**

- Where/how did you deploy your application?
  > Review and justify their contribution to building, managing and deploying code into the relevant environment in accordance with the project specification (S10)
- What problems did you encounter during deployment?

### **Maintain**

- Is it easy for someone make changes to the codebase?
- Could a new person quickly be onboarded to contribute?

---

- Establishes a logical thinking approach to areas of work which require valid reasoning and/or justified decision making (B2)
- Describes how they have maintained a productive, professional and secure working environment throughout the project activity (B3)

## Learning Firebase

[https://firebase.google.com/docs/auth/web/start](https://firebase.google.com/docs/auth/web/start). Documentation guide

initialising the Firebase

```sql
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMrfgJc74CjiTNRQrEsrvMznNZXvzROug",
  authDomain: "tfb-in-common.firebaseapp.com",
  projectId: "tfb-in-common",
  storageBucket: "tfb-in-common.appspot.com",
  messagingSenderId: "582050428605",
  appId: "1:582050428605:web:c3c29fc9ab7745e5cfe9d4",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
```

Using firebase auth function to create use ad login use: createUserWithEmailAndPassword,
signInWithEmailAndPassword, onAuthStateChanged and signOut.

## Deployment issues

- When you .map data, each child needs an individual `key={child.id}`. Skipping this works in the development environment, but Vercel deployment to production environment will fail
- We encounter an issue where we change a file we had deleted, This caused a problem on vercel deployement. The error was correct all the website is currently live
