export default function Privacy() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">

      {/* Nav */}
      <nav className="max-w-2xl mx-auto px-6 py-6">
        <a href="/curb" className="text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">
          ← Back to Curb
        </a>
      </nav>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 pt-12 pb-32 flex flex-col gap-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-sm text-zinc-500">Effective as of April 22, 2026</p>
        </div>

        <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
          This privacy policy applies to the Curb app (hereby referred to as "Application") for mobile devices that was created by Carson Smith (hereby referred to as "Service Provider") as a free service. This service is intended for use "AS IS".
        </p>

        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">What information does the Application obtain and how is it used?</h2>
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
            The Application allows the user to upload their images and it can collect precise information about the location of the mobile device. Personal data collection, like photos and location, is entirely optional. All data collected stays on device and is not transmitted to any server or third party. Registration is not required to use the Application.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Does the Application collect precise real time location information of the device?</h2>
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
            This Application allows for you to decide to share precise information about the location of your mobile device for use in application functionality. All location information is stored locally on device and is not transmitted to any server or third party.
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
            <a href="mailto:support@carsonjs.me" className="text-red-500 hover:underline">
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
            <a href="mailto:support@carsonjs.me" className="text-red-500 hover:underline">
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
            className="text-sm text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
          >
            support@carsonjs.me
          </a>
        </div>
      </footer>

    </main>
  );
}