import "dotenv/config";

export const ENV = {
 PORT : process.env.PORT || 5001,
 NODE_ENV : process.env.NODE_ENV,
}