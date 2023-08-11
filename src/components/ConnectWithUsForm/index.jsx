//* eslint-disable*/
import { useDispatch, useSelector } from 'react-redux';
import { setFieldValidation, setIsSubmitting, setFieldValue } from '../../store/slices/formSlice';

import validation from '../../store/slices/validation';
import styles from './styles.module.css';
import FORMICON from './assets/Group.svg';
import BUTTONICON from './assets/send.svg';

function FeedBackForm() {
	const dispatch = useDispatch();
	const formState = useSelector((state) => state.form);

	const validateField = async (fieldName, value) => { // вынести в отдельный ютилс
		try {
			await validation.fields[fieldName].validate(value);
			return true;
		} catch (error) {
			return false;
		}
	};

	const handleBlur = async (fieldName) => {
		const field = formState.fields[fieldName];
		console.log('хуйня1', field, 'jlbyldfnhb', fieldName);
		const isValid = await validateField(fieldName, field.value);
		dispatch(setFieldValidation({ fieldName, isValid }));
	};

	const handleSubmit = (e) => { // исправить
		e.preventDefault();

		validation.validate(formState.fields, { abortEarly: false })
			.then(() => {
				dispatch(setIsSubmitting(true));
				setTimeout(() => {
					dispatch(setIsSubmitting(false));
				}, 1000);
			});
	};

	const handleChange = (fieldName, value) => {
		dispatch(setFieldValue({ fieldName, value }));
	};

	const handleFocus = async (fieldName) => {
		dispatch(setFieldValidation({ fieldName, isValid: true }));
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
					id="name"
					name="name"
					onChange={(e) => handleChange('name', e.target.value)}
					onBlur={() => handleBlur('name')}
					onFocus={() => handleFocus('name')}
					value={formState.fields.name.value}
					className={styles.inputField}
				/>
				{!formState.fields.name.isValid && (
					<div className={styles.error}>Имя должно содержать от 2 до 128 символов</div>
				)}

				<input
					type="tel"
					placeholder="Телефон"
					id="phone"
					name="phone"
					onChange={(e) => handleChange('phone', e.target.value)}
					onBlur={() => handleBlur('phone')}
					onFocus={() => handleFocus('phone')}
					value={formState.fields.phone.value}
					className={styles.inputField}
				/>
				{!formState.fields.phone.isValid && (
					<div className={styles.error}>Неправильный формат номера телефона</div>
				)}

				<input
					type="email"
					placeholder="Электронная почта*"
					id="email"
					name="email"
					onChange={(e) => handleChange('email', e.target.value)}
					onBlur={() => handleBlur('email')}
					onFocus={() => handleFocus('email')}
					value={formState.fields.email.value}
					className={styles.inputField}
				/>
				{!formState.fields.email.isValid && (
					<div className={styles.error}>Неправильный формат электронной почты</div>
				)}

				<textarea
					placeholder="Пожалуйста, введите текст сообщения*"
					id="message"
					name="message"
					rows="4"
					onChange={(e) => handleChange('message', e.target.value)}
					onBlur={() => handleBlur('message')}
					onFocus={() => handleFocus('message')}
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
						name="agreement"
						onChange={(e) => handleChange('agreement', e.target.checked)}
						onBlur={() => handleBlur('agreement')}
						onFocus={() => handleFocus('agreement')}
						value={formState.fields.agreement.value}
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
