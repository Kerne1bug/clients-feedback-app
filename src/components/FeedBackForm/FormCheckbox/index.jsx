import { useSelector } from 'react-redux';
import styles from './styles.module.css';

function FormCheckBox({
	name, onChange, handleFocus, errorMessage,
}) {
	const formState = useSelector((state) => state.form);

	return (
		<div>
			<label className={styles.checkboxLabel}>
				<input
					type="checkbox"
					name={name}
					onChange={onChange}
					onFocus={handleFocus}
					checked={formState.fields.agreement.value}
					className={styles.checkboxInput}
				/>
				Я согласен(-на) с
				{' '}
				<span className={styles.checkboxText}>правилами</span>
				{' '}
				по обработке моих персональных данных
			</label>
			{/* {!formState.fields.agreement.isValid && (
				<div className={styles.error}>
					{errorMessage}
				</div> */}
			{ (formState.fields.agreement.isValid) ? (
				<div className={styles.error} />
			) : (
				<div className={styles.errorActive}>
					{errorMessage}
				</div>
			)}
		</div>
	);
}

export default FormCheckBox;
