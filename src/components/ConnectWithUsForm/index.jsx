//* eslint-disable*/
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFieldValidation, setIsSubmitting, setFieldValue } from '../../store/slices/formSlice';
import { validateField, validate } from './utils';
import { FIELDS } from './constants';

// import validation from '../../store/slices/validation';
import styles from './styles.module.css';
import FORMICON from './assets/Group.svg';
import BUTTONICON from './assets/send.svg';

function FeedBackForm() {
	const dispatch = useDispatch();
	const formState = useSelector((state) => state.form);
	const [errors, setErrors] = useState();
	const handleBlur = async (evt) => {
		const { name, value } = evt.target;
		const isValid = await validateField(name, value);
		dispatch(setFieldValidation({ fieldName: name, isValid }));
		validate(formState, setErrors);
	};

	const handleChange = async (evt) => {
		const { name, value } = evt.target;
		dispatch(setFieldValue({ fieldName: name, value }));
		await handleBlur(evt);
	};

	const onChange = async (evt) => {
		const { name, checked } = evt.target;
		dispatch(setFieldValue({ fieldName: name, value: checked }));
		validate(formState, setErrors);
		console.log('validateFields-111', formState.fields.agreement.value);
	};
	console.log('validateFields-222', formState.fields.agreement.value);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(setIsSubmitting(true));
		validate(formState, setErrors);
		dispatch(setIsSubmitting(true));
	};

	return ( // отлдельный компонент форминпут и сообщение ошибки для сокращения кода
		// + не попы а фиксированную область увеличить расстояние пежду окнами ввода
		<div className={styles.header}>
			<div className={styles.mainForm}>
				<img src={FORMICON} alt="Сына тупина" className={styles.formIcon} />
				<h2 className={styles.formTitle}>Свяжитесь с нами</h2>
			</div>
			<p className={styles.formSubtitle}>Отправьте нам сообщение и мы ответим в ближайшее время</p>
			<form className={styles.form} onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Ваше имя*"
					name={FIELDS.name}
					onChange={handleChange}
					onBlur={handleBlur}
					value={formState.fields.name.value}
					className={styles.inputField}
				/>
				{errors?.name && (
					<div className={styles.error}>{errors?.name}</div>
				)}

				<input
					type="tel"
					placeholder="Телефон"
					name={FIELDS.phone}
					onChange={handleChange}
					onBlur={handleBlur}
					value={formState.fields.phone.value}
					className={styles.inputField}
				/>
				{errors?.phone && (
					<div className={styles.error}>{errors?.phone}</div>
				)}

				<input
					type="email"
					placeholder="Электронная почта*"
					name={FIELDS.email}
					onChange={handleChange}
					onBlur={handleBlur}
					value={formState.fields.email.value}
					className={styles.inputField}
				/>
				{errors?.email && (
					<div className={styles.error}>{errors?.email}</div>
				)}

				<textarea
					placeholder="Пожалуйста, введите текст сообщения*"
					name={FIELDS.message}
					rows="4"
					onChange={handleChange}
					onBlur={handleBlur}
					value={formState.fields.message.value}
					className={`${styles.inputField} ${styles.inputFieldText}`}
				/>
				{errors?.message && (
					<div className={styles.error}>{errors?.message}</div>
				)}

				<label className={styles.checkboxLabel}>
					<input
						type="checkbox"
						className={styles.checkboxInput}
						name={FIELDS.agreement}
						onChange={onChange}
						checked={formState.fields.agreement.value}
					/>
					Я согласен(-на) с
					{' '}
					<span className={styles.checkboxText}>правилами</span>
					{' '}
					по обработке моих персональных данных
				</label>
				{errors?.agreement && (
					<div className={styles.error}>{errors?.agreement}</div>
				)}

				<div>
					<button type="submit" className={styles.sendButton} disabled={formState.isSubmitting}>
						<img src={BUTTONICON} alt="Отправить" className={styles.sendIcon} />
						<p className={styles.sendText}>Отправить сообщение</p>
					</button>
				</div>
			</form>
		</div>
	);
}

export default FeedBackForm;
