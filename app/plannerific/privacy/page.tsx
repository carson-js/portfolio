export const metadata = {
  title: "Privacy Policy — Plannerific",
  description: "Privacy policy for the Plannerific iOS app.",
};

const navLinks = [
  { label: "Features", href: "/plannerific/#features" },
  { label: "Privacy", href: "/plannerific/privacy" },
  { label: "carsonjs.me", href: "/" },
];

export default function Privacy() {
  return (
    <main 
        className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Google Fonts */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');`}</style>


      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-zinc-100 dark:border-zinc-800">
        <a 
          href="/plannerific"
          className="text-lg font-extrabold tracking-tight text-[#00C3D0] dark:text-[#01D2E0]" style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.5px" }}
        >
          Plannerific
        </a>
        <ul className="flex gap-6 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-[#00C3D0] dark:hover:text-[#01D2E0] transition-colors no-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 pt-12 pb-32 flex flex-col gap-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-sm text-zinc-500">Effective as of May 14, 2026</p>
        </div>

        <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
          This privacy policy applies to the Plannerific app (hereby referred to as "Application") for mobile devices that was created by Carson Smith (hereby referred to as "Service Provider") as a free service. This service is intended for use "AS IS".
        </p>

        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">What information does the Application obtain and how is it used?</h2>
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
            The Application does not collect any information from the user. All data inputted for use in app functionality, like assignment, schedule, and teacher details, is entirely on device and is not transmitted to any server or third party. Registration is not required to use the Application.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Does the Application collect precise real time location information of the device?</h2>
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
            This Application does not collect any location information from the device.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Do third parties see and/or have access to information obtained by the Application?</h2>
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Since the information the Application collects is kept entirely on device, it is not transmitted to any server or third party. Therefore, no data is shared with third parties.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">What are my opt-out rights?</h2>
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
            You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Children</h2>
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
            The Application is not used to knowingly solicit data from or market to children under the age of 13.
          </p>
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
            The Service Provider does not knowingly collect personally identifiable information from children. The Service Provider encourages all children to never submit any personally identifiable information through the Application and/or Services. Parents and legal guardians are encouraged to monitor their children's Internet usage and to help enforce this Policy by instructing their children never to provide personally identifiable information through the Application and/or Services without their permission. If you have reason to believe that a child has provided personally identifiable information to the Service Provider, please contact us at{" "}
            <a href="mailto:support@carsonjs.me" className="text-[#00C3D0] dark:text-[#01D2E0] hover:underline">
              support@carsonjs.me
            </a>{" "}
            so that we can take the necessary actions. You must also be at least 16 years of age to consent to the processing of your personally identifiable information in your country.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Security</h2>
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
            The Service Provider is concerned about safeguarding the confidentiality of your information. However, since the Application does not transmit any of your data to any server or third party, there is no risk of your data being accessed by unauthorized individuals.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Changes</h2>
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
            This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Your Consent</h2>
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
            By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by the Service Provider.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
            If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at{" "}
            <a href="mailto:support@carsonjs.me" className="text-[#00C3D0] dark:text-[#01D2E0] hover:underline">
              support@carsonjs.me
            </a>.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-12">
        <div className="max-w-2xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-400">© 2026 Carson Smith. Built in San Jose.</p>
          <a
            href="mailto:support@carsonjs.me"
            className="text-sm text-zinc-400 hover:text-[#00C3D0] dark:hover:text-[#01D2E0] transition-colors"
          >
            support@carsonjs.me
          </a>
        </div>
      </footer>

    </main>
  );
}