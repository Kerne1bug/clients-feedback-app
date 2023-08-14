import validation from '../../store/slices/validation';

export async function validateField(fieldName, value) {
	try {
		await validation.fields[fieldName].validate(value);
		return true;
	} catch (error) {
		return false;
	}
}

export function validate(formState, setErrors) {
	const validateFields = {
		name: formState.fields.name.value,
		phone: formState.fields.phone.value,
		email: formState.fields.email.value,
		message: formState.fields.message.value,
		agreement: formState.fields.agreement.value,
	};
	validation.validate(validateFields, { abortEarly: false })
		.catch((er) => {
			const fieldErrors = {};
			er.inner.forEach((error) => {
				fieldErrors[error.path] = error.message;
			});
			setErrors(fieldErrors);
		});
}
