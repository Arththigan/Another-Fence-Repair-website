import LegalPage, { LegalSection } from '../components/LegalPage.jsx'
import { business } from '../data/business.js'

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" effectiveDate="January 19, 2025" lastUpdated="July 9, 2026">
      <p className="text-sm leading-relaxed text-charcoal-600">
        {business.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to
        protecting your privacy and personal information. This Privacy Policy explains how we
        collect, use, disclose, and safeguard your data in compliance with applicable U.S. data
        protection laws, including the California Consumer Privacy Act (CCPA) and the General Data
        Protection Regulation (GDPR) where applicable.
      </p>

      <LegalSection number="1" title="Information We Collect">
        <p>
          We may collect the following categories of personal information when you contact us,
          request a quote, submit a web form, or use our services:
        </p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Full name</li>
          <li>Mailing or service address</li>
          <li>Email address</li>
          <li>Mobile phone number</li>
          <li>Service request details and project descriptions</li>
          <li>Communication history and preferences</li>
        </ul>
      </LegalSection>

      <LegalSection number="2" title="SMS / Text Message Communications">
        <p className="font-semibold text-charcoal-800">2a. How We Collect Your Mobile Number</p>
        <p>
          We collect your mobile phone number when you voluntarily provide it through our website
          contact forms, phone calls, or other direct communication channels. By providing your
          mobile number and checking the SMS consent checkbox on our forms, you expressly consent
          to receive SMS (text message) communications from {business.name}.
        </p>

        <p className="font-semibold text-charcoal-800">2b. Types of Messages We Send</p>
        <p>By opting in, you may receive recurring automated text messages from {business.name}, including:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Free estimate confirmations and appointment reminders</li>
          <li>Project status updates and scheduling notifications</li>
          <li>Customer support and follow-up communications</li>
          <li>Promotional offers and seasonal announcements related to our fence repair services</li>
        </ul>

        <p className="font-semibold text-charcoal-800">2c. Message Frequency</p>
        <p>
          Message frequency varies based on your interactions with us, ongoing service needs, and
          active promotions. You may receive up to 4–8 messages per month depending on your
          service activity.
        </p>

        <p className="font-semibold text-charcoal-800">2d. Message &amp; Data Rates</p>
        <p>
          Message and data rates may apply. Charges are determined by your mobile carrier and your
          individual service plan. {business.name} is not responsible for any charges incurred
          from your mobile carrier.
        </p>

        <p className="font-semibold text-charcoal-800">2e. How to Opt Out (STOP)</p>
        <p>
          You may cancel SMS messages at any time by replying STOP to any text message you receive
          from us. After opting out, you will receive one final confirmation message and will no
          longer receive SMS communications from {business.name} unless you re-enroll.
        </p>

        <p className="font-semibold text-charcoal-800">2f. How to Get Help (HELP)</p>
        <p>For help with our SMS program, reply HELP to any message, or contact us directly at:</p>
        <p>
          Phone: {business.phone}
          <br />
          Email: {business.email}
        </p>
      </LegalSection>

      <LegalSection number="3" title="Mobile Information & SMS Consent — No Third-Party Sharing">
        <p>
          No mobile information (including your mobile phone number and SMS opt-in consent data)
          will be shared with third parties or affiliates for marketing or promotional purposes.
        </p>
        <p>
          All other categories of personal data exclude text messaging originator opt-in data and
          consent; this information will not be shared with any third parties under any
          circumstances.
        </p>
      </LegalSection>

      <LegalSection number="4" title="How We Use Your Information">
        <p>We use the personal information we collect to:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Provide and manage fence repair and installation services</li>
          <li>Respond to inquiries and service requests</li>
          <li>Schedule appointments and send reminders</li>
          <li>Send promotional communications (with your consent)</li>
          <li>Improve our website and service quality</li>
          <li>Comply with applicable laws and regulations</li>
        </ul>
      </LegalSection>

      <LegalSection number="5" title="Cookies and Tracking Technologies">
        <p>
          We use cookies and similar technologies to improve website functionality, analyze
          traffic, and enhance user experience. Cookies do not store sensitive personal
          information. By continuing to use this website, you consent to our use of cookies in
          accordance with this policy.
        </p>
      </LegalSection>

      <LegalSection number="6" title="Data Security">
        <p>
          We implement reasonable administrative, technical, and physical security measures to
          protect your personal data against unauthorized access, disclosure, alteration, or
          destruction. However, no method of electronic transmission or storage is 100% secure.
        </p>
      </LegalSection>

      <LegalSection number="7" title="Data Retention">
        <p>
          We retain your personal information only for as long as necessary to fulfill the
          purposes outlined in this Privacy Policy, or as required by applicable law. When your
          data is no longer needed, we securely delete or anonymize it.
        </p>
      </LegalSection>

      <LegalSection number="8" title="Your Privacy Rights">
        <p>Depending on your location, you may have the following rights regarding your personal data:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li><span className="font-semibold text-charcoal-800">Access:</span> Request a copy of the personal data we hold about you</li>
          <li><span className="font-semibold text-charcoal-800">Correction:</span> Request correction of inaccurate personal data</li>
          <li><span className="font-semibold text-charcoal-800">Deletion:</span> Request deletion of your personal data (including your mobile number and SMS consent record)</li>
          <li><span className="font-semibold text-charcoal-800">Opt-Out of SMS:</span> Reply STOP to any text message at any time</li>
          <li><span className="font-semibold text-charcoal-800">Opt-Out of Marketing:</span> Contact us directly to be removed from marketing lists</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at {business.email} or call {business.phone}.
        </p>
      </LegalSection>

      <LegalSection number="9" title="Changes to This Privacy Policy">
        <p>
          We may update this Privacy Policy from time to time. We will post the updated policy on
          this page with a revised &ldquo;Last Updated&rdquo; date. Continued use of our website or
          services after any changes constitutes your acceptance of the updated policy.
        </p>
      </LegalSection>

      <LegalSection number="10" title="Contact Information">
        <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
        <p>
          Company: {business.name}
          <br />
          Address: {business.address}
          <br />
          Phone: {business.phone}
          <br />
          Email: {business.email}
        </p>
        <p>
          See also our{' '}
          <a href="/terms-conditions" className="font-semibold text-fence-600 hover:text-fence-700">
            Terms &amp; Conditions
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  )
}
