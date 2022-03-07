import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTQwNmZiYmQ3ZjUwMDU1OGJmMTk4YyIsImlhdCI6MTY0NjY4MDg3MSwiZXhwIjoxNjQ2OTQwMDcxfQ.OFa1xDMngJMgCbu6Bqwmg1VeE8--3ti5SweeOORMEZk";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
