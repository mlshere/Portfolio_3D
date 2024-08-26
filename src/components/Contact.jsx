import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
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
    )
    .then(() => {
      setLoading(false);
      alert('Thank you for your message. I will get back to you soon!');
      setForm({
        name: '',
        email: '',
        message: '',
      })
    })
      .catch((error) => {
      setLoading(false);
      console.log(error);
      alert('Something went wrong. Please try again.');
      
    });
  };

  return (
    <>
    <div className="xl:mt-12 overflow-hidden">
      <motion.div 
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-1 bg-[#070806] rounded-2xl border-2 border-secondary p-8'
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact</h3>
        <form 
          ref={formRef} 
          onSubmit={handleSubmit} 
          className="mt-12 flex flex-col gap-8"
        >
          
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"
            className="bg-black-gradient py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium"
          >
          </input>
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email?"
            className="bg-black-gradient py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium"
          >
          </input>
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Message</span>
          <textarea
            rows="7"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What do you want to say?"
            className="bg-black-gradient py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium"
          >
          </textarea>
        </label>
        <button
          type="submit"
          className="bg-[#ac829e] text-white py-3 px-8 outline-none w-fit rounded-xl font-medium hover:bg-[#77506b] transition ease-in-out"
        >
          {loading ? 'Sending...' : 'Send'} 
        </button>
      </form>
      </motion.div>
    </div>
  </>
  )
}

export default SectionWrapper(Contact, "contact");

