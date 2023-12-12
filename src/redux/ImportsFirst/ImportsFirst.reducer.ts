import ImportsFirst, { ImportFirst } from "../../shared/Table/ImportsFirst/Table.mockdata"
import { Action } from ".."

export default function (state = ImportsFirst, action: Action): ImportFirst[] {
  switch (action.type) {
    case 'FETCH_IMPORTSFIRST':
      return [...action.payload]
    default:
      return state
  }
}
