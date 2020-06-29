import React from 'react';

import { render, fireEvent, wait } from '@testing-library/react';
import Input from '../../Components/Input';

jest.mock('@unform/core', () => {
  return {
    useField() {
      return {
        fieldName: 'email',
        defaultValue: '',
        error: '',
        registerField: jest.fn(),
      };
    },
  };
});

describe('Input component', () => {
  it('Should be able to render an input', () => {
    const { getByPlaceholderText } = render(
      <Input name="email" placeholder="E-mail" />,
    );

    expect(getByPlaceholderText('E-mail')).toBeTruthy();
  });

  // it('Should render highlight on input focus', async () => {
  //   const { getByPlaceholderText, getByTestId } = render(
  //     <Input name="email" placeholder="E-mail" />,
  //   );

  //   const inputElement = getByPlaceholderText('E-mail');
  //   const containerElement = getByTestId('input-container');

  //   fireEvent.focus(inputElement);

  //   await wait(() => {
  //     expect(containerElement).toHaveStyle();
  //   });
  // });
});
