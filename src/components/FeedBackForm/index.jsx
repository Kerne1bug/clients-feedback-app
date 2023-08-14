//* eslint-disable*/
import { useDispatch, useSelector } from 'react-redux';
import {
	setFieldValidation, setIsSubmitting, setFieldValue, setFieldsValidation,
} from '../../store/slices/formSlice';
import { validateField } from './utils';
import { FIELDS } from './constants';

import validation from '../../store/slices/validation';
import styles from './styles.module.css';
import FORMICON from './assets/Group.svg';
import BUTTONICON from './assets/send.svg';

function FeedBackForm() {
	const dispatch = useDispatch();
	const formState = useSelector((state) => state.form);

	const handleBlur = async (evt) => {
		const { name, value } = evt.target;
		const isValid = await validateField(name, value);
		console.log('DEBUG validation', name, value, isValid);

		dispatch(setFieldValidation({ fieldName: name, isValid }));
	};

	const handleChange = async (evt) => {
		const { name, value } = evt.target;
		dispatch(setFieldValue({ fieldName: name, value }));
		await handleBlur(evt);
	};

	const onChange = async (evt) => {
		const { name, checked } = evt.target;
		dispatch(setFieldValue({ fieldName: name, value: checked }));
	};

	const handleFocus = (evt) => {
		const { name } = evt.target;
		dispatch(setFieldValidation({ fieldName: name, isValid: true }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		validation.validate(formState.fields, { abortEarly: false })
			.then(() => {
				dispatch(setIsSubmitting(true));
				setTimeout(() => {
					dispatch(setIsSubmitting(false));
				}, 1000);
			})
			.catch((errors) => {
				const fieldErrors = {};

				errors.inner.forEach((error) => {
					fieldErrors[error.path] = error.message;
				});
				dispatch(setFieldsValidation({ fieldErrors }));
			});
	};

	return ( // отлдельный компонент форминпут и сообщение ошибки для сокращения кода
		// + не попы а фиксированную область увеличить расстояние пежду окнами ввода
		<div className={styles.header}>
			<div className={styles.mainForm}>
				<img src={FORMICON} alt="Сына тупина" className={styles.formIcon} />
				<h2 className={styles.formTitle}>Свяжитесь с нами</h2>
			</div>
			<p className={styles.formSubtitle}>Отправьте нам сообщение и мы ответим в ближайшее время</p>
			<form className={styles.form} onSubmit={handleSubmit} noValidate>
				<input
					type="text"
					placeholder="Ваше имя*"
					name={FIELDS.name}
					onChange={handleChange}
					onBlur={handleBlur}
					onFocus={handleFocus}
					value={formState.fields.name.value}
					className={styles.inputField}
				/>
				{!formState.fields.name.isValid && (
					<div className={styles.error}>Имя должно содержать от 2 до 128 символов</div>
				)}

				<input
					type="tel"
					placeholder="Телефон"
					name={FIELDS.phone}
					onChange={handleChange}
					onBlur={handleBlur}
					onFocus={handleFocus}
					value={formState.fields.phone.value}
					className={styles.inputField}
				/>
				{!formState.fields.phone.isValid && (
					<div className={styles.error}>Неправильный формат номера телефона</div>
				)}

				<input
					type="email"
					placeholder="Электронная почта*"
					name={FIELDS.email}
					onChange={handleChange}
					onBlur={handleBlur}
					onFocus={handleFocus}
					value={formState.fields.email.value}
					className={styles.inputField}
				/>
				{!formState.fields.email.isValid && (
					<div className={styles.error}>Неправильный формат электронной почты</div>
				)}

				<textarea
					placeholder="Пожалуйста, введите текст сообщения*"
					name={FIELDS.message}
					rows="4"
					onChange={handleChange}
					onBlur={handleBlur}
					onFocus={handleFocus}
					value={formState.fields.message.value}
					className={`${styles.inputField} ${styles.inputFieldText}`}
				/>
				{formState.fields.message.isValid || (
					<div className={styles.error}>Текст сообщения должен содержать от 5 до 1024 символов</div>
				)}

				<label className={styles.checkboxLabel}>
					<input
						type="checkbox"
						required
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
				{formState.fields.agreement.isValid || (
					<div className={styles.error}>Вы должны согласиться с правилами</div>
				)}

				<div>
					<button type="submit" className={styles.sendButton}>
						<img src={BUTTONICON} alt="Отправить" className={styles.sendIcon} />
						<p className={styles.sendText}>Отправить сообщение</p>
					</button>
				</div>
			</form>
		</div>
	);
}

export default FeedBackForm;
