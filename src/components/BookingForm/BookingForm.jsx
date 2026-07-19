import { useState } from 'react';
import Button from '../Button/Button';
import icons from '../../images/icons.svg';

import css from './BookingForm.module.css';

const BookingForm = ({ camperId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log({
      camperId,
      name,
      email,
    });

    alert('Booking request accepted!');

    setName('');
    setEmail('');
    setErrors({});
  };

  return (
    <div className={css.formSection}>
      <div className={css.formHeader}>
        <h3 className={css.title}>Book your campervan now</h3>

        <p className={css.subtitle}>Stay connected! We are always ready to help you.</p>
      </div>

      <form onSubmit={handleSubmit} className={css.form}>
        <div className={css.field}>
          <div className={css.inputWrap}>
            {errors.name && <span className={css.labelBox}>Name*</span>}

            <input
              className={`${css.input} ${errors.name ? css.inputError : ''}`}
              type="text"
              placeholder={errors.name ? '' : 'Name*'}
              value={name}
              onChange={e => setName(e.target.value)}
            />

            {errors.name && (
              <svg className={css.errorIcon}>
                <use href={`${icons}#icon-error`} />
              </svg>
            )}
          </div>

          {errors.name && <p className={css.errorText}>{errors.name}</p>}
        </div>

        <div className={css.field}>
          <div className={css.inputWrap}>
            {errors.email && <span className={css.labelBox}>Email*</span>}

            <input
              className={`${css.input} ${errors.email ? css.inputError : ''}`}
              type="email"
              placeholder={errors.email ? '' : 'Email*'}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            {errors.email && (
              <svg className={css.errorIcon}>
                <use href={`${icons}#icon-error`} />
              </svg>
            )}
          </div>

          {errors.email && <p className={css.errorText}>{errors.email}</p>}
        </div>

        <Button type="submit" className={css.submit}>
          Send
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;
