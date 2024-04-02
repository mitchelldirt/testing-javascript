// Testing Pure Functions
import {isPasswordAllowed} from 'utils/auth'
// 🐨 import the function that we're testing
// 💰 import {isPasswordAllowed} from '../auth'

// 🐨 write tests for valid and invalid passwords
// 💰 here are some you can use:
describe('password is valid', () => {
  // only one scenario of a valid password. No need to do more than one test because it would fundamentally test the same thing
  it('Says the password is valid', () => {
    expect(isPasswordAllowed('!aBc123')).toBeTruthy()
  })

  // Tests that return false because they don't conform to the allowed password function
  it('returns invalid because too short', () => {
    expect(isPasswordAllowed('a2c!')).toBeFalsy()
  })

  it('returns invalid because no alpha chars', () => {
    expect(isPasswordAllowed('123456!')).toBeFalsy()
  })

  it('Returns invalid because no uppercase letters', () => {
    expect(isPasswordAllowed('abc123!')).toBeFalsy()
  })

  it('Returns invalid because no lowercase letters', () => {
    expect(isPasswordAllowed('ABC123!')).toBeFalsy()
  })

  it('returns invalid because no non-alphanumeric chars', () => {
    expect(isPasswordAllowed('ABCdef123')).toBeFalsy()
  })
})

// valid:
// - !aBc123
//
// invalid:
// - a2c! // too short
// - 123456! // no alphabet characters
// - ABCdef! // no numbers
// - abc123! // no uppercase letters
// - ABC123! // no lowercase letters
// - ABCdef123 // no non-alphanumeric characters
