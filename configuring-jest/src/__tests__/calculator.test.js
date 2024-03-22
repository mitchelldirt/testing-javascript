import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Calculator from '../calculator.js'

// Adds new custom matchers to Jest's expect.
// This is what you need to do if you don't import /extend-expect.js and instead import * as jestDOM from '@testing-library/jest-dom'
// expect.extend(jestDOM)

test('the clear button switches from AC to C when there is an entry', () => {
  const {getByText} = render(<Calculator />)
  const clearButton = getByText('AC')

  fireEvent.click(getByText(/3/))
  expect(clearButton).toHaveTextContent('C')

  fireEvent.click(clearButton)
  expect(clearButton).toHaveTextContent('AC')
})
