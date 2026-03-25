import { useState, type FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
  honeypot: string;
}

const inputClasses =
  'w-full px-4 py-3 rounded-sm bg-surface border border-base-300 text-text placeholder:text-base-400 focus:outline-none focus:border-neon-rose focus:ring-1 focus:ring-neon-rose/30 transition-all duration-200 text-sm font-body';

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

    if (formData.honeypot) {
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
      <input
        type="text"
        name="website"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div>
        <label htmlFor="name" className="block font-mono text-[10px] uppercase tracking-widest text-muted mb-2">
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

      <div>
        <label htmlFor="email" className="block font-mono text-[10px] uppercase tracking-widest text-muted mb-2">
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

      <div>
        <label htmlFor="message" className="block font-mono text-[10px] uppercase tracking-widest text-muted mb-2">
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

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full px-5 py-3 font-mono text-sm uppercase tracking-wider rounded-sm border-2 border-text bg-text text-surface hover:bg-neon-rose hover:border-neon-rose transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <span className="inline-flex items-center justify-center gap-2">
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending
          </span>
        ) : (
          'Send message'
        )}
      </button>

      {status === 'success' && (
        <div className="p-4 rounded-sm border border-neon-lime/40 bg-neon-lime/5 text-neon-lime text-sm">
          Message sent. I’ll get back to you soon.
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 rounded-sm border border-neon-rose/40 bg-neon-rose/5 text-neon-rose text-sm">
          {errorMessage}
        </div>
      )}
    </form>
  );
}
