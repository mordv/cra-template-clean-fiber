export const isValued = <T extends unknown>(val?: T | null | undefined): val is T => val !== undefined && val !== null;
