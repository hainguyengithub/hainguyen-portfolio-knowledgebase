const dev = process.env.NODE_ENV !== "production";

export const server = dev ? "http://localhost:3000" : "https://zesty-sundae-b9fab7.netlify.app";
