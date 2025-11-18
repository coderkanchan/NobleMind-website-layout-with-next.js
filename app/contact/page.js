'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: '' }))
  }

  function validate() {
    const err = {}
    if (!form.name.trim()) err.name = 'Please enter your name.'
    if (!form.email.trim()) err.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = 'Enter a valid email.'
    if (!form.subject.trim()) err.subject = 'Please enter a subject.'
    if (!form.message.trim()) err.message = 'Please enter a message.'
    return err
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSuccess('')
    const err = validate()
    if (Object.keys(err).length) return setErrors(err)

    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Network response not ok');

      await new Promise(r => setTimeout(r, 900)) // demo delay
      setSuccess('Thanks! Your message has been sent. We will get back to you soon.')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setErrors({ submit: 'Something went wrong. Please try again later.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen pb-10  bg-gray-50">
      <div className="max-w-6xl px-3  mx-auto">
        <header className="mb-10 text-center">
          <h1 className="xl:text-[64px] font-bold lg:text-5xl sm:text-4xl text-3xl leading-loose bg-gradient-to-b from-[#A854E9] to-[#4F91FC] bg-clip-text text-transparent">Contact Us</h1>
          <p className="mt-2 text-gray-600">Have a question, feedback or want to work together? Drop us a message.</p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <form onSubmit={handleSubmit} className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl shadow border border-[#A854E990]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm font-medium text-[#A854E9]">Full name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`mt-2 block w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-300 ${errors.name ? 'border-red-400' : 'border-[#A854E990]'}`}
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </label>

              <label className="block">
                <span className="text-sm font-medium text-[#A854E9]">Email</span>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`mt-2 block w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-300 ${errors.email ? 'border-red-400' : 'border-[#A854E990]'}`}
                  placeholder="you@example.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </label>
            </div>

            <label className="block mt-4">
              <span className="text-sm font-medium text-[#A854E9]">Subject</span>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className={`mt-2 block w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-300 ${errors.subject ? 'border-red-400' : 'border-[#A854E990]'}`}
                placeholder="Subject"
              />
              {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
            </label>

            <label className="block mt-4">
              <span className="text-sm font-medium text-[#A854E9]">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                className={`mt-2 block w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-300 ${errors.message ? 'border-red-400' : 'border-[#A854E990]'}`}
                placeholder="Write your message here..."
              />
              {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
            </label>

            <div className="flex items-center justify-between mt-6">
              <div className="text-sm text-[#A854E9]">We typically reply within 1-2 business days.</div>
              <div className="flex items-center gap-3">
                {errors.submit && <p className="text-sm text-red-500 mr-3">{errors.submit}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 rounded-full bg-indigo-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-indigo-700 disabled:opacity-60"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </div>

            {success && (
              <div className="mt-4 rounded-md bg-emerald-50 border border-emerald-100 p-3 text-emerald-800 text-sm">{success}</div>
            )}
          </form>

          <aside className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow border border-[#A854E990]">
              <h3 className="text-lg font-semibold text-[#A854E9]">Get in touch</h3>
              <p className="mt-2 text-[#A854E9]">Office hours: Mon — Fri, 9:00 — 18:00</p>

              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-1 text-[#A854E9]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5.5C3 4.11929 4.11929 3 5.5 3H18.5C19.8807 3 21 4.11929 21 5.5V18.5C21 19.8807 19.8807 21 18.5 21H5.5C4.11929 21 3 19.8807 3 18.5V5.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <div className="text-sm font-medium text-[#A854E9]">Email</div>
                    <div className="text-sm text-[#A854E9]">hello@yourdomain.com</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-1 text-[#A854E9]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5.5C3 4.11929 4.11929 3 5.5 3H18.5C19.8807 3 21 4.11929 21 5.5V18.5C21 19.8807 19.8807 21 18.5 21H5.5C4.11929 21 3 19.8807 3 18.5V5.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 12H16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <div className="text-sm font-medium text-[#A854E9]">Phone</div>
                    <div className="text-sm  text-[#A854E9]">+91 98765 43210</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-1 text-[#A854E9]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <div className="text-sm font-medium text-[#A854E9]">Address</div>
                    <div className="text-sm text-[#A854E9]">123 Startup Road, Cityname, India</div>
                  </div>
                </li>
              </ul>

              <div className="mt-5 flex items-center gap-3">
                <a aria-label="twitter" className="inline-flex items-center justify-center rounded-full border p-2 hover:text-white hover:bg-[#A854E9] text-[#A854E9]">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 5.92c-.64.28-1.32.46-2.04.54.73-.44 1.28-1.12 1.54-1.94-.68.4-1.44.68-2.24.84C18.8 4.6 17.86 4 16.78 4c-1.6 0-2.9 1.32-2.9 2.96 0 .23.02.46.07.68C10.5 7.44 7.7 5.6 5.9 2.8c-.25.43-.4.92-.4 1.44 0 1 0.5 1.88 1.26 2.4-.58-.02-1.12-.18-1.6-.44v.04c0 1.44 1.02 2.64 2.38 2.92-.46.12-.94.18-1.44.06.42 1.3 1.64 2.24 3.08 2.28-1.12.88-2.52 1.4-4.04 1.4H4c1.46.94 3.18 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.42c.64-.46 1.2-1.02 1.64-1.66-.6.28-1.24.46-1.9.52z" /></svg>
                </a>
                <a aria-label="linkedin" className="inline-flex items-center justify-center rounded-full border p-2 hover:text-white hover:bg-[#A854E9] text-[#A854E9]">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5c0 1.12-.9 2-2 2s-2-.88-2-2 .9-2 2-2 2 .88 2 2zM3 8h4v12H3zM9 8h3.8v1.64h.06c.53-.98 1.84-2.02 3.78-2.02 4.04 0 4.78 2.66 4.78 6.12V20H18v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-1.99 1.34-1.99 2.72V20H9V8z" /></svg>
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow overflow-hidden border-[#A854E990]">
              <h4 className="text-sm font-medium text-gray-700">Our location</h4>
              <div className="mt-3 rounded-lg overflow-hidden border border-[#A854E990]">
                {/* Replace src below with your real map iframe if you want */}
                <iframe
                  title="map"
                  className="w-full h-48"
                  src="https://www.google.com/maps?q=New+Delhi,+India&output=embed"
                  loading="lazy"
                />
              </div>
            </div>

          </aside>
        </section>
      </div>
    </main>
  )
}












