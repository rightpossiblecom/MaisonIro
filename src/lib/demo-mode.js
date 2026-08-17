export function isDemoMode() {
  const flag = String(process.env.DEMO_MODE || "").toLowerCase();
  if (flag === "1" || flag === "true") return true;
  if (process.env.VERCEL === "1") return true;
  if (!process.env.DATABASE_URL) return true;
  return false;
}
