import React, {useEffect, useState} from 'react';
import {validator} from "../../utils/validator";
import TextField from "../common/form/textField";
import api from "../../api";
import SelectField from "../common/form/selectField";
import RadioField from "../common/form/radioField";
import MultiSelectField from "../common/form/multiSelectField";

const RegisterForm = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    profession: '',
    sex: 'мужской',
    qualities: [],
  });
  const [errors, setErrors] = useState({});
  const [professions, setProfession] = useState();
  const [qualities, setQualities] = useState({});


  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfession(data));
    api.qualities.fetchAll().then((data) => setQualities(data));
  }, []);

  const handleChange = (target) => {
    setData(prevState => ({
      ...prevState,
      [target.name]: target.value
    }))
  }
  useEffect(() => {
    validate()
  }, [data])


  const validatorConfig = {
    email: {
      isRequired:
        {message: 'Электронная почта обязательна для заполнения'},
      isEmail:
        {message: 'email введен некорректно'},
    },
    password: {
      isRequired:
        {message: 'Пароль обязателен для заполнения'},
      isCapitalSymbol:
        {message: 'Пароль должен содержать как минимум одну заглавную букву'},
      isContainDigit:
        {message: 'Пароль должен содержать как минимум одну цифру'},
      min:
        {message: 'Пароль должен состоять минимум из 8 символов', value: 8},

    },
    profession: {
      isRequired:
        {message: 'Обязательно выберите вашу профессию'},
    }
  }
  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }
  const isValid = Object.keys(errors).length === 0

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField label='Электронная почта'
                 name='email'
                 value={data.email}
                 onChange={handleChange}
                 error={errors.email}
      />
      <TextField label='Пароль'
                 type='password'
                 name='password'
                 value={data.password}
                 onChange={handleChange}
                 error={errors.password}
      />
      <SelectField
        defaultOption='Выбрать...'
        options={professions}
        onChange={handleChange}
        value={data.profession}
        error={errors.profession}
        label='Выберите вашу профессию'
      />
      <RadioField
        options={[
          {name: 'Мужской', value: 'мужской'},
          {name: 'Женский', value: 'женский'},
          {name: 'Другое', value: 'другое'},
        ]}
        value={data.sex}
        name='sex'
        onChange={handleChange}
        label='Выберите ваш пол'
      />
      <MultiSelectField
        options={qualities}
        onChange={handleChange}
        name='qualities'
        label='Выберите ваши качества'
      />
      <button className='btn btn-primary w-100 mx-auto'
              disabled={!isValid}
      >
        Отправить
      </button>
    </form>
  );
};

export default RegisterForm;
