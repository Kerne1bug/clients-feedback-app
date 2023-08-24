import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import {
	InputField,
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

	return (
		<div>
			<InputField
				type={isTextarea ? 'textarea' : 'text'}
				rows={isTextarea ? '4' : undefined}
				additionalClass={styled.InputFieldText}
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
