// Testing Middleware

// 🐨 you'll need both of these:
import {UnauthorizedError} from 'express-jwt'
import errorMiddleware from '../error-middleware'

function buildRes(overrides) {
  const res = {
    json: jest.fn(() => res),
    status: jest.fn(() => res),
    ...overrides,
  }
  return res
}

// 🐨 Write a test for the UnauthorizedError case
// 💰 const error = new UnauthorizedError('some_error_code', {message: 'Some message'})
// 💰 const res = {json: jest.fn(() => res), status: jest.fn(() => res)}
describe('Unauthorized Error', () => {
  it('Gives me a 401 error', () => {
    const code = 'some_error_code'
    const message = 'Some message'
    const error = new UnauthorizedError(code, {message: message})

    const req = {}
    const next = jest.fn()
    const res = buildRes()
    res.headersSent = false

    // we're passing res to this which it then "modifies" which is why it doesn't need to be within a variable
    errorMiddleware(error, req, res, next)

    expect(next).not.toHaveBeenCalled()

    expect(res.status).toHaveBeenCalledWith(401)

    expect(res.json).toHaveBeenCalledWith({
      code: error.code,
      message: error.message,
    })

    expect(res.status).toHaveBeenCalledTimes(1)
    expect(res.json).toHaveBeenCalledTimes(1)
  })
})

// 🐨 Write a test for the headersSent case
describe('headersSent Case', () => {
  it('calls next if headers were sent', () => {
    const req = {}
    const res = buildRes({headersSent: true})
    const next = jest.fn()

    const error = new Error('Blah')
    errorMiddleware(error, req, res, next)

    expect(next).toHaveBeenCalledWith(error)
    expect(next).toHaveBeenCalledTimes(1)
    expect(res.status).not.toHaveBeenCalled()
    expect(res.json).not.toHaveBeenCalled()
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
describe('Else case', () => {
  it('Should return a 500 error and the error object', () => {
    const error = new Error('Blah')
    const req = {}
    const res = buildRes()
    const next = jest.fn()

    errorMiddleware(error, req, res, next)

    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.status).toHaveBeenCalledTimes(1)
    expect(res.json).toHaveBeenCalledWith({
      message: error.message,
      stack: error.stack,
    })
    expect(res.json).toHaveBeenCalledTimes(1)
    expect(next).not.toHaveBeenCalled()
  })
})
