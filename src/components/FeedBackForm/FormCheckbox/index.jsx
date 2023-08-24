import { useSelector } from 'react-redux';
import {
	CheckboxLabel,
	CheckboxInput,
	CheckboxText,
	// ErrorText,
	Error,
	ErrorActive,
} from './Styled';

function FormCheckBox({
	name, onChange, handleFocus, errorMessage,
}) {
	const formState = useSelector((state) => state.form);

	return (
		<div>
			<CheckboxLabel>
				<CheckboxInput
					type="checkbox"
					name={name}
					onChange={onChange}
					onFocus={handleFocus}
					checked={formState.fields.agreement.value}
				/>
				Я согласен(-на) с
				{' '}
				<CheckboxText>правилами</CheckboxText>
				{' '}
				по обработке моих персональных данных
			</CheckboxLabel>
			{formState.fields.agreement.isValid ? (
				<Error />
			) : (
				<ErrorActive>
					{errorMessage}
				</ErrorActive>
			)}
		</div>
	);
}

export default FormCheckBox;
