import "dotenv/config";

 const ENV = {
 PORT : process.env.PORT || 5001,
 NODE_ENV : process.env.NODE_ENV,
 MONGO_URI : process.env.MONGO_URI,
 CLERK_PUBLISHABLE_KEY : process.env.CLERK_PUBLISHABLE_KEY,
 CLERK_SECRET_KEY : process.env.CLERK_SECRET_KEY,
 INNGEST_EVENT_KEY : process.env.INNGEST_EVENT_KEY,
 INNGEST_SIGNING_KEY : process.env.INNGEST_SIGNING_KEY
}
console.log("Loaded MONGO_URI:", ENV.MONGO_URI);


export default ENV;
