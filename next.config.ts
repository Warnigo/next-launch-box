import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
   eslint: {
    ignoreDuringBuilds: false,
  },
};

export default withNextIntl(nextConfig);
