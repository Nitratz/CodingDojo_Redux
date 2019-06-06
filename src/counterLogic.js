export const INC_TYPE = 'INC';
export const DEC_TYPE = 'DEC';

export const INC_ACTION = {
  type: INC_TYPE
};

export const DEC_ACTION = {
  type: DEC_TYPE
};

const counterState = 0;

export function counterReducer(state = counterState, action) {
  switch (action.type) {
    case INC_TYPE:
      return state + 1;
    case DEC_TYPE:
      return state - 1;
    default:
      return state;
  }
}
