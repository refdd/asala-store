import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "162.240.24.203",
      },
      {
        protocol: "https",
        hostname: "perfect-teamwork.com",
      },
      {
        protocol: "https",
        hostname: "asalafoods.perfect-teamwork.com",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
