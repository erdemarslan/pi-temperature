
/**
 * Measures the temperature and calls the callback with the error and
 * temperature.
 *
 * **Note:** Temperature is in celsius.
 */
export function measure (callback: (err: Error | null, temp?: number) => void) : void;
