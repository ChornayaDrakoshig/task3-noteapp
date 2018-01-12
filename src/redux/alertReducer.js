const initialState = {};

export function alert(state = initialState, action) {
  switch (action.type) {
    case 'ALERT_SUCCESS': return { type: 'alert-success', message: action.msg };
    case 'ALERT_ERROR': return { type: 'alert-danger', message: action.msg };
    case 'ALERT_CLEAR': return {};
    default: return state;
  }
}
export default alert;