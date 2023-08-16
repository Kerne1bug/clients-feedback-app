import { useSelector } from 'react-redux';
import styles from './styles.module.css';

function FormInput({
	name, handleChange, handleFocus, handleBlur, tagType, placeholder, errorMessage,
}) {
	const formState = useSelector((state) => state.form);
	const Tag = tagType === 'textarea' ? 'textarea' : 'input';
	const { isValid } = formState.fields[name];
	const inputClassName = tagType === 'textarea' ? `${styles.inputField} ${styles.inputFieldText}` : styles.inputField;
	const tagClassName = isValid ? inputClassName : `${inputClassName} ${styles.errorInput}`;

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
				className={tagClassName}
			/>
			{ isValid ? (
				<div className={styles.error} />
			) : (
				<div className={styles.errorActive}>
					{errorMessage}
				</div>
			)}
		</div>
	);
}

export default FormInput;
