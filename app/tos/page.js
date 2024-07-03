import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://caretutor.eu
// - Name: CareTutor
// - Contact information: gerwin@caretutor.eu
// - Description: An EdTech for foreign healthcare professionals relocating to the EU
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://caretutor.eu/privacy-policy
// - Governing Law: Germany
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: July 1, 2024

Welcome to CareTutor. 

These Terms & Services ("Terms") govern your use of our website located at https://caretutor.eu ("Site"). By accessing or using our Site, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use our Site.

1. Description of CareTutor

CareTutor is an EdTech platform designed for foreign healthcare professionals relocating to the EU. We provide online training and certification programs to help you transition smoothly into the EU healthcare system.

2. User Data and Privacy

We collect personal information, including your name, email, and payment information, to process orders and provide our services. We also collect non-personal data such as web cookies to enhance your browsing experience. For more details, please refer to our Privacy Policy at https://caretutor.eu/privacy-policy.

3. User Responsibilities

By using our Site, you agree to:

- Provide accurate and complete information during registration.
- Keep your account information secure and confidential.
- Comply with all applicable laws and regulations.

4. Payment and Refunds

All payments for our services must be made in accordance with the payment terms displayed during the purchase process. Refunds may be issued according to our refund policy, which is outlined in our Privacy Policy.

5. Intellectual Property

All content on our Site, including text, graphics, logos, and software, is the property of CareTutor or its content suppliers and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without our prior written permission.

6. Limitation of Liability

CareTutor shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of our Site or services.

7. Governing Law

These Terms are governed by the laws of Germany.

8. Updates to the Terms

We may update these Terms from time to time. If we make any changes, we will notify you by email. Your continued use of our Site after such updates constitutes your acceptance of the new Terms.

If you have any questions about these Terms, please contact us at gerwin@caretutor.eu.

Thank you for using CareTutor!`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
