import { type RouteConfig, index , route} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("designSystem", "routes/designSystem.tsx"),
  route("basicComponents", "routes/basicComponents.tsx"),
  route("responsiveTypography", "routes/responsiveTypography.tsx"),
  route("play", "routes/play.tsx"),
  route("login", "routes/login.tsx"),
  route("how-to-play", "routes/howToPlay.tsx"),
] satisfies RouteConfig;