import {Pool} from "pg";

const conn = new Pool({
    host: "localhost",
    port:1433,
    user: "DESKTOP-GAOPJCU\SQLEXPRESS",
    password: "12345",
    database: "EXAMENFINAL",
   // ssl:true,     //Si esta en render, si es local no
});

export { conn };