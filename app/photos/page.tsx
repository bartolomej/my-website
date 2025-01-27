import React from "react"
import type { Metadata } from "next"
import { ImageGrid } from "app/components/image-grid"

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default async function Photos() {
  const images = await getImages();

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Photos</h1>
      <ImageGrid
        columns={3}
        images={images.map(image => ({
          src: image.thumbnailUrl,
          alt: "",
          href: image.originalUrl,
        }))}
      />
    </section>
  );
}

type Photo = {
  thumbnailUrl: string;
  originalUrl: string;
}

async function getImages(): Promise<Photo[]> {
  const albumApiKey = "3OrJBDFCFd-ojm1248CJr3DrS1BPsKi_1chGlTZ1zOv0giQQSzvvHzXDDFRyhG56pJs"
  const serverUrl = "https://habibi.bartolomej.dev"
  const response = await fetch(`${serverUrl}/api/shared-links/me?key=${albumApiKey}`, {
    cache: "no-store",
  });
  const data = await response.json();
  return data.assets.map((asset: any): Photo => ({
    thumbnailUrl: `${serverUrl}/api/assets/${asset.id}/thumbnail?size=thumbnail&key=${albumApiKey}`,
    originalUrl: `${serverUrl}/api/assets/${asset.id}/original?key=${albumApiKey}`,
  }));
}
