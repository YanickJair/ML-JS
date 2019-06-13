import * as _ from 'lodash'

export function isListSizeEqual(list1: Array<number>, list2: Array<number>): boolean {
  if (list1.length == list2.length) return true
  return false
}