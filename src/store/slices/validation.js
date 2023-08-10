import * as yup from 'yup';

const validation = yup.object().shape({
	userName: yup
		.string()
		.min(2, 'Имя должно содержать минимум 2 символа')
		.max(128, 'Имя не должно превышать 128 символов')
		.required('Пожалуйста, введите ваше имя'),
	phoneNumber: yup
		.string()
		.matches(
			/^(\+7\(\d{3}\)\d{3}-\d{2}-\d{2}|7\d{10})$/,
			'Неправильный формат номера телефона',
		),
	email: yup
		.string()
		.email('Неправильный формат электронной почты')
		.required('Пожалуйста, введите электронную почту')
		.max(320, 'Электронная почта не должна превышать 320 символов'),
	reviewText: yup
		.string()
		.min(5, 'Текст сообщения должен содержать минимум 5 символов')
		.max(1024, 'Текст сообщения не должен превышать 1024 символов')
		.required('Пожалуйста, введите текст сообщения'),
	agreeForPersonalDataProcessing: yup
		.boolean()
		.oneOf([true], 'Вы должны согласиться с правилами'),
});

export default validation;
