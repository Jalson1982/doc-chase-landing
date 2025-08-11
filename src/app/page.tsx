"use client";

import emailjs from "@emailjs/browser";

emailjs.init("i04J_Ve4Y0OODVSEn");

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>

        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin-slow"></div>
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
            in. You see a live &quot;what&apos;s missing&quot; view and export
            in one click.
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
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-12">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                  </svg>
                  The Problem
                </div>
                <h2 className="text-4xl font-bold text-white mb-8">
                  Document collection is broken
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Time wasted chasing</h3>
                      <p className="text-slate-300">Email threads get messy, things go missing, deadlines slip.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Portals don&apos;t work</h3>
                      <p className="text-slate-300">Clients forget logins, training is required, adoption is low.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">No visibility</h3>
                      <p className="text-slate-300">You can&apos;t see what&apos;s missing or who needs a nudge.</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                      <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-red-400 font-semibold">Result: Late projects, rework, frustrated teams</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Doc-Chase Is */}
        <div className="mt-32">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-12">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                  </svg>
                  The Solution
                </div>
                <h2 className="text-4xl font-bold text-white mb-8">
                  Your document collection front door
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">One secure link</h3>
                  <p className="text-slate-300">Share a single link. No accounts, no training, no friction.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Email forwarding</h3>
                  <p className="text-slate-300">Clients can forward attachments to a unique email address.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Auto tracking</h3>
                  <p className="text-slate-300">See what&apos;s missing, send reminders, export when done.</p>
                </div>
              </div>
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Clarity",
                desc: "A live checklist ends &quot;Did you get it?&quot; ping-pong.",
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
              How email forwarding works
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
                  You can allowlist who&apos;s permitted to send.
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
                phone or desktop. We mark each request Received and show
                what&apos;s still missing.
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
                  • <strong>Allowlist</strong> who&apos;s allowed to send
                  (others get a polite rejection)
                </p>
                <p className="text-slate-400 text-sm">
                  (Prefer link-only? Turn email off per client.)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Who It's For */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              Built for professional services
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
                  No &quot;what&apos;s missing,&quot; no reminders.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-400 mb-3">
                  Portals
                </h3>
                <p className="text-slate-300">
                  Logins and training most clients won&apos;t do.
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

        {/* Security */}
        <div className="mt-32">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-12">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                  </svg>
                  Security
                </div>
                <h2 className="text-4xl font-bold text-white mb-8">
                  Enterprise-grade protection
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <div className="text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">AWS S3</h3>
                  <p className="text-slate-400 text-sm">Files encrypted at rest on enterprise infrastructure</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Secure Links</h3>
                  <p className="text-slate-400 text-sm">Short-lived presigned URLs for uploads & downloads</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Access Control</h3>
                  <p className="text-slate-400 text-sm">Firm-scoped permissions with full activity logs</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Data Export</h3>
                  <p className="text-slate-400 text-sm">Export or delete your data anytime you want</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              Pricing (pre-launch)
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Solo — $49 / month
                </h3>
                <div className="space-y-2 text-slate-300 mb-6">
                  <p>1 user</p>
                  <p>Up to 100 file uploads/month</p>
                  <p>Templates</p>
                  <p>Reminders</p>
                  <p>ZIP export</p>
                </div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Team — $149 / month
                </h3>
                <div className="space-y-2 text-slate-300 mb-6">
                  <p>Up to 5 users</p>
                  <p>Up to 1,000 file uploads/month</p>
                  <p>Client inboxes</p>
                  <p>Drive/SFTP options</p>
                </div>
              </div>
            </div>
            <div className="mt-8 space-y-4 text-slate-400">
              <p>
                An upload is one file sent via link or email. Most small teams
                stay well under these limits.
              </p>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-900/20 border border-green-500/30 text-green-400 text-sm font-medium">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Founding firms: first 2 months $29 (Solo) / $99 (Team). Limited
                seats.
              </div>
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

        {/* FAQ */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              Frequently asked questions
            </h2>
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

        <div className="mt-32" id="waitlist">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white">
                Get Early Access
              </h2>
              <p className="mt-4 text-lg text-blue-100">
                Join the private beta. We&apos;ll invite firms in small batches
                (14-day free trial at launch).
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
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Early Access
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Join the private beta. We&apos;ll invite firms in small batches
            (14-day free trial at launch).
          </p>
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

          <p className="mt-8 text-xs text-slate-600">
            © 2025 Doc-Chase. All rights reserved.
          </p>
        </footer>
      </section>
    </main>
  );
}
