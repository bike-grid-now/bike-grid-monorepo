import "@/styles/tailwind.css";
import Navbar from "@/components/Navbar";
import { getSiteSettings } from "@/lib/sanity/siteSettings";

// noinspection JSXNamespaceValidation
async function RootLayout({ children }: { children: React.ReactNode }) {
  const siteSettings = await getSiteSettings();

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navbar title={siteSettings.title} />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
