// export const SEVER = process.env.NODE_ENV === "production" ? "https://inshare-production.up.railway.app/" : "http://localhost:3000";
const SERVER = true ? "https://inshare-production.up.railway.app/" : "http://localhost:3000";

module.exports= {
    SERVER
}