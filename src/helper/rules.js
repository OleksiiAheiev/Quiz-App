export const rulesText = {
  required: (field) => `${field} is required`,
  minLength: (length) => `At least ${length} characters`,
  maxLength: (length) => `Must be less than ${length} characters`,
};

export const quizRules = {
  category: {
    required: { value: true, message: rulesText.required('Category') },
    minLength: { value: 3, message: rulesText.minLength(3) },
    maxLength: { value: 11, message: rulesText.maxLength(11) },
  },
  description: {
    required: { value: true, message: rulesText.required('Description') },
    minLength: { value: 20, message: rulesText.minLength(20) },
    maxLength: { value: 500, message: rulesText.maxLength(500) },
  },
  image: {
    required: { value: true, message: rulesText.required('Image') },
  },
};
