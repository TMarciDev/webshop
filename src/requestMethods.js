import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTQwNmZiYmQ3ZjUwMDU1OGJmMTk4YyIsImlhdCI6MTY0NjQ3MzM0NiwiZXhwIjoxNjQ2NzMyNTQ2fQ.ozJ7Qe09LjNn5eokBQUc5xtje2hhakVh8kxO1428W7M";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
