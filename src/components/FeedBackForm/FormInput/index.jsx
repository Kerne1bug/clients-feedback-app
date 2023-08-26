import { useSelector } from 'react-redux';
import {
	InputField,
	TextareaField,
	Error,
	ErrorActive,
} from './styled';

function FormInput({
	name, handleChange, handleFocus, handleBlur, tagType, placeholder, errorMessage,
}) {
	const formState = useSelector((state) => state.form);
	const { isValid } = formState.fields[name];
	const isTextarea = tagType === 'textarea';
	const isError = !isValid;
	const Tag = isTextarea ? TextareaField : InputField;

	return (
		<div>
			<Tag
				type={isTextarea ? 'textarea' : 'text'}
				rows={isTextarea ? '4' : undefined}
				placeholder={`${placeholder}*`}
				name={name}
				onChange={handleChange}
				onBlur={handleBlur}
				onFocus={handleFocus}
				value={formState.fields[name].value}
				isTextarea={isTextarea}
				isError={isError}
			/>
			{isValid ? (
				<Error />
			) : (
				<ErrorActive>
					{errorMessage}
				</ErrorActive>
			)}
		</div>
	);
}

export default FormInput;
