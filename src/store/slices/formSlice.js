import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	fields: {
		name: { value: '', isValid: true },
		phone: { value: '', isValid: true },
		email: { value: '', isValid: true },
		message: { value: '', isValid: true },
		agreement: { value: false, isValid: true },
	},
	isSubmitting: false,
};

const formSlice = createSlice({
	name: 'form',
	initialState,
	reducers: {
		setFieldValue: (state, action) => {
			const { fieldName, value } = action.payload;
			// console.log(' хуета ', value);
			state.fields[fieldName].value = value;
		},
		setFieldValidation: (state, action) => {
			const { fieldName, isValid } = action.payload;
			state.fields[fieldName].isValid = isValid;
		},
		setFieldsValidation: (state, action) => {
			const { fieldErrors } = action.payload;

			const fieldNames = Object.keys(fieldErrors);

			return fieldNames.reduce((nextState, fieldName) => ({
				...nextState,
				fields: {
					...nextState.fields,
					[fieldName]: {
						...nextState.fields[fieldName],
						isValid: !fieldErrors[fieldName],
					},
				},
			}), state);
		},
		setIsSubmitting: (state, action) => {
			state.isSubmitting = action.payload;
		},
	},
});

export const {
	setFieldValue, setFieldValidation, setFieldsValidation, setIsSubmitting,
} = formSlice.actions;

export default formSlice.reducer;
