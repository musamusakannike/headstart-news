import { NextRequest, NextResponse } from "next/server";

function cleanDomainInput(raw: string | null): string | null {
  if (!raw) return null;
  let d = raw.trim().toLowerCase();
  d = d.replace(/^https?:\/\//, "");
  d = d.replace(/^.*@/, "");
  d = d.split("/")[0].split("?")[0].split("#")[0];
  d = d.replace(/:[0-9]+$/, "");
  if (!/^[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+$/.test(d)) {
    return null;
  }
  return d;
}

function getFallbackSvg(domain: string | null): string {
  const letter = domain ? domain.charAt(0).toUpperCase() : "N";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
  <rect width="48" height="48" rx="8" fill="#0A0E11"/>
  <rect x="2" y="2" width="44" height="44" rx="6" fill="#7C3AED"/>
  <text x="24" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="900" fill="#FFFFFF" text-anchor="middle">${letter}</text>
</svg>`;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const rawDomain = searchParams.get("domain");
  const cleanDomain = cleanDomainInput(rawDomain);

  if (!cleanDomain) {
    return new NextResponse(getFallbackSvg(null), {
      status: 200,
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=86400, s-maxage=604800, stale-while-revalidate=2592000",
      },
    });
  }

  try {
    const googleFaviconUrl = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(cleanDomain)}&sz=128`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const res = await fetch(googleFaviconUrl, {
      signal: controller.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
      },
      next: { revalidate: 86400 * 7 },
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const buffer = await res.arrayBuffer();
      const contentType = res.headers.get("content-type") || "image/png";

      return new NextResponse(buffer, {
        status: 200,
        headers: {
          "Content-Type": contentType,
          "Cache-Control":
            "public, max-age=86400, s-maxage=604800, stale-while-revalidate=2592000",
        },
      });
    }
  } catch {
    // Fall back to clean branded SVG on fetch failure or timeout
  }

  return new NextResponse(getFallbackSvg(cleanDomain), {
    status: 200,
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control":
        "public, max-age=86400, s-maxage=604800, stale-while-revalidate=2592000",
    },
  });
}
