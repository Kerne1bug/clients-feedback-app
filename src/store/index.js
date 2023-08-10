import { configureStore } from '@reduxjs/toolkit';
import formReducer from './slices/formSlice'; // Подключаем ваш slice

export const store = configureStore({
	reducer: {
		form: formReducer, // Добавляем ваш slice в редюсер
	},
});
