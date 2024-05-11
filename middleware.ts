import { clerkMiddleware, ClerkMiddlewareOptions } from "@clerk/nextjs/server";

export default clerkMiddleware({
  publicRoutes: ['/', '/api/webhooks/clerk']
} as ClerkMiddlewareOptions);

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};