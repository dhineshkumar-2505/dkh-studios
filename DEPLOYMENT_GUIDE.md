# Deployment Guide for DKH Studios

This guide will help you deploy your website to **Vercel**, which is the best platform for React/Vite applications. It's free, fast, and easy.

## Prerequisites
*   A [GitHub](https://github.com/) account.
*   Your project code pushed to a GitHub repository.

## Step 1: Push Code to GitHub
If you haven't pushed your code to GitHub yet, follow these steps in your terminal:

1.  Initialize Git (if not already done):
    ```bash
    git init
    ```
2.  Add all files:
    ```bash
    git add .
    ```
3.  Commit changes:
    ```bash
    git commit -m "Ready for deployment"
    ```
4.  Go to GitHub.com and create a **New Repository** (name it `dkh-studios`).
5.  Copy the commands to "push an existing repository from the command line" and run them. They look like this:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/dkh-studios.git
    git branch -M main
    git push -u origin main
    ```

## Step 2: Deploy on Vercel
1.  Go to [https://vercel.com/signup](https://vercel.com/signup) and sign up with **GitHub**.
2.  Once logged in, click **"Add New..."** -> **"Project"**.
3.  You will see a list of your GitHub repositories. Find `dkh-studios` and click **"Import"**.
4.  **Configure Project:**
    *   **Framework Preset:** It should auto-detect `Vite`. If not, select `Vite`.
    *   **Root Directory:** `./` (default).
    *   **Build Command:** `npm run build` (default).
    *   **Output Directory:** `dist` (default).
5.  **Environment Variables:**
    *   If you are using EmailJS, you can add your keys here so they are hidden from the public code.
    *   Name: `VITE_EMAILJS_SERVICE_ID`, Value: `your_service_id`
    *   (You would need to update your code to use `import.meta.env.VITE_EMAILJS_SERVICE_ID` to use this feature).
6.  Click **"Deploy"**.

## Step 3: Finalize
1.  Vercel will build your site. Wait about a minute.
2.  Once complete, you will get a live URL (e.g., `https://dkh-studios.vercel.app`).
3.  **Test your site:** Open the link on your phone and computer to make sure everything looks perfect.

## Custom Domain (Optional)
If you bought a domain (like `dkhstudios.com`):
1.  Go to your Vercel Project Dashboard.
2.  Click **"Settings"** -> **"Domains"**.
3.  Enter your domain name and click **"Add"**.
4.  Follow the instructions to update your DNS records (usually adding an A record or CNAME) at your domain registrar (GoDaddy, Namecheap, etc.).
