import { db } from "./server/db";

await db.user.create({
    data: {
        emailAddress: "test@example.com",
        firstName: "Cristian",
        lastName: "Cirje",
    }
})

console.log("done")