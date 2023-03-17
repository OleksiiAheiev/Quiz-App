import axios from './service';

const quizes = {
    fetchCategories: () => axios.get('/categories').then((data) => data),
    fetchQuestions: () => axios.get('/questions').then((data) => data),
};

export { quizes };
