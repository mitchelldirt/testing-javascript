// Testing Middleware

// 💣 remove this todo test (it's only here so you don't get an error about missing tests)
test.todo('remove me')

// 🐨 you'll need both of these:
import {UnauthorizedError} from 'express-jwt'
import errorMiddleware from '../error-middleware'

// 🐨 Write a test for the UnauthorizedError case
// 💰 const error = new UnauthorizedError('some_error_code', {message: 'Some message'})
// 💰 const res = {json: jest.fn(() => res), status: jest.fn(() => res)}
describe('Unauthorized Error', () => {
  it('Gives me a 401 error', () => {
    const error = new UnauthorizedError('Unauthorized', {
      message: 'You cannot access this',
    })

    const req = {}
    const next = jest.fn()
    const res = {json: jest.fn(() => res), status: jest.fn(() => res)}
    res.headersSent = false

    // we're passing res to this which it then "modifies" which is why it doesn't need to be within a variable
    errorMiddleware(error, req, res, next)

    expect(next).not.toHaveBeenCalled()

    expect(res.status).toHaveBeenCalledWith(401)

    expect(res.json).toHaveBeenCalledWith({
      code: error.code,
      message: error.message,
    })
  })
})

// 🐨 Write a test for the headersSent case
describe('headersSent Case', () => {
  it('calls next if headers were sent', () => {
    const error = new Error('Blah')
    const req = {}
    const res = {
      json: jest.fn(() => res),
      status: jest.fn(() => res),
      headersSent: true,
    }
    const next = jest.fn()

    errorMiddleware(error, req, res, next)

    expect(next).toHaveBeenCalledWith(error)
  })

  it('does not call next because headersSent is false', () => {
    const error = new Error('Blah')
    const req = {}
    const res = {
      json: jest.fn(() => res),
      status: jest.fn(() => res),
      headersSent: false,
    }
    const next = jest.fn()

    errorMiddleware(error, req, res, next)

    expect(next).not.toHaveBeenCalled()
  })
})

// 🐨 Write a test for the else case (responds with a 500)
