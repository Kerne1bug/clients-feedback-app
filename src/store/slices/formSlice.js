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
			state.fields[fieldName].value = value;
		},
		setFieldValidation: (state, action) => {
			const { fieldName, isValid } = action.payload;
			state.fields[fieldName].isValid = isValid;
		},
		setIsSubmitting: (state, action) => {
			state.isSubmitting = action.payload;
		},
	},
});

export const { setFieldValue, setFieldValidation, setIsSubmitting } = formSlice.actions;

export default formSlice.reducer;
