# EmailJS Setup Guide for DKH Studios

Follow these steps to configure the automated premium email system.

## Step 1: Create an Account
1.  Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2.  Click **"Sign Up Free"** and create an account.
3.  Verify your email if required and log in to your dashboard.

## Step 2: Get Your Service ID
1.  In the EmailJS Dashboard, click on the **"Email Services"** tab on the left sidebar.
2.  Click the **"Add New Service"** button.
3.  Select **"Gmail"** (or your preferred email provider).
4.  Click **"Connect Account"** and login with the Gmail account you want to send emails FROM (e.g., `dkhstudiosbuisness@gmail.com`).
5.  Click **"Create Service"**.
6.  You will see a **Service ID** (e.g., `service_z3x9q2a`). **Copy this ID**.

## Step 3: Get Your Template ID
1.  Click on the **"Email Templates"** tab on the left sidebar.
2.  Click **"Create New Template"**.
3.  **Subject Line:** Change the subject to something like: `Welcome to DKH Studios, {{to_name}}!`
4.  **Content:**
    *   Click the **"Source Code"** button (icon looks like `< >`) in the toolbar.
    *   **Delete everything** currently in the box.
    *   **Paste** the entire content of the `public/email_template.html` file from your project.
    *   Click **"OK"** or **"Save"**.
5.  **Save Template:** Click the **"Save"** button at the top right.
6.  Click on the **"Settings"** tab (next to "Design" at the top of the template editor).
7.  You will see a **Template ID** (e.g., `template_k4l2m1n`). **Copy this ID**.

## Step 4: Get Your Public Key
1.  Click on your **Name/Avatar** in the top right corner of the dashboard.
2.  Select **"Account"** from the dropdown menu.
3.  Click on the **"API Keys"** or **"General"** tab.
4.  Look for **"Public Key"** (it starts with `user_...` or just a random string). **Copy this Key**.

## Step 5: Update Your Code
1.  Open the file `src/components/RegistrationForm.jsx` in your code editor.
2.  Scroll down to around **line 120** (inside the `handleSubmit` function).
3.  Uncomment the code block and replace the placeholders with your copied keys:

```javascript
// BEFORE
// const SERVICE_ID = 'service_xyz'
// const TEMPLATE_ID = 'template_xyz'
// const PUBLIC_KEY = 'user_xyz'

// AFTER (Example)
const SERVICE_ID = 'service_z3x9q2a'      // Paste Step 2 ID here
const TEMPLATE_ID = 'template_k4l2m1n'    // Paste Step 3 ID here
const PUBLIC_KEY = 'user_987654321'       // Paste Step 4 Key here

await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
    to_name: formData.fullName,
    to_email: formData.email,
    message: "We will reach you soon at the earliest."
}, PUBLIC_KEY)
```

4.  **Save the file.**

## Testing
1.  Go to your website's **"Start Your Project"** page.
2.  Fill out the form with a real email address.
3.  Submit the form.
4.  Check that email address inbox. You should receive the premium HTML email!
