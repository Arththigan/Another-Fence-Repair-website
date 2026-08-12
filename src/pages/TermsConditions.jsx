import LegalPage, { LegalSection } from '../components/LegalPage.jsx'
import { business } from '../data/business.js'

export default function TermsConditions() {
  return (
    <LegalPage title="Terms & Conditions" effectiveDate="January 19, 2025" lastUpdated="July 9, 2026">
      <p className="text-sm leading-relaxed text-charcoal-600">
        Welcome to {business.name}. By accessing this website or using our services, you agree to
        be bound by these Terms and Conditions. If you do not agree with any part of these terms,
        please do not use our website or services.
      </p>

      <LegalSection number="1" title="Business Identity">
        <p>
          These Terms and Conditions govern your use of the services provided by {business.name},
          located at {business.address}. Contact: {business.phone} | {business.email}.
        </p>
      </LegalSection>

      <LegalSection number="2" title="Age Requirement (18+)">
        <p>
          By using this website or enrolling in our services, including SMS messaging, you confirm
          that you are at least 18 years of age. Our SMS program is not directed to individuals
          under 18.
        </p>
      </LegalSection>

      <LegalSection number="3" title="Terminology">
        <p>
          &ldquo;Client,&rdquo; &ldquo;You,&rdquo; and &ldquo;Your&rdquo; refers to the user of
          this website. &ldquo;The Company,&rdquo; &ldquo;We,&rdquo; &ldquo;Our,&rdquo; and
          &ldquo;Us&rdquo; refers to {business.name}.
        </p>
      </LegalSection>

      <LegalSection number="4" title="SMS Messaging Terms of Service">
        <p className="font-semibold text-charcoal-800">4a. Program Description &amp; Message Types</p>
        <p>
          By providing your phone number and checking the SMS consent checkbox on our contact
          forms, you agree to receive recurring automated text messages from {business.name}.
          Messages may include:
        </p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Free estimate confirmations and scheduling notifications</li>
          <li>Appointment reminders and project status updates</li>
          <li>Customer support and service follow-up communications</li>
          <li>Promotional offers and seasonal announcements related to our fence repair services</li>
        </ul>

        <p className="font-semibold text-charcoal-800">4b. Message Frequency</p>
        <p>
          Message frequency varies based on your service activity and interactions with us. You
          may receive up to 4–8 messages per month. Frequency may increase during active service
          periods.
        </p>

        <p className="font-semibold text-charcoal-800">4c. Message &amp; Data Rates</p>
        <p>
          Message and data rates may apply for any messages sent to you from us and to us from
          you. Charges are determined by your mobile carrier and your individual service plan.
          {' '}{business.name} is not responsible for any carrier charges.
        </p>

        <p className="font-semibold text-charcoal-800">4d. How to Opt Out (STOP)</p>
        <p>
          You can opt out of receiving SMS messages at any time by replying STOP to any message we
          send. After opting out, you will receive a one-time confirmation message and will no
          longer receive SMS messages from us unless you re-enroll.
        </p>

        <p className="font-semibold text-charcoal-800">4e. How to Get Help (HELP)</p>
        <p>For help with our SMS program, reply HELP to any message or contact us directly at:</p>
        <p>
          Phone: {business.phone}
          <br />
          Email: {business.email}
        </p>

        <p className="font-semibold text-charcoal-800">4f. Carrier Liability Disclaimer</p>
        <p>
          Mobile carriers are not liable for delayed or undelivered messages. {business.name}
          {' '}cannot guarantee delivery of SMS messages. Delivery of information through SMS may be
          subject to your mobile carrier&apos;s capability and coverage area.
        </p>

        <p className="font-semibold text-charcoal-800">4g. Supported Carriers</p>
        <p>
          Our SMS program is supported by all major U.S. wireless carriers including AT&amp;T,
          Verizon, T-Mobile, and Sprint. Not all carriers are supported for all messages.
        </p>
      </LegalSection>

      <LegalSection number="5" title="Cookies">
        <p>
          We use cookies in accordance with our{' '}
          <a href="/privacy-policy" className="font-semibold text-fence-600 hover:text-fence-700">
            Privacy Policy
          </a>{' '}
          to improve user experience and website functionality.
        </p>
      </LegalSection>

      <LegalSection number="6" title="Intellectual Property & License">
        <p>
          Unless otherwise stated, {business.name} owns the intellectual property rights for all
          content on this website. You may not copy, reproduce, republish, sell, or redistribute
          any material without prior written permission.
        </p>
      </LegalSection>

      <LegalSection number="7" title="Comments & User Content">
        <p>
          {business.name} reserves the right to monitor and remove any comments or user-generated
          content on our platforms that are inappropriate, offensive, or violate these terms.
        </p>
      </LegalSection>

      <LegalSection number="8" title="Content Liability">
        <p>
          We are not responsible for content that appears on external websites linking to us. You
          agree to defend and protect {business.name} against any claims arising from your website
          or digital properties.
        </p>
      </LegalSection>

      <LegalSection number="9" title="Disclaimer">
        <p>
          To the maximum extent permitted by applicable law, {business.name} excludes all
          warranties, representations, and conditions relating to our website and services. We are
          not liable for any loss or damage (including, without limitation, damage for loss of
          business, profits, or revenue) arising from the use of our website or services.
        </p>
      </LegalSection>

      <LegalSection number="10" title="Changes to These Terms">
        <p>
          We reserve the right to update these Terms and Conditions at any time. Changes will be
          posted on this page with a revised &ldquo;Last Updated&rdquo; date. Continued use of our
          website or services constitutes acceptance of the updated terms.
        </p>
      </LegalSection>

      <LegalSection number="11" title="Contact Information">
        <p>For questions about these Terms and Conditions, please contact us:</p>
        <p>
          Company: {business.name}
          <br />
          Address: {business.address}
          <br />
          Phone: {business.phone}
          <br />
          Email: {business.email}
        </p>
      </LegalSection>
    </LegalPage>
  )
}
