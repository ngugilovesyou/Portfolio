import React, { useEffect, useRef, useState } from 'react'
import { Mail, MapPin, Send, Phone } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HelmetMeta from '../SEO/HelmetMeta'
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const containerRef = useRef(null)
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState('')

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power2.out'
      })
    }, containerRef)

    ScrollTrigger.refresh()

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setResult('Sending...')

    const formData = new FormData(event.target)
    // Access key from environment variable
    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY)
    console.log(import.meta.env.VITE_WEB3FORMS_ACCESS_KEY)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setResult('Form Submitted Successfully')
        setFormData({ name: '', email: '', message: '' })
        event.target.reset()
      } else {
        setResult(data.message || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setResult('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setResult(''), 5000)
    }
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'amsamgittau@gmail.com', href: 'mailto:amsamgittau@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Nairobi, Kenya', href: null },
    { icon: Phone, label: 'Phone', value: '+254 758 750 963', href: 'tel:+254758750963' }
  ]

  return (
    <>
    <HelmetMeta 
        title="Contact"
        description="Get in touch with Samuel Ngugi - Full-Stack Developer. Contact for collaborations, project inquiries, or just to say hello."
        keywords="Contact Samuel Ngugi, Full-Stack Developer contact, Hire developer, Nairobi developer"
        url="https://samuel-pi-three.vercel.app/contact"
      />
       <div ref={containerRef} className="min-h-screen px-3 sm:px-4 md:px-6 lg:px-8 pb-24 lg:pb-8 pt-4 sm:pt-6 md:pt-8">
      <div className="max-w-5xl mx-auto mt-12 sm:mt-14 md:mt-16 lg:mt-20">
        <h1 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Get in Touch</h1>
        <p className="text-text-secondary text-sm sm:text-base mb-4 sm:mb-6 md:mb-8">Let's build something amazing together</p>

        <div ref={formRef} className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-4">
            <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6">
              <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Information</h2>
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-accent/20 mt-0.5 flex-shrink-0">
                      <item.icon size={14} sm:size={16} className="text-accent" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] sm:text-xs text-text-secondary">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-xs sm:text-sm hover:text-accent transition-colors break-all">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-xs sm:text-sm break-all">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6">
              <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Connect With Me</h2>
              <div className="flex gap-2 sm:gap-3">
                <a href="https://github.com/ngugilovesyou" target="_blank" rel="noopener noreferrer" 
                   className="p-2 sm:p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <FaGithub size={18} sm:size={20} />
                </a>
                <a href="https://www.linkedin.com/in/samuel-gitau-361350261/" target="_blank" rel="noopener noreferrer"
                   className="p-2 sm:p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <FaLinkedin size={18} sm:size={20} />
                </a>
                <a href="https://x.com/k_ntycoon" target="_blank" rel="noopener noreferrer"
                   className="p-2 sm:p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <FaTwitter size={18} sm:size={20} />
                </a>
                <a href="https://www.instagram.com/ngugilovesyou_/" target="_blank" rel="noopener noreferrer"
                   className="p-2 sm:p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <FaInstagram size={18} sm:size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form with Web3Forms */}
          <div className="lg:col-span-2 glass rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6">
            <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Send a Message</h2>
            <form onSubmit={onSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-text-secondary mb-0.5 sm:mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-white/5 border border-white/10 focus:border-accent focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-text-secondary mb-0.5 sm:mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-white/5 border border-white/10 focus:border-accent focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-text-secondary mb-0.5 sm:mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-white/5 border border-white/10 focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>
              
              {/* Hidden bot check for Web3Forms */}
              <input type="checkbox" name="botcheck" className="hidden" />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 sm:py-3 rounded-lg bg-accent hover:bg-accent-hover text-white font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">⚪</span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} sm:size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
            {result && (
              <p className={`mt-3 sm:mt-4 text-xs sm:text-sm text-center ${
                result.includes('✅') ? 'text-green-500' : 'text-red-500'
              }`}>
                {result}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
   
  )
}

export default Contact