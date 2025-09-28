# Challenge

**Full-Stack Development Test**

The purpose of this test is to evaluate your Backend and Frontend development skills. You must build a web application that allows users to upload a pre-formatted CSV file and display its data as cards on the website, with the ability to filter the data.

**Instructions**

* **You have 48 hours to complete the test.** Do NOT upload any code after submitting it in this system.
* **Your solution MUST include automated tests** for both frontend and backend. Good coverage and testing all functionality is part of the evaluation.
* You must submit your solution as a **PRIVATE GitHub repository** and invite **[projects@shawandpartners.com](mailto:projects@shawandpartners.com)** as a collaborator. You may also use the username **sp-tests**.
* **Do NOT create two repositories** — all code must be in the same GitHub repository. Create a `frontend` folder and a `backend` folder inside your repo and code directly in them.
* The Frontend and Backend must run simply by executing **`npm install` followed by `npm run dev`** (to run the app) or **`npm run test`** (to run all tests).
* **Do NOT add extra instructions or Docker commands in the readme.** If anything else needs to be run before starting the app, include it inside your development script.
* **JavaScript files** are only allowed in lib configuration files. All your code MUST be in **TypeScript** and fully **typed**.

**When finished, deploy your code to a hosting service** like [Render](https://render.com/) or [Vercel](https://vercel.com/). You will be asked to provide both your repository link and your deployed app link(s) at the end. Make sure you provide the root link without any paths.

---

**Frontend Requirements**

* Must run on **port 4000**, with everything under **"/"** as a **single-page application (SPA)** using **React**.
* A button to **select a CSV file** from the local machine and another button to **upload the selected file**.
* A **search bar** that allows users to search data inside the uploaded CSV file.
* The search bar must **update the displayed cards** to show only matching results.
* The uploaded CSV data must be displayed as **cards on the website**, with each card showing all data from a single row of the CSV.
* A **responsive layout** that works well on both desktop and mobile devices.
* **Clear and user-friendly error handling.**

**Backend Requirements**

* Must run on **port 3000**.
* The backend must be implemented as a **RESTful API** using **Node**. **(Do NOT use opinionated frameworks like Adonis or Nest).**
* **The backend must include the following endpoints:**

  * **[POST /api/files]**

    * Accepts a CSV file upload from the frontend and stores the data in a database or data structure. You must use the key `"file"` in the request body.
    * This route must return status 200 and an object with the key `"message"` and the value `"File uploaded successfully"`.
    * Or it must return status 500 and an object with the key `"message"` containing an error message.
  * **[GET /api/users]**

    * Allows the frontend to search through the uploaded CSV data. This route must accept a query parameter `?q=` for search terms and must search in EVERY column of the CSV. The filter must support partial matches and be case-insensitive.
    * This route must return status 200 and an object with the key `"data"` containing an array of objects.
    * Or it must return status 500 and an object with the key `"message"` containing an error message.

**Evaluation**

* Your solution will be evaluated on the following criteria:

  * Completeness of all required features and functionality.
  * Code quality and organization.
  * Quality and coverage of automated tests.
  * Friendliness and responsiveness of the frontend.
  * Performance and efficiency of the backend.
* Understanding the requirements is also part of the test. For any issues, contact **[hr@shawandpartners.com](mailto:hr@shawandpartners.com)** for help.

**Good luck with your test!**
