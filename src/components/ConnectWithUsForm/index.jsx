import { useDispatch, useSelector } from 'react-redux';
import { setFieldValidation, setIsSubmitting, setFieldValue } from '../../store/slices/formSlice';
import validation from '../../store/slices/validation';

import styles from './styles.module.css';
import FORMICON from './assets/Group.svg';
import BUTTONICON from './assets/send.svg';

function FeedBackForm() {
	const dispatch = useDispatch();
	const formState = useSelector((state) => state.form);

	const handleBlur = async (fieldName) => {
		try {
			await validation.fields[fieldName].validate(formState.fields[fieldName].value);
			dispatch(setFieldValidation({ fieldName, isValid: true }));
		} catch (error) {
			dispatch(setFieldValidation({ fieldName, isValid: false }));
		}
	};

	const handleSubmit = (e) => {
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

	return (
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
					<div className={styles.error}>Обязательное поле</div>
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
