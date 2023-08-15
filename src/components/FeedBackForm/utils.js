import validation from '../../store/slices/validation';

export async function validateField(fieldName, value) {
	try {
		await validation.fields[fieldName].validate(value);
		return true;
	} catch (error) {
		return false;
	}
}
