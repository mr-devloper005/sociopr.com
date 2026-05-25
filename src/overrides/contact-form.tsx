'use client'

import { useState } from 'react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    contactName: '',
    phoneNumber: '',
    email: '',
    orgType: '',
    subject: '',
    message: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded border border-neutral-200 bg-[#f5f7fa] p-10 text-center">
        <p className="text-lg font-semibold text-neutral-800">Thank you for reaching out!</p>
        <p className="mt-2 text-sm text-neutral-600">We'll get back to you as soon as possible.</p>
      </div>
    )
  }

  const inputClass =
    'w-full rounded border border-neutral-300 bg-white px-3 py-2.5 text-sm text-neutral-800 outline-none transition focus:border-neutral-500 focus:ring-1 focus:ring-neutral-400 placeholder:text-neutral-400'

  const labelClass = 'mb-1 block text-sm font-medium text-neutral-700'

  return (
    <div className="rounded border border-neutral-200 bg-[#f5f7fa] p-8">
      <form onSubmit={handleSubmit} noValidate>
        {/* Row 1: Contact Name + Phone Number */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="contactName" className={labelClass}>
              Contact Name <span className="text-red-500">*</span>
            </label>
            <input
              id="contactName"
              name="contactName"
              type="text"
              required
              value={form.contactName}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className={labelClass}>
              Phone Number
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              value={form.phoneNumber}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        {/* Row 2: Email */}
        <div className="mt-4">
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        {/* Help text */}
        <p className="mt-5 mb-3 text-sm text-neutral-600">Help Us Understand Your Needs A Little More.</p>

        {/* Row 3: Org type + Subject */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="orgType" className={labelClass}>
              What type of organization are you? <span className="text-red-500">*</span>
            </label>
            <select
              id="orgType"
              name="orgType"
              required
              value={form.orgType}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="" disabled>Please Select</option>
              <option value="agency">Agency / PR Firm</option>
              <option value="corporate">Corporate / Enterprise</option>
              <option value="nonprofit">Non-Profit</option>
              <option value="government">Government</option>
              <option value="startup">Startup / Small Business</option>
              <option value="individual">Individual / Freelancer</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="subject" className={labelClass}>
              Subject: How may we help you? <span className="text-red-500">*</span>
            </label>
            <select
              id="subject"
              name="subject"
              required
              value={form.subject}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="" disabled>Please Select</option>
              <option value="general">General Inquiry</option>
              <option value="pricing">Pricing & Plans</option>
              <option value="technical">Technical Support</option>
              <option value="billing">Billing & Payments</option>
              <option value="partnership">Partnership Opportunity</option>
              <option value="media">Media / Press</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Row 4: Message */}
        <div className="mt-4">
          <label htmlFor="message" className={labelClass}>
            Message / Comment <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            className={`${inputClass} resize-y`}
          />
        </div>

        {/* reCAPTCHA placeholder */}
        <div className="mt-5 flex items-center gap-3 rounded border border-neutral-300 bg-white px-4 py-3 w-fit">
          <input
            type="checkbox"
            id="notRobot"
            className="h-4 w-4 cursor-pointer accent-neutral-800"
          />
          <label htmlFor="notRobot" className="select-none text-sm text-neutral-700 cursor-pointer">
            I'm not a robot
          </label>
          <div className="ml-4 flex flex-col items-center">
            <div className="h-10 w-10 rounded bg-neutral-100 flex items-center justify-center">
              <svg viewBox="0 0 64 64" className="h-7 w-7 opacity-40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="28" stroke="#888" strokeWidth="4" />
                <path d="M20 32c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#888" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
            <span className="mt-0.5 text-[9px] text-neutral-400 leading-tight text-center">reCAPTCHA<br />Privacy · Terms</span>
          </div>
        </div>

        {/* Submit */}
        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            className="rounded bg-neutral-800 px-10 py-2.5 text-sm font-semibold text-white transition hover:bg-black focus:outline-none focus:ring-2 focus:ring-neutral-600 focus:ring-offset-2"
          >
            Submit Now
          </button>
        </div>
      </form>
    </div>
  )
}
