import { SquareClient, SquareEnvironment } from "square";

export const squareClient = new SquareClient({
    token: process.env.EXPO_PUBLIC_SQUARE_ACCESS_TOKEN, // can't leave this in here.
    environment: SquareEnvironment.Sandbox
});