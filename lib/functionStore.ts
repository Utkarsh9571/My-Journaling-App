const functionMap = new Map<string, Function>();

// Function to store a function and return its unique key
export function setFunction(key: string, func: Function): void {
    functionMap.set(key, func);
}

// Function to retrieve a function by its unique key
export function getFunction(key: string): Function | undefined {
    return functionMap.get(key);
}
