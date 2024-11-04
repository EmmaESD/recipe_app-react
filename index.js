const student = {
  name: "John",
  age: 20,
  isAdmin: false,
  marks: {
    math: 5,
    english: 4,
    history: 5,
  },
  wife: null,
};

// destructurer l'objet pour obtenir "name", "age" et "isAdmin"
const { name: user_name, age, isAdmin, id = 0 } = student;

console.log(user_name, age, isAdmin, id);
