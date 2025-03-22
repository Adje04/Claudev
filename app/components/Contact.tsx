'use client';

import { useRef, useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { slideIn } from './utils/motion';
import { toast, ToastContainer } from 'react-toastify';
import { EarthCanvas } from "./canvas";
import Button from './Button';


interface FormState { name: string; email: string; message: string; }

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [form, setForm] = useState<FormState>({ name: '', email: '', message: '', });
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    from_name: form.name,
                    to_name: 'Équipe de développement',
                    from_email: form.email,
                    to_email: 'adjee22@fmail.com',
                    message: form.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            )
            .then(
                () => {
                    setLoading(false);
                    toast('Merci ! Je vous répondrai dès que possible.');

                    setForm({ name: '', email: '', message: '' });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);
                    toast('Oups, une erreur est survenue. Veuillez réessayer.');
                }
            );
    };

    return (
        <section className="padding-container max-container mt-10">
            <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
                <ToastContainer />
                <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className="flex-[0.75] 'bg-white/5 border border-purple p-5 rounded-2xl">
                    <p className="section-sub-text">Me contacter</p>
                    <h3 className="section-head-text">Contact.</h3>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">Votre nom</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Quel est votre nom ?"
                                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">Votre e-mail</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Quelle est votre adresse e-mail ?"
                                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">Votre message</span>
                            <textarea
                                rows={7}
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Que souhaitez-vous dire ?"
                                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                            />
                        </label>

                        <Button
                            type="submit"
                            title={loading ? 'Envoi en cours...' : 'Envoyer'}
                            variant="btn_full"
                        />


                    </form>
                </motion.div>

                <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
                    {<EarthCanvas />}
                </motion.div>
            </div>
        </section>

    );
};

export default Contact;
