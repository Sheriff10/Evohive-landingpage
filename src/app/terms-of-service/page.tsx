import React from "react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-200 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-neutral-800 p-8 rounded-2xl shadow-lg">
        <h1 className="$1 text-[#ffc107]">EvoHive Mini App</h1>
        <p className="mb-8 text-center text-neutral-400">Terms of Service &amp; Usage Policy</p>
        <p className="mb-8 text-neutral-300">
          Effective Date: <strong>June 1, 2025</strong>
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the EvoHive Mini App (“EvoHive”), you (“User”) agree to be bound by these Terms of
            Service (“Terms”), all applicable laws, and regulations. If you do not agree, you are prohibited from using
            or accessing EvoHive.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">2. Description of Service</h2>
          <p>
            EvoHive is an AI-powered cryptocurrency trading and token mining assistant, allowing users to deposit USDT
            and automate crypto trading strategies within a 0.75% risk limit. Users may also mine{" "}
            <code className="bg-neutral-700 px-1 rounded">$EVH</code> tokens based on in-app activity and referral
            participation.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">3. User Eligibility</h2>
          <p>
            You must be at least 18 years of age or the age of majority in your jurisdiction to use EvoHive. You affirm
            that you are not a citizen or resident of any jurisdiction where the use of EvoHive would be illegal or
            restricted by law.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">4. Usage Conditions</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Users agree to use EvoHive only for its intended purpose.</li>
            <li>
              Multiple accounts, bot activity, or any exploitation of the referral or token mining system is prohibited.
            </li>
            <li>
              EvoHive reserves the right to suspend or terminate accounts suspected of violating these conditions
              without prior notice.
            </li>
          </ul>
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">4.1 Prohibited Conduct</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Reverse engineering, scraping, or infringing intellectual property.</li>
              <li>Uploading harmful content or disrupting service operations.</li>
            </ul>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">5. Administrative Authority &amp; Project Control</h2>
          <p className="mb-2">The EvoHive team retains full, unilateral control over:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Business operations, revenue structures, and trading strategies.</li>
            <li>Token mechanics, including distribution, burns, mining algorithms, and governance processes.</li>
            <li>Updates, upgrades, and termination of services or features.</li>
            <li>Decisions relating to partnerships, exchanges, and token listings.</li>
          </ul>
          <p className="mt-2">
            No aspect of EvoHive shall be interpreted as decentralized ownership or community-managed governance unless
            explicitly enabled via smart contracts and governance proposals. EvoHive reserves the right to amend,
            modify, or discontinue any part of the project or token model without prior user approval.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">6. Fees &amp; Payments Pricing Authority</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              EvoHive may introduce, modify, or remove fees at its discretion. Users agree to pay all applicable
              charges.
            </li>
            <li>All payments are non-refundable unless required by law.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">7. Regulatory &amp; Legal Assurance</h2>
          <p>
            EvoHive strives for full compliance with international Web3 regulatory best practices and will adapt
            operations to remain in line with evolving legal standards. Users acknowledge that:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>EvoHive does not offer guaranteed profits or financial advice.</li>
            <li>All trading activity involves risk; past performance is not indicative of future results.</li>
            <li>Users remain responsible for tax obligations related to earnings, profits, or token rewards.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, EvoHive, its developers, partners, or affiliates shall
            not be liable for any direct, indirect, incidental, or consequential damages, including trading losses
            incurred through AI automation or service interruptions or bugs resulting from Telegram or third-party APIs.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">9. Dispute Resolution</h2>
          <p>
            All disputes shall be resolved by binding arbitration under the laws of the jurisdiction selected by
            EvoHive. Users agree to waive the right to participate in class actions.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">10. Privacy</h2>
          <p>User data is handled per our Privacy Policy, incorporated herein by reference.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">11. Termination</h2>
          <p>
            EvoHive reserves the right to terminate or restrict access to any user for violations of these Terms,
            suspicious activity, or at its discretion, in the best interest of the project.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">12. Updates to Terms</h2>
          <p>
            These Terms may be updated at any time without prior notice. Continued use of EvoHive following any changes
            constitutes acceptance of the revised Terms.
          </p>
        </section>

        <p className="mb-8">
          By using EvoHive, you acknowledge reading and agreeing to these Terms. Failure to comply may result in legal
          action or account termination.
        </p>

        <div className="mt-8 border-t border-neutral-700 pt-6">
          <h3 className="text-xl font-semibold mb-2">Contact</h3>
          <p>
            For questions or clarifications, contact the EvoHive Admin team: <br />
            <a href="mailto:evohiveai@gmail.com" className="underline text-[#ffc107]">
              evohiveai@gmail.com
            </a>{" "}
            <br />
            <a href="https://t.me/EvohiveAI" className="underline text-blue-400">
              https://t.me/EvohiveAI
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
