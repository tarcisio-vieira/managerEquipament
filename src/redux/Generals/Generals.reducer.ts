import { General } from "../../shared/Table/Generals/Table.mockdata" 
import { Action } from ".."

export default function (state: General[] = [], action: Action): General[] {
  switch (action.type) {
    case 'FETCH_GENERALS':
      return [...action.payload]
    default:
      return state
  }
}
