import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://caretutor.eu
// - Name: CareTutor
// - Description: An online training and certification platform for foreign healthcare professionals relocating to the EU.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: gerwin@caretutor.eu

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
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
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: 2024-07-01

Thank you for visiting CareTutor ("we," "us," or "our"). This Privacy Policy outlines how we collect, use, and protect your personal and non-personal information when you use our website located at https://shipfa.st (the "Website").

By accessing or using the Website, you agree to the terms of this Privacy Policy. If you do not agree with the practices described in this policy, please do not use the Website.

1. Introduction

Welcome to CareTutor. We are committed to protecting your personal information and your right to privacy. This privacy policy explains how we collect, use, disclose, and safeguard your information. If you have any questions or concerns about this privacy policy, or our practices with regards to your personal information, please contact us at gerwin@caretutor.eu.

2. Information We Collect

We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, or when you participate in activities on the website. The personal information we collect includes:

Name
Email address
Payment information
We also collect non-personal data such as web cookies to enhance your browsing experience on our site.

3. How We Use Your Information

We use the information we collect or receive for the following purposes:

To facilitate order processing.
To manage user accounts.
To send administrative information to you.
4. Legal Basis for Processing Personal Data

We process your personal information based on the following legal grounds:

Your consent.
The performance of a contract between you and CareTutor.
Compliance with legal obligations.
5. Data Sharing

We do not share your personal information with any other parties.

6. Data Retention

We will retain your personal information only for as long as is necessary for the purposes set out in this privacy policy.

By using CareTutor, you consent to the terms of this Privacy Policy.`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
