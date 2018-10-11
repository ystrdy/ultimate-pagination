export function createRange(start: number, end: number): number[] {
  let range: number[] = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
}

export function map(arr: any[], callbackfn: (value: any, index: number, array: any[]) => {}, thisArg?: any): any[] {
  if (arr == null) {
    return [];
  }
  const len = arr.length;
  const out = new Array(len);
  for (let i = 0; i < len; i++) {
    out[i] = callbackfn(arr[i], i, arr);
  }
  return out;
}
