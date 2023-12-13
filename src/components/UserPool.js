import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_oCjKdVBcp",
    ClientId: "3egvjapa6taoqb3nhpifj2vp15"
}

export default new CognitoUserPool(poolData);