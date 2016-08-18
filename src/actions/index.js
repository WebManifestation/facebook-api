import fbAppId from '../fbAppId'

export const login = () => {
  return {
    type: 'ADD_TODO',
    fbAppId,
  }
}