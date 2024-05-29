export const formikHelper = <T extends object>(
    touched: { [key: string]: boolean },
    errors: T,
    values: T
) => {
    const touchedKeys = Object.entries(touched).map(([key, value]) => {
        // console.log("Check key", key);
        // console.log("Touched", touched);

        if (value) return key;
    });

    const finalErrors: string[] = [];

    Object.entries(errors).forEach(([key, value]) => {
        // console.log("Check values", values);
        // console.log("Checkerrors", errors);
        // console.log("key", key);
        // console.log("Check value", values)
        if (touchedKeys.includes(key) && values) finalErrors.push(value);
    });

    return finalErrors;
};
