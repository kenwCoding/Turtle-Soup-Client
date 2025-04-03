import { type RouteConfig, index , route} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("designSystem", "routes/designSystem.tsx"),
  route("basicComponents", "routes/basicComponents.tsx"),
] satisfies RouteConfig;