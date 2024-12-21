import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextVideo(nextConfig, { folder: "./" });
