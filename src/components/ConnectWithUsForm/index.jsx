import { useState } from 'react';
import styles from './styles.module.css';
import FORMICON from './assets/Group.svg';
import BUTTONICON from './assets/send.svg';

function FeedBackForm() {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [isChecked, setIsChecked] = useState(false);

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handlePhoneChange = (e) => {
		setPhone(e.target.value);
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handleMessageChange = (e) => {
		setMessage(e.target.value);
	};

	const handleCheckboxChange = (e) => {
		setIsChecked(e.target.checked);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Обработка отправки формы
	};

	return (
		<div className={styles.header}>
			<div className={styles.mainForm}>
				<img src={FORMICON} alt="Сына тупина" className={styles.formIcon} />
				<h2 className={styles.formTitle}>Свяжитесь с нами</h2>
			</div>
			<p className={styles.formSubtitle}>Отправьте нам сообщение и мы ответим в ближайшее время</p>
			<form onSubmit={handleSubmit} className={styles.form}>
				<input
					type="text"
					placeholder="Ваше имя*"
					id="name"
					value={name}
					onChange={handleNameChange}
					required
					className={styles.inputField}
				/>
				<input
					type="tel"
					placeholder="Телефон"
					id="phone"
					value={phone}
					onChange={handlePhoneChange}
					className={styles.inputField}
				/>
				<input
					type="email"
					placeholder="Электронная почта*"
					id="email"
					value={email}
					onChange={handleEmailChange}
					required
					className={styles.inputField}
				/>
				<textarea
					placeholder="Текст сообщения*"
					id="message"
					value={message}
					onChange={handleMessageChange}
					rows="4"
					required
					className={`${styles.inputField} ${styles.inputFieldText}`}
				/>
				<p className={styles.formNote}>*Обязательные поля</p>
				<label className={styles.checkboxLabel}>
					<input
						type="checkbox"
						checked={isChecked}
						onChange={handleCheckboxChange}
						required
						className={styles.checkboxInput}
					/>
					Я согласен(-на) с
					{' '}
					<span className={styles.checkboxText}>
						правилами
						{' '}
					</span>
					по обработке моих персональных данных
				</label>
				<button type="submit" className={styles.sendButton}>
					<img src={BUTTONICON} alt="Отправить" className={styles.sendIcon} />
					<p className={styles.sendText}>
						Отправить cообщение
					</p>
				</button>
			</form>
		</div>
	);
}

export default FeedBackForm;
