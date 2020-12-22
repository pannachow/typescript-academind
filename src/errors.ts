let userInput: unknown;
let user_Name: string;

userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    user_Name = userInput;
}

function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}

generateError("An error occurred!", 500);