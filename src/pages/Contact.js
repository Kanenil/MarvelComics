import React from "react";
import Layout from "../layout/Layout";
import InfoBlock from "../components/InfoBlock";
import Offices from "../components/Offices";
import FoundError from "../components/FoundError";

export default function Contact() {
  return (
    <>
      <Layout>
        <div className="relative">
          <div className="py-24 sm:py-32">
            <InfoBlock
              title="Get in touch"
              description="Get in touch with us and let's start a conversation! Whether you
            have a question, feedback, or a business inquiry, we're here to
            listen and help. You can reach us through phone, email, or
            social media, and our friendly team will be happy to assist you.
            We look forward to hearing from you!"
            />
          </div>
          <FoundError />
          <Offices />
        </div>
      </Layout>
    </>
  );
}
