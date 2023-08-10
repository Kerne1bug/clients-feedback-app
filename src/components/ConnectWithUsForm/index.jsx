import { useState } from 'react';
import styles from './styles.module.css';
import FORMICON from './assets/Group.svg';
import BUTTONICON from './assets/send.svg';

function FeedBackForm() {
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		email: '',
		message: '',
		isChecked: false,
	});

	const handleInputChange = (field, value) => {
		setFormData((prevData) => ({
			...prevData,
			[field]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
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
					value={formData.name}
					onChange={(e) => handleInputChange('name', e.target.value)}
					required
					className={styles.inputField}
				/>
				<input
					type="tel"
					placeholder="Телефон"
					id="phone"
					value={formData.phone}
					onChange={(e) => handleInputChange('phone', e.target.value)}
					className={styles.inputField}
				/>
				<input
					type="email"
					placeholder="Электронная почта*"
					id="email"
					value={formData.email}
					onChange={(e) => handleInputChange('email', e.target.value)}
					required
					className={styles.inputField}
				/>
				<textarea
					placeholder="Текст сообщения*"
					id="message"
					value={formData.message}
					onChange={(e) => handleInputChange('message', e.target.value)}
					rows="4"
					required
					className={`${styles.inputField} ${styles.inputFieldText}`}
				/>
				<p className={styles.formNote}>*Обязательные поля</p>
				<label className={styles.checkboxLabel}>
					<input
						type="checkbox"
						checked={formData.isChecked}
						onChange={() => handleInputChange('isChecked', !formData.isChecked)}
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
				<div>
					<button type="submit" className={styles.sendButton}>
						<img src={BUTTONICON} alt="Отправить" className={styles.sendIcon} />
						<p className={styles.sendText}>Отправить cообщение</p>
					</button>
				</div>
			</form>
		</div>
	);
}

export default FeedBackForm;
