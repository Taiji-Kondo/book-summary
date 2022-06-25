import { buildConfig } from "payload/config";
import path from "path";
import Categories from "./collections/Categories";
import Posts from "./collections/Posts";
import Users from "./collections/Users";
import Media from "./collections/Media";
import Authors from "./collections/Authors";

export default buildConfig({
  serverURL: "http://localhost:4000",
  admin: {
    user: Users.slug,
  },
  collections: [Posts, Users, Media, Authors, Categories],
  typescript: {
    outputFile: path.resolve(
      __dirname,
      "../frontend/generated/payload-types.ts"
    ),
  },
  cors: ["http://localhost:3000"],
});
