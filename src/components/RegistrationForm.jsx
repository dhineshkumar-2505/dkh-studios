import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import './RegistrationForm.css'

const RegistrationForm = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        domain: '',
        deadline: '',
        details: ''
    })

    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error'
    const [hasSubmittedBefore, setHasSubmittedBefore] = useState(false)

    useEffect(() => {
        if (sessionStorage.getItem('formSubmitted')) {
            setHasSubmittedBefore(true)
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1 }
        )

        const elements = document.querySelectorAll('.animate-fade-up')
        elements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    const domains = [
        'Web Development',
        'App Development',
        'AI & Machine Learning',
        'IoT & Hardware',
        'Blockchain',
        'Cybersecurity',
        'Other'
    ]

    const validate = (name, value) => {
        let error = ''
        switch (name) {
            case 'fullName':
                if (!value.trim()) error = 'Full Name is required'
                break
            case 'email':
                if (!/\S+@\S+\.\S+/.test(value)) error = 'Invalid email address'
                break
            case 'phone':
                if (!/^\d{10}$/.test(value)) error = 'Phone number must be 10 digits'
                break
            case 'domain':
                if (!value) error = 'Please select a project domain'
                break
            case 'deadline':
                if (!value) error = 'Project deadline is required'
                break
            default:
                break
        }
        return error
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))

        const error = validate(name, value)
        setErrors(prev => ({ ...prev, [name]: error }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Validate all fields
        const newErrors = {}
        Object.keys(formData).forEach(key => {
            if (key !== 'details') {
                const error = validate(key, formData[key])
                if (error) newErrors[key] = error
            }
        })

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        setIsSubmitting(true)

        try {
            const response = await fetch("https://formsubmit.co/ajax/dkhstudiosbuisness@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: `New Project Registration: ${formData.fullName}`,
                    _template: 'table',
                    _autoresponse: 'We have received your project registration. We will reach out to you shortly.'
                })
            })

            if (response.ok) {
                // Send automated premium email via EmailJS
                try {
                    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
                    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
                    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

                    if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
                        await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
                            to_name: formData.fullName,
                            to_email: formData.email,
                            from_name: 'DKH Studios',
                            reply_to: 'dkhstudiosbuisness@gmail.com'
                        }, PUBLIC_KEY)
                        console.log('Premium email sent successfully!')
                    } else {
                        console.warn('EmailJS keys missing in .env')
                    }
                } catch (error) {
                    console.error('EmailJS Error:', error)
                }

                setSubmitStatus('success')
                sessionStorage.setItem('formSubmitted', 'true')
                setHasSubmittedBefore(true)

                // Redirect to contact page after 5 seconds
                setTimeout(() => {
                    navigate('/')
                    setTimeout(() => {
                        const contactSection = document.getElementById('contact')
                        if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' })
                    }, 100)
                }, 5000)

                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    domain: '',
                    deadline: '',
                    details: ''
                })
            } else {
                setSubmitStatus('error')
            }
        } catch (error) {
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    if (submitStatus === 'success') {
        return (
            <div className="registration-success animate-fade-up">
                <div className="success-icon">🎉</div>
                <h2 className="h2 text-gradient">Registration Successful!</h2>
                <p className="body-lg text-muted quote-text">
                    "We will reach you soon at the earliest."
                </p>

                <div className="success-actions">
                    <a href="tel:+919876543210" className="btn btn-primary">
                        Make a Call
                    </a>
                    <a href="mailto:dkhstudiosbuisness@gmail.com" className="btn btn-secondary">
                        Send a Message
                    </a>
                </div>

                <p className="body-sm text-muted mt-4">
                    Redirecting to contact page in 5 seconds...
                </p>

                <button
                    className="btn btn-text"
                    onClick={() => setSubmitStatus(null)}
                >
                    Register Another Project
                </button>
            </div>
        )
    }

    return (
        <section id="registration" className="registration-section">
            <div className="container">
                <div className="registration-wrapper glass-card animate-fade-up">
                    <div className="registration-header text-center">
                        <h2 className="h2 text-gradient">
                            {hasSubmittedBefore ? 'Want another project?' : 'Start Your Project'}
                        </h2>
                        <p className="body-md text-muted">
                            {hasSubmittedBefore
                                ? 'We are ready to bring your next idea to life. Fill in the details below.'
                                : 'Fill in the details below to kickstart your innovation journey with DKH STUDIOS.'
                            }
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="registration-form">
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className={errors.fullName ? 'error' : ''}
                                placeholder="John Doe"
                            />
                            {errors.fullName && <span className="error-msg">{errors.fullName}</span>}
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={errors.email ? 'error' : ''}
                                    placeholder="john@example.com"
                                />
                                {errors.email && <span className="error-msg">{errors.email}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={errors.phone ? 'error' : ''}
                                    placeholder="9876543210"
                                />
                                {errors.phone && <span className="error-msg">{errors.phone}</span>}
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="domain">Project Domain</label>
                                <select
                                    id="domain"
                                    name="domain"
                                    value={formData.domain}
                                    onChange={handleChange}
                                    className={errors.domain ? 'error' : ''}
                                >
                                    <option value="">Select Domain</option>
                                    {domains.map(d => <option key={d} value={d}>{d}</option>)}
                                </select>
                                {errors.domain && <span className="error-msg">{errors.domain}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="deadline">Project Deadline</label>
                                <input
                                    type="date"
                                    id="deadline"
                                    name="deadline"
                                    value={formData.deadline}
                                    onChange={handleChange}
                                    className={errors.deadline ? 'error' : ''}
                                />
                                {errors.deadline && <span className="error-msg">{errors.deadline}</span>}
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="details">Additional Details (Optional)</label>
                            <textarea
                                id="details"
                                name="details"
                                value={formData.details}
                                onChange={handleChange}
                                rows="4"
                                placeholder="Tell us more about your project idea..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className={`btn btn-primary submit-btn ${isSubmitting ? 'loading' : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                        </button>

                        {submitStatus === 'error' && (
                            <p className="error-msg text-center mt-4">
                                Something went wrong. Please try again or contact us directly.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}

export default RegistrationForm
