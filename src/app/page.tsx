export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <div className="mx-auto mb-12 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-xl shadow-blue-500/25">
            <svg
              className="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>

          <div className="space-y-2 mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Now in development
            </div>
          </div>

          <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            One link. Zero logins.
            <br />
            Documents on time.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl text-slate-300 leading-relaxed">
            Doc-Chase collects any client documents with a single secure link
            and a live what&apos;s missing view—plus automatic reminders. Built
            for accountants & bookkeepers.
          </p>

          <div className="mt-12 flex justify-center">
            <a
              href="#waitlist"
              className="group relative rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-10 py-4 text-xl font-bold text-white shadow-xl shadow-blue-500/25 transition-all hover:shadow-blue-500/40 hover:scale-105"
            >
              <span className="relative z-10">Get Early Access</span>
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Private beta. 14-day free trial at launch. No credit card.
          </p>
        </div>

        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">
              Why teams switch to Doc-Chase
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "No client logins",
                desc: "Clients use a secure link; no accounts, no training.",
                icon: (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                ),
              },
              {
                title: 'Clear "what\'s missing"',
                desc: 'Item-level status ends "Did you get it?" threads.',
                icon: (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Reminders that do the chasing",
                desc: "Polite, scheduled nudges for only the missing items.",
                icon: (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Clean handoff",
                desc: "Download everything as a ZIP, or push to Google Drive / mirror to your server (SFTP).",
                icon: (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                    />
                  </svg>
                ),
              },
            ].map((pillar, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-slate-400">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">
              Two simple ways clients can send files
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-8">
              <div className="flex items-center mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white mr-4">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Upload link (no login)
                </h3>
              </div>
              <ul className="space-y-3 text-slate-300">
                <li>• Share one secure link</li>
                <li>• Clients drag-and-drop from phone or desktop</li>
                <li>
                  • We mark each request Received and show what&apos;s still
                  missing
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-8">
              <div className="flex items-center mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 text-white mr-4">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Email inbox (optional)
                </h3>
              </div>
              <ul className="space-y-3 text-slate-300">
                <li>
                  • Give each client a unique address like
                  client@upload.docchase.app
                </li>
                <li>• Clients can forward or CC that address</li>
                <li>
                  • We save the attachments and file them under the right
                  checklist/month
                </li>
                <li>
                  • You can limit allowed senders (others are rejected with a
                  polite notice)
                </li>
              </ul>
              <p className="mt-4 text-sm text-slate-400">
                Use either method—or both. Everything lands in the same
                checklist. You can also turn email intake off.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">See it in action</h2>
            <p className="mt-4 text-slate-400">
              Real messages from the Doc-Chase interface
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-slate-500 rounded-full mr-3"></div>
                <span className="text-xs text-slate-500 uppercase tracking-wide">
                  Empty checklist
                </span>
              </div>
              <p className="text-slate-300 font-mono text-sm">
                &quot;No files yet. Share your link or forward files to
                client@upload.docchase.app.&quot;
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-4">
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  <span className="text-xs text-green-400 uppercase tracking-wide">
                    Upload complete
                  </span>
                </div>
                <p className="text-green-200 font-mono text-sm">
                  &quot;Files received. 2 items left.&quot;
                </p>
              </div>

              <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-4">
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                  <span className="text-xs text-blue-400 uppercase tracking-wide">
                    Email received
                  </span>
                </div>
                <p className="text-blue-200 font-mono text-sm">
                  &quot;Email attachments saved to May Close.&quot;
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <div className="flex items-center mb-4">
                <svg
                  className="h-5 w-5 text-slate-400 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-xs text-slate-500 uppercase tracking-wide">
                  Automated reminder
                </span>
              </div>
              <div className="space-y-2">
                <p className="text-white font-semibold">
                  Subject: Still missing: 2 items for Monthly Close - March 2024
                </p>
                <p className="text-slate-300 text-sm">
                  Here&apos;s what&apos;s left to send. Upload via link or just
                  forward files to this address.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">How it works</h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            {[
              {
                step: "1",
                title: "Create a checklist",
                desc: "Pick a template (Monthly Close, Tax Package, New Client Setup, Audit/PBC) and due date.",
                icon: (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                ),
              },
              {
                step: "2",
                title: "Share one link (or inbox)",
                desc: "Clients upload with no login, or forward attachments to their unique email.",
                icon: (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                ),
              },
              {
                step: "3",
                title: "We do the chasing",
                desc: 'Live progress, a clear "what\'s missing" view, and automatic reminders until complete.',
                icon: (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Who it&apos;s for</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Monthly Close",
                items: ["invoices", "bills/receipts", "bank/CC statements"],
                color: "blue",
              },
              {
                title: "Tax Package",
                items: ["W-9/1099", "prior returns", "organizer PDFs"],
                color: "green",
              },
              {
                title: "New Client Setup",
                items: [
                  "IDs",
                  "prior financials",
                  "payroll details",
                  "system access",
                ],
                color: "purple",
              },
              {
                title: "Audit / PBC",
                items: [
                  "trial balance",
                  "confirmations",
                  "contracts",
                  "schedules",
                ],
                color: "orange",
              },
            ].map((useCase, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-700 bg-slate-900/50 p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-4">
                  {useCase.title}
                </h3>
                <ul className="space-y-2">
                  {useCase.items.map((item, i) => (
                    <li key={i} className="text-sm text-slate-400">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Why this matters</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-8">
              <p className="text-lg text-slate-300 leading-relaxed text-center">
                Collecting documents isn&apos;t just &quot;getting files.&quot;
                It&apos;s making sure everything arrives on time, without
                chasing, and handing it off organized. Doc-Chase turns messy
                back-and-forth into a single link with clarity and momentum.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Security</h2>
            <p className="mt-4 text-slate-400">
              Enterprise-grade protection, explained simply
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
            {[
              {
                title: "Private Storage",
                desc: "Files stored privately on AWS S3, encrypted at rest",
                icon: (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
              },
              {
                title: "Secure Links",
                desc: "Short-lived presigned links for uploads/downloads",
                icon: (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                ),
              },
              {
                title: "Access Controls",
                desc: "Firm-scoped access and activity logs",
                icon: (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                ),
              },
              {
                title: "Data Control",
                desc: "Export or delete your data anytime",
                icon: (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                    />
                  </svg>
                ),
              },
            ].map((security, index) => (
              <div
                key={index}
                className="group rounded-xl border border-slate-700 bg-slate-900/50 p-6 transition-all hover:border-green-500/50"
              >
                <div className="flex items-center mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 text-green-400 mr-4">
                    {security.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {security.title}
                  </h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {security.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">
              Pricing (pre-launch)
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Solo</h3>
              <div className="text-3xl font-bold text-white mb-4">
                $49 <span className="text-lg text-slate-400">/ month</span>
              </div>
              <p className="text-slate-400 text-sm">
                1 user · up to 100 file uploads/month · templates · reminders ·
                ZIP export
              </p>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Team</h3>
              <div className="text-3xl font-bold text-white mb-4">
                $149 <span className="text-lg text-slate-400">/ month</span>
              </div>
              <p className="text-slate-400 text-sm">
                Up to 5 users · up to 1,000 file uploads/month · client inboxes
                · Drive/SFTP options
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 text-yellow-300 text-sm font-medium mb-4">
              <svg
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              Founding firms: first 2 months $29 (Solo) / $99 (Team). Limited
              seats.
            </div>
            <p className="text-sm text-slate-500">
              14-day free trial at launch. Cancel anytime.
            </p>
            <p className="mt-2 text-xs text-slate-600">
              An upload is one file sent via link or email. Most small firms
              stay well under these limits.
            </p>
          </div>
        </div>

        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">FAQ</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                q: "Do clients need an account?",
                a: "No. They use a secure link or forward emails to a unique address.",
              },
              {
                q: 'What exactly is "forward by email"?',
                a: "Each client gets an email like client@upload.docchase.app. When they forward or CC it, we save the attachments to the right checklist. You can restrict who's allowed to send.",
              },
              {
                q: "Can I keep using email/Drive?",
                a: "Yes. Doc-Chase organizes intake and tracking. You can download a ZIP, push to Google Drive, or mirror to your server via SFTP.",
              },
              {
                q: "What file types are supported?",
                a: "PDF, JPG/PNG, DOCX, XLSX by default. You can limit types per checklist item.",
              },
              {
                q: "Will reminders fix unresponsive clients?",
                a: "They won't fix everything, but they reduce back-and-forth significantly by keeping the checklist clear and nudging only for what's missing.",
              },
              {
                q: "When can I start?",
                a: "We're onboarding early-access firms in batches before launch. Join the waitlist and we'll email you a slot.",
              },
            ].map((faq, index) => (
              <div key={index} className="border-b border-slate-800 pb-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  {faq.q}
                </h3>
                <p className="text-slate-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32" id="waitlist">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white">
                Get Early Access
              </h2>
              <p className="mt-4 text-lg text-blue-100">
                Join the private beta. We&apos;ll invite firms in small batches.
              </p>
            </div>

            <div className="mt-12 max-w-lg mx-auto">
              <form
                className="space-y-6"
                method="POST"
                action="#YOUR_FORM_ENDPOINT"
              >
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@firm.com"
                  className="w-full rounded-xl border border-slate-600 bg-slate-800/50 text-white placeholder-slate-400 px-4 py-4 outline-none focus:ring-2 focus:ring-white/50"
                />

                <input
                  name="firm_size"
                  type="text"
                  placeholder="e.g., 1, 3, 7"
                  className="w-full rounded-xl border border-slate-600 bg-slate-800/50 text-white placeholder-slate-400 px-4 py-4 outline-none focus:ring-2 focus:ring-white/50"
                />

                <select
                  name="primary_use_case"
                  className="w-full rounded-xl border border-slate-600 bg-slate-800/50 text-white px-4 py-4 outline-none focus:ring-2 focus:ring-white/50"
                >
                  <option value="">Primary use case</option>
                  <option value="monthly_close">Monthly Close</option>
                  <option value="tax_package">Tax Package</option>
                  <option value="new_client_setup">New Client Setup</option>
                  <option value="audit_pbc">Audit PBC</option>
                </select>

                <select
                  name="preferred_intake"
                  className="w-full rounded-xl border border-slate-600 bg-slate-800/50 text-white px-4 py-4 outline-none focus:ring-2 focus:ring-white/50"
                >
                  <option value="">Preferred intake</option>
                  <option value="email_inbox">Email inbox</option>
                  <option value="link_upload">Link upload</option>
                  <option value="both">Both</option>
                </select>

                <input
                  name="documents"
                  type="text"
                  placeholder="Invoices, statements, W-9…"
                  className="w-full rounded-xl border border-slate-600 bg-slate-800/50 text-white placeholder-slate-400 px-4 py-4 outline-none focus:ring-2 focus:ring-white/50"
                />

                <button
                  type="submit"
                  className="w-full rounded-xl bg-white text-blue-600 px-8 py-4 text-lg font-bold transition-all hover:bg-blue-50 hover:scale-105"
                >
                  Get Early Access
                </button>

                <p className="text-center text-sm text-blue-200">
                  We&apos;ll only email about early access and product updates.
                </p>
              </form>
            </div>
          </div>
        </div>

        <footer className="mt-32 border-t border-slate-800 pt-16 text-center">
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
            <svg
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Doc-Chase</h3>
          <p className="text-slate-400 mb-8">
            Doc-Chase — One link. Zero logins. Documents on time.
          </p>

          <div className="flex justify-center space-x-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          <p className="mt-8 text-sm text-slate-600">
            © {new Date().getFullYear()} Doc-Chase. All rights reserved.
          </p>
        </footer>
      </section>
    </main>
  );
}
