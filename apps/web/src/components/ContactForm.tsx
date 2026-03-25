import { useState, type FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
  honeypot: string; // Anti-spam field
}

const inputClasses =
  'w-full px-4 py-3 rounded-2xl bg-[#0b1222] border border-white/[0.08] text-[#f1f5f9] placeholder-[#64748b] focus:outline-none focus:border-[#2dd4bf]/50 focus:shadow-[0_0_12px_rgba(45,212,191,0.12)] transition-all duration-300 text-sm';

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    honeypot: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Honeypot check
    if (formData.honeypot) {
      console.log('Bot detected');
      return;
    }
    
    setStatus('loading');
    setErrorMessage('');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          botcheck: formData.honeypot,
        }),
      });
      
      const result = await response.json();
      if (!result.success) {
        throw new Error(result.message || 'Failed to send message');
      }
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '', honeypot: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot field (hidden) */}
      <input
        type="text"
        name="website"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />
      
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-xs font-medium text-[#94a3b8] uppercase tracking-wider mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          required
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={inputClasses}
        />
      </div>
      
      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-xs font-medium text-[#94a3b8] uppercase tracking-wider mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          placeholder="your@email.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={inputClasses}
        />
      </div>
      
      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-medium text-[#94a3b8] uppercase tracking-wider mb-2">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          placeholder="Tell me about your project or idea..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`${inputClasses} resize-none`}
        />
      </div>
      
      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full px-6 py-3 rounded-2xl font-medium text-sm tracking-wide bg-gradient-to-r from-[#2dd4bf]/35 to-[#818cf8]/30 border border-[#2dd4bf]/55 text-[#f8fafc] hover:from-[#2dd4bf]/50 hover:to-[#818cf8]/45 hover:border-[#2dd4bf] hover:shadow-[0_0_12px_rgba(45,212,191,0.35),0_0_36px_rgba(45,212,191,0.1)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
      >
        {status === 'loading' ? (
          <span className="inline-flex items-center gap-2">
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
            Sending...
          </span>
        ) : 'Send Message'}
      </button>
      
      {/* Status Messages */}
      {status === 'success' && (
        <div className="p-4 rounded-2xl border border-[#34d399]/25 bg-[#34d399]/8 text-[#34d399] text-sm">
          Message sent successfully! I'll get back to you soon.
        </div>
      )}
      
      {status === 'error' && (
        <div className="p-4 rounded-2xl border border-[#fbbf24]/25 bg-[#fbbf24]/8 text-[#fbbf24] text-sm">
          {errorMessage}
        </div>
      )}
    </form>
  );
}
