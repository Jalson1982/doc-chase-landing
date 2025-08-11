"use client";

import emailjs from "@emailjs/browser";

emailjs.init("i04J_Ve4Y0OODVSEn");

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
            One link. Zero logins. Documents on time.
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-xl text-slate-300 leading-relaxed">
            Doc-Chase shows people exactly what to send, lets them upload or
            forward by email, and reminds them automatically until everything is
            in. You see a live "what's missing" view and export in one click.
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

        {/* Problem Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              Problem (why this exists)
            </h2>
            <div className="max-w-3xl mx-auto space-y-4 text-lg text-slate-300">
              <p>Collecting documents wastes time and delays work.</p>
              <p>Email threads get messy and things go missing.</p>
              <p>Portals are heavy—clients forget logins and don't use them.</p>
              <p>You can't see what's still missing or who needs a nudge.</p>
              <p className="text-red-400 font-semibold">
                Result: late projects, rework, and frustrated teams/clients.
              </p>
            </div>
          </div>
        </div>

        {/* What Doc-Chase Is */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              What Doc-Chase is (plain English)
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 text-lg text-slate-300">
              <p>
                Doc-Chase is a simple front door for collecting any documents
                from clients, suppliers, or new hires.
              </p>
              <p>
                Share one secure link (no logins). They upload files or forward
                attachments by email.
              </p>
              <p>
                We track each request, show what's missing, and send polite
                reminders until it's done.
              </p>
            </div>
          </div>
        </div>

        {/* Why Teams Use It */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">
              Why teams use it (value in one glance)
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                title: "Less chasing",
                desc: "Reminders handle follow-ups for you.",
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
                title: "Clarity",
                desc: 'A live checklist ends "Did you get it?" ping-pong.',
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
                title: "On-time files",
                desc: "Deadlines met without firefighting.",
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
                desc: "Download ZIP or push to Google Drive / SFTP.",
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
              {
                title: "Great experience",
                desc: "No accounts, works perfectly on phones.",
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
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
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

        {/* How It Works */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              How it works (3 steps)
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-left">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Create a checklist
                </h3>
                <p className="text-slate-300">
                  Pick a template (Monthly Close, Tax Package, Legal Intake,
                  Onboarding) and a due date.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Share one link (or inbox)
                </h3>
                <p className="text-slate-300">
                  Clients upload with no login, or forward attachments to their
                  unique email address (e.g., client@upload.docchase.app).
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  We do the chasing
                </h3>
                <p className="text-slate-300">
                  The checklist updates automatically, reminders go only to
                  missing items, and you export when done.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Forward by Email - Crystal Clear */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              "Forward by email" (make this crystal clear)
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-slate-300 text-left">
              <div className="bg-slate-800/50 rounded-lg p-6">
                <p className="mb-4">
                  Each client/vendor gets a unique email (e.g.,{" "}
                  <span className="text-blue-400 font-mono">
                    client@upload.docchase.app
                  </span>
                  ).
                </p>
                <p className="mb-4">
                  When they forward or CC that address, we save the attachments
                  (<span className="text-slate-400">email body ignored</span>).
                </p>
                <p className="mb-4">
                  Files are auto-filed to the correct request/month; unknowns go
                  to Uncategorized for one-click assign.
                </p>
                <p className="mb-4">
                  You can allowlist who's permitted to send.
                </p>
                <p className="text-slate-400">
                  (Prefer link-only? Turn email off per client.)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Two Ways to Send */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">
              Two simple ways to send files
            </h2>
            <p className="text-slate-300 text-lg mt-4">
              Use either—or both. Everything lands in the same checklist.
            </p>
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
              <p className="text-slate-300 mb-4">
                Share one secure link. Clients or employees drag-and-drop from
                phone or desktop. We mark each request Received and show what's
                still missing.
              </p>
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
              <div className="text-slate-300 space-y-3">
                <p>
                  Give each client/vendor a unique address like{" "}
                  <span className="text-purple-400 font-mono">
                    client@upload.docchase.app
                  </span>
                  .
                </p>
                <p>
                  • <strong>Forward or CC</strong> that address
                </p>
                <p>
                  • We save <strong>attachments only</strong> (email body
                  ignored)
                </p>
                <p>
                  • <strong>Auto-file</strong> to the right checklist/month
                </p>
                <p>
                  • <strong>Allowlist</strong> who's allowed to send (others get
                  a polite rejection)
                </p>
                <p className="text-slate-400 text-sm">
                  (Prefer link-only? Turn email off per client.)
                </p>
              </div>
              <p className="mt-4 text-sm text-slate-400">
                Use either method—or both. Everything lands in the same
                checklist. You can also turn email intake off.
              </p>
            </div>
          </div>
        </div>

        {/* Who It's For */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              Who it's for (keep it broad, not generic)
            </h2>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Accounting & Bookkeeping
                </h3>
                <p className="text-slate-300">
                  Invoices, statements, W-9/1099, prior financials.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Legal Intake
                </h3>
                <p className="text-slate-300">
                  ID photos, engagement letters, evidence/discovery.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Employee Onboarding
                </h3>
                <p className="text-slate-300">
                  IDs, tax forms, bank details, policy acknowledgements.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Vendor Management / AP
                </h3>
                <p className="text-slate-300">
                  Monthly supplier invoices and proofs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile-First Capture */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              Mobile-first capture (why this works in 2025)
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <div className="grid md:grid-cols-2 gap-6 text-slate-300">
                  <div>
                    <p className="mb-4">
                      Most people snap photos instead of scanning.
                    </p>
                    <p className="mb-4">
                      Open camera directly from the link; multi-page upload.
                    </p>
                    <p>
                      Auto-optimize: crop, deskew, compress; HEIC/JPG/PNG → PDF
                      if you want.
                    </p>
                  </div>
                  <div>
                    <p className="mb-4">
                      <strong>Privacy:</strong> EXIF stripped on upload.
                    </p>
                    <div className="flex items-center space-x-2 text-green-400">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Works perfectly on phones</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Doc-Chase */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              Why choose Doc-Chase vs. email, Drive, or portals
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-400 mb-3">
                  Email alone
                </h3>
                <p className="text-slate-300">
                  Chaos, no tracking, manual chasing.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-400 mb-3">
                  Shared drives
                </h3>
                <p className="text-slate-300">
                  No "what's missing," no reminders.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-400 mb-3">
                  Portals
                </h3>
                <p className="text-slate-300">
                  Logins and training most clients won't do.
                </p>
              </div>
            </div>
            <div className="mt-8 bg-green-900/20 border border-green-500/30 rounded-lg p-6">
              <p className="text-green-400 font-semibold text-lg">
                Doc-Chase combines frictionless intake (no login) with tracking
                + reminders built in.
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
            <h2 className="text-3xl font-bold text-white mb-8">Security (plain English)</h2>
            <div className="max-w-3xl mx-auto space-y-4 text-lg text-slate-300 text-left">
              <p>• Files on AWS S3, encrypted at rest.</p>
              <p>• Short-lived presigned links for uploads/downloads.</p>
              <p>• Firm-scoped access and activity logs.</p>
              <p>• Export or delete your data anytime.</p>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Pricing (pre-launch)</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Solo — $49 / month</h3>
                <div className="space-y-2 text-slate-300 mb-6">
                  <p>1 user</p>
                  <p>Up to 100 file uploads/month</p>
                  <p>Templates</p>
                  <p>Reminders</p>
                  <p>ZIP export</p>
                </div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Team — $149 / month</h3>
                <div className="space-y-2 text-slate-300 mb-6">
                  <p>Up to 5 users</p>
                  <p>Up to 1,000 file uploads/month</p>
                  <p>Client inboxes</p>
                  <p>Drive/SFTP options</p>
                </div>
              </div>
            </div>
            <div className="mt-8 space-y-4 text-slate-400">
              <p>An upload is one file sent via link or email. Most small teams stay well under these limits.</p>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-900/20 border border-green-500/30 text-green-400 text-sm font-medium">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Founding firms: first 2 months $29 (Solo) / $99 (Team). Limited seats.
              </div>
            </div>
          </div>

        {/* CTA After Pricing */}
        <div className="mt-24 text-center">
          <a
            href="#waitlist"
            className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
          >
            Get Early Access
          </a>
        </div>


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
                q: "What exactly happens when someone emails a file?",
                a: "We save the attachments, auto-file them to the right request/month, and update the checklist. You can restrict who's allowed to send.",
              },
              {
                q: "Is this only for accountants?",
                a: "No. It works for legal intake, HR onboarding, vendor management—any workflow where people owe you documents.",
              },
              {
                q: "Which file types are supported?",
                a: "PDF, JPG/PNG, DOCX, XLSX by default. You can limit types per checklist item.",
              },
              {
                q: "Will reminders fix unresponsive people?",
                a: "They won't fix everything, but clear checklists and scheduled nudges reduce back-and-forth significantly.",
              },
              {
                q: "Where are files stored?",
                a: "Privately on AWS S3 with encryption at rest and short-lived presigned links. You can download a ZIP, push to Google Drive, or mirror to your server via SFTP.",
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

        {/* CTA After Pricing */}
        <div className="mt-24 text-center">
          <a
            href="#waitlist"
            className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
          >
            Get Early Access
          </a>
        </div>

        <div className="mt-32" id="waitlist">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white">
                Get Early Access
              </h2>
              <p className="mt-4 text-lg text-blue-100">
                Join the private beta. We'll invite firms in small batches (14-day free trial at launch).
              </p>
            </div>

            <div className="mt-12 max-w-lg mx-auto">
              <form
                className="space-y-6"
                id="waitlist-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const button = form.querySelector(
                    'button[type="submit"]'
                  ) as HTMLButtonElement;

                  button.textContent = "Sending...";
                  button.disabled = true;

                  emailjs
                    .send(
                      "service_v5epier",
                      "template_ujs9f97",
                      {
                        to_email: "jasmin.fajkic@gmail.com",
                        to_name: "Jasmin",
                        user_email: (
                          form.elements.namedItem(
                            "work_email"
                          ) as HTMLInputElement
                        )?.value,
                        email: (
                          form.elements.namedItem(
                            "work_email"
                          ) as HTMLInputElement
                        )?.value,
                        firm_size: (
                          form.elements.namedItem(
                            "firm_size"
                          ) as HTMLInputElement
                        )?.value,
                        primary_use_case: (
                          form.elements.namedItem(
                            "primary_use_case"
                          ) as HTMLSelectElement
                        )?.value,
                        preferred_intake: (
                          form.elements.namedItem(
                            "preferred_intake"
                          ) as HTMLSelectElement
                        )?.value,
                        document_types: (
                          form.elements.namedItem(
                            "document_types"
                          ) as HTMLInputElement
                        )?.value,
                        submission_date: new Date().toLocaleString(),
                      },
                      "i04J_Ve4Y0OODVSEn"
                    )
                    .then(() => {
                      form.innerHTML = `
                      <div class="text-center p-8 rounded-xl border border-green-500/30 bg-green-500/10">
                        <div class="text-green-400 text-xl font-bold mb-2">Thank you!</div>
                        <div class="text-slate-300">Your early access request has been sent. We'll be in touch soon!</div>
                      </div>
                    `;
                    })
                    .catch((error) => {
                      button.textContent = "Get Early Access";
                      button.disabled = false;
                      console.error("EmailJS Error:", error);
                      alert(
                        `Error: ${
                          error.text ||
                          error.message ||
                          "Something went wrong. Please try again."
                        }`
                      );
                    });
                }}
              >
                <input
                  name="work_email"
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
                  <option value="Monthly Close">Monthly Close</option>
                  <option value="Tax Package">Tax Package</option>
                  <option value="New Client Setup">New Client Setup</option>
                  <option value="Audit PBC">Audit PBC</option>
                  <option value="Legal">Legal</option>
                  <option value="Onboarding">Onboarding</option>
                </select>

                <select
                  name="preferred_intake"
                  className="w-full rounded-xl border border-slate-600 bg-slate-800/50 text-white px-4 py-4 outline-none focus:ring-2 focus:ring-white/50"
                >
                  <option value="">Preferred intake</option>
                  <option value="Email inbox">Email inbox</option>
                  <option value="Link upload">Link upload</option>
                  <option value="Both">Both</option>
                </select>

                <input
                  name="document_types"
                  type="text"
                  placeholder="Invoices, statements, IDs, contracts…"
                  className="w-full rounded-xl border border-slate-600 bg-slate-800/50 text-white placeholder-slate-400 px-4 py-4 outline-none focus:ring-2 focus:ring-white/50"
                />

                <button
                  type="submit"
                  className="w-full rounded-xl bg-white text-blue-600 px-8 py-4 text-lg font-bold transition-all hover:bg-blue-50 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
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

        {/* Bottom CTA */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get Early Access</h2>
          <p className="text-lg text-slate-300 mb-8">Join the private beta. We'll invite firms in small batches (14-day free trial at launch).</p>
          <a
            href="#waitlist"
            className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
          >
            Get Early Access
          </a>
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
