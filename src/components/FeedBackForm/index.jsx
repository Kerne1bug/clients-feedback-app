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
import FormInput from './FormInput';
import FormCheckBox from './FormCheckbox';

function FeedBackForm() {
	const dispatch = useDispatch();
	const formState = useSelector((state) => state.form);

	const handleBlur = async (evt) => {
		const { name, value } = evt.target;
		const isValid = await validateField(name, value);

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

		const validationFields = {
			name: formState.fields.name.value,
			phone: formState.fields.phone.value,
			email: formState.fields.email.value,
			message: formState.fields.message.value,
			agreement: formState.fields.agreement.value,
		};

		validation.validate(validationFields, { abortEarly: false })
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

	return (
		<div className={styles.header}>
			<div className={styles.mainForm}>
				<img src={FORMICON} alt="Лев Николаевич" className={styles.formIcon} />
				<h2 className={styles.formTitle}>Свяжитесь с нами</h2>
			</div>
			<p className={styles.formSubtitle}>Отправьте нам сообщение и мы ответим в ближайшее время</p>
			<form className={styles.form} onSubmit={handleSubmit} noValidate>
				<FormInput
					name={FIELDS.name}
					placeholder="Введите Имя"
					handleChange={handleChange}
					handleBlur={handleBlur}
					handleFocus={handleFocus}
					errorMessage="Имя должно содержать от 2 до 128 символов"
				/>
				<FormInput
					name={FIELDS.phone}
					placeholder="Номер телефона"
					handleChange={handleChange}
					handleBlur={handleBlur}
					handleFocus={handleFocus}
					errorMessage="Неправильный формат номера телефона"
				/>
				<FormInput
					name={FIELDS.email}
					placeholder="Введите Ваш email"
					handleChange={handleChange}
					handleBlur={handleBlur}
					handleFocus={handleFocus}
					errorMessage="Неправильный формат электронной почты"
				/>
				<FormInput
					name={FIELDS.message}
					placeholder="Пожалуйста, введите текст сообщения"
					tagType="textarea"
					handleChange={handleChange}
					handleBlur={handleBlur}
					handleFocus={handleFocus}
					errorMessage="Текст сообщения должен содержать от 5 до 1024 символов"
				/>

				<p className={styles.formNote}>*обязательные поля</p>

				<FormCheckBox
					name={FIELDS.agreement}
					onChange={onChange}
					handleFocus={handleFocus}
					errorMessage="Вы должны согласиться с правилами"
				/>
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
