# EmailJS Template Setup Guide

This guide explains exactly how to put your premium HTML design into EmailJS.

## Part 1: Copy The Code
**Copy the entire code block below.** This is your premium email template.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to DKH Studios</title>
    <style>
        /* Reset & Base Styles */
        body { margin: 0; padding: 0; background-color: #0a0a0a; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; -webkit-font-smoothing: antialiased; }
        table { border-spacing: 0; border-collapse: collapse; }
        td { padding: 0; }
        img { border: 0; }
        /* Container */
        .wrapper { width: 100%; table-layout: fixed; background-color: #0a0a0a; padding-bottom: 60px; }
        .main-table { background-color: #141414; margin: 0 auto; width: 100%; max-width: 600px; border-spacing: 0; font-family: sans-serif; color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); border: 1px solid #333; }
        /* Header */
        .header { background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%); padding: 40px 0; text-align: center; border-bottom: 3px solid #ff0033; }
        .logo { font-size: 28px; font-weight: 800; color: #ffffff; text-decoration: none; letter-spacing: 2px; }
        .logo span { color: #ff0033; }
        /* Content */
        .content { padding: 40px 40px; }
        .greeting { font-size: 24px; font-weight: 600; margin-bottom: 20px; color: #ffffff; }
        .message { font-size: 16px; line-height: 1.6; color: #cccccc; margin-bottom: 30px; }
        .highlight { color: #ff0033; font-weight: 600; }
        /* Button */
        .btn-container { text-align: center; margin: 35px 0; }
        .btn { background: linear-gradient(45deg, #ff0033, #cc0000); color: #ffffff; padding: 15px 35px; text-decoration: none; border-radius: 50px; font-weight: bold; font-size: 16px; display: inline-block; box-shadow: 0 4px 15px rgba(255, 0, 51, 0.3); }
        /* Features Grid */
        .features { width: 100%; margin-top: 30px; border-top: 1px solid #333; padding-top: 30px; }
        .feature-row td { padding-bottom: 20px; vertical-align: top; }
        .feature-icon { color: #ff0033; font-size: 20px; padding-right: 15px; font-weight: bold; }
        .feature-text { color: #999; font-size: 14px; line-height: 1.4; }
        /* Footer */
        .footer { background-color: #000000; padding: 30px; text-align: center; font-size: 12px; color: #666666; border-top: 1px solid #222; }
        .social-links { margin-bottom: 20px; }
        .social-link { color: #999; text-decoration: none; margin: 0 10px; font-size: 14px; }
        .footer-text { margin-bottom: 10px; }
        /* Mobile */
        @media screen and (max-width: 600px) {
            .content { padding: 30px 20px; }
            .greeting { font-size: 20px; }
            .message { font-size: 15px; }
            .btn { padding: 12px 25px; width: 80%; }
        }
    </style>
</head>
<body>
    <div class="wrapper">
        <table class="main-table">
            <tr>
                <td class="header">
                    <div class="logo">DKH <span>STUDIOS</span></div>
                </td>
            </tr>
            <tr>
                <td class="content">
                    <div class="greeting">Hello {{to_name}},</div>
                    <div class="message">
                        Thank you for choosing <span class="highlight">DKH Studios</span>. We are thrilled to have you on board!
                    </div>
                    <div class="message">
                        We have successfully received your project registration. Our team of experts is already reviewing your details.
                    </div>
                    <div class="message" style="border-left: 3px solid #ff0033; padding-left: 15px; font-style: italic; color: #fff;">
                        "We will reach you soon at the earliest to kickstart your innovation journey."
                    </div>
                    <div class="btn-container">
                        <a href="https://dkhstudios.com" class="btn">Visit Website</a>
                    </div>
                    <table class="features">
                        <tr class="feature-row">
                            <td class="feature-icon">01</td>
                            <td class="feature-text"><strong style="color: #fff; display: block; margin-bottom: 5px;">Expert Guidance</strong>Comprehensive mentorship from industry leaders.</td>
                        </tr>
                        <tr class="feature-row">
                            <td class="feature-icon">02</td>
                            <td class="feature-text"><strong style="color: #fff; display: block; margin-bottom: 5px;">Premium Quality</strong>Top-tier development standards for every project.</td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td class="footer">
                    <div class="social-links">
                        <a href="#" class="social-link">LinkedIn</a> • <a href="#" class="social-link">Twitter</a> • <a href="#" class="social-link">Instagram</a>
                    </div>
                    <div class="footer-text">&copy; 2025 DKH Studios. All rights reserved.<br>Innovate. Build. Succeed.</div>
                </td>
            </tr>
        </table>
    </div>
</body>
</html>
```

## Part 2: Paste Into EmailJS

1.  **Log in** to your [EmailJS Dashboard](https://dashboard.emailjs.com/).
2.  Click on **"Email Templates"** in the left sidebar.
3.  Click **"Create New Template"**.
4.  **IMPORTANT:** Look at the toolbar above the email editor. Find the button that looks like **`< >`** (Source Code). It is usually on the far right or left of the toolbar.
5.  **Click the `< >` Source Code button.** A window will pop up showing HTML code.
6.  **Delete everything** inside that window.
7.  **Paste** the code you copied from Part 1 above.
8.  Click **"OK"** or **"Save"** on the popup window.
9.  You should now see the beautiful DKH Studios design in the editor!
10. **Save the Template:** Click the **"Save"** button at the top right of the page.

## Part 3: Get The ID
1.  After saving, click the **"Settings"** tab (next to the "Design" tab at the top).
2.  Copy the **Template ID** (e.g., `template_xxxxx`).
3.  Use this ID in your `RegistrationForm.jsx` file.
