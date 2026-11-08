import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const sending = useRef(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending.current || !formRef.current.reportValidity()) return;
    sending.current = true;
    setStatus(null);
    setLoading(true);

    try {
      const { default: emailjs } = await import('@emailjs/browser');
      await emailjs.send(
        "service_u4aqq4g",
        "template_o5fnkrj",
        {
          from_name: form.name,
          to_name: 'Sherezade',
          from_email: form.email,
          to_email: 'mlsherezde@gmail.com',
          message: form.message,
        },
        'wH57SuyDlCbAc4GPR'
      );
      setStatus({ type: 'success', message: 'Thank you for your message. I will get back to you soon!' });
      setForm({
        name: '',
        email: '',
        message: '',
      })
    } catch (error) {
      console.error(error);
      setStatus({ type: 'error', message: 'Your message could not be sent. Please try again.' });
    } finally {
      setLoading(false);
      sending.current = false;
    }
  };

  return (
    <>
    <div className="xl:mt-12 overflow-hidden">
      <motion.div 
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-1 bg-white/[0.02] rounded-2xl border border-white/10 p-6 sm:p-8'
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h2 className={styles.sectionHeadText}>Let&apos;s build something useful</h2>
          <p className="mt-4 max-w-xl leading-relaxed text-secondary">Have a project or a technical challenge in mind? Tell me a little about it.</p>
        <form 
          ref={formRef} 
          onSubmit={handleSubmit} 
          aria-busy={loading}
          className="mt-12 flex flex-col gap-8"
        >
          
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Name</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            maxLength={200}
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"
            className="border border-white/15 bg-[#0b0c10] py-4 px-4 placeholder:text-secondary text-white rounded-lg"
          >
          </input>
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            maxLength={254}
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email?"
            className="border border-white/15 bg-[#0b0c10] py-4 px-4 placeholder:text-secondary text-white rounded-lg"
          >
          </input>
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Message</span>
          <textarea
            rows="7"
            name="message"
            required
            maxLength={5000}
            value={form.message}
            onChange={handleChange}
            placeholder="What do you want to say?"
            className="border border-white/15 bg-[#0b0c10] py-4 px-4 placeholder:text-secondary text-white rounded-lg"
          >
          </textarea>
        </label>
        <button
          type="submit"
          disabled={loading}
          className="bg-[#c5a6bd] text-[#0b0c10] py-3 px-8 w-fit rounded-full font-semibold hover:bg-[#dfc7d8] transition-colors disabled:cursor-wait disabled:opacity-60"
        >
          {loading ? 'Sending...' : 'Send'} 
        </button>
      </form>
      <div className="mt-4" role="status" aria-live="polite">
        {status && <p className={status.type === 'error' ? 'text-red-300' : 'text-[#c5a6bd]'}>{status.message}</p>}
      </div>
      </motion.div>
    </div>
  </>
  )
}

export default SectionWrapper(Contact, "contact");
