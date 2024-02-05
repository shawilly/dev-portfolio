import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { contact } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { slideIn } from '../utils/motion';
import { EarthCanvas } from './canvas';

interface FormInput {
    name: string;
    email: string;
    message: string;
}

enum FORM_ELEMENTS {
    INPUT = 'input',
    TEXTAREA = 'textarea',
}

const nullForm: FormInput = {
    name: '',
    email: '',
    message: '',
};

const ContactSection = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [form, setForm] = useState<FormInput>(nullForm);
    const [loading, setLoading] = useState(false);

    const formSetter = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {
            target: { name, value },
        } = e;
        setForm((form) => ({ ...form, [name]: value }));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => formSetter(e);

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => formSetter(e);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            await emailjs.send(
                'service_qq39z0k',
                'template_sra5pym',
                {
                    ...contact,
                    from_name: form.name,
                    from_email: form.email,
                    message: form.message,
                },
                '2IvTkCMuCOiYXPDH5',
            );
            setLoading(false);
            alert('Thank you. I will get back to you as soon as possible');
            setForm(nullForm);
        } catch (error) {
            setLoading(false);
            console.error(error);
            alert(`Something went wrong. Please try again or reach out to me directly at ${contact.to_email}`);
        }
    };

    const createFormFields = (fields: { name: keyof FormInput; value: string }[]) =>
        fields.map((field) => {
            const { name, value } = field;
            const isTextArea = name === 'message';
            const type = isTextArea ? FORM_ELEMENTS.TEXTAREA : FORM_ELEMENTS.INPUT;
            const specificProps = isTextArea
                ? { rows: 7, onChange: handleTextAreaChange }
                : { type, onChange: handleInputChange };

            const components: JSX.IntrinsicElements[FORM_ELEMENTS] = {
                key: `form-${type}-${name}`,
                name,
                value,
                placeholder: `What's your ${name}?`,
                className:
                    'bg-tertiary py-4 px-6 placeholder:text-secondary text-#f9f9f9 rounded-lg outlined-none border-none font-medium',
                ...specificProps,
            };

            const formElement = React.createElement(type, {
                ...components,
                onChange: handleInputChange,
            });

            return (
                <label key={`form-label-${name}`} className="flex flex-col">
                    <span className="text-#f9f9f9 font-medium mb-4">{`Your ${name}`}</span>
                    {formElement}
                </label>
            );
        });

    return (
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
            <motion.div
                variants={slideIn('left', 'tween', 0.2, 1)}
                className="flex-[0.75] h-screen bg-black-100 p-8 rounded-2xl"
            >
                <p className={styles.sectionSubText}>Let's talk</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>
                <form ref={formRef} onSubmit={handleSubmit} className="mt-12 mb-12 flex flex-col gap-8">
                    {createFormFields([
                        { name: 'name', value: form.name },
                        { name: 'email', value: form.email },
                        { name: 'message', value: form.message },
                    ])}
                    <button
                        type="submit"
                        className="bg-tertiary py-3 px-8 outline-none w-fit text-#f9f9f9 font-bold shadow-md shadow-primary rounded-xl"
                    >
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </motion.div>
            <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

const Contact: React.FC<{}> = () => {
    return <SectionWrapper component={ContactSection} nameId="contact" />;
};

export default Contact;
