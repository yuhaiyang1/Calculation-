const todos = (state = [], action) => {
  switch (action.type) {
    case 'first':

      return {
        ...state,
        firstVal:action.val
      }
      case 'second':
        console.log(action.val,'reducer');
        return {
          ...state,
          secondVal:action.val
        }
        case 'select':
          console.log(action.val,'reducer');
          return {
            ...state,
            selectVal:action.val
          }
    default:
      return state
  }
}

export default todos
