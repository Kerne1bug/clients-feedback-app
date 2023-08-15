import { useSelector } from 'react-redux';
import styles from './styles.module.css';

function FormInput({
	name, handleChange, handleFocus, handleBlur, tagType, placeholder, errorMessage,
}) {
	const formState = useSelector((state) => state.form);
	const Tag = tagType === 'textarea' ? 'textarea' : 'input';
	const classNameText = tagType === 'textarea' ? `${styles.inputField} ${styles.inputFieldText}` : styles.inputField;

	return (
		<div>
			<Tag
				type="text"
				rows="4"
				placeholder={`${placeholder}*`}
				name={name}
				onChange={handleChange}
				onBlur={handleBlur}
				onFocus={handleFocus}
				value={formState.fields[name].value}
				className={classNameText}
			/>
			{
				!formState.fields[name].isValid && (
					<div className={styles.error}>
						{errorMessage}
					</div>
				)
			}
		</div>
	);
}

export default FormInput;
