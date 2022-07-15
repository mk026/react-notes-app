export const nameRules = {
  minLength: 1,
  maxLength: 50,
};

export const passwordRules = {
  minLength: 5,
  maxLength: 50,
};

export const noteRules = {
  title: {
    minLength: 1,
    maxLength: 50,
  },
  content: {
    minLength: 1,
    maxLength: 500,
  },
};

export const todoRules = {
  title: {
    minLength: 1,
    maxLength: 50,
  },
};

export const imageRules = {
  title: {
    minLength: 1,
    maxLength: 50,
  },
  description: {
    minLength: 1,
    maxLength: 500,
  },
};
