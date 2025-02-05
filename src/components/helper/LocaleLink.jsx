"use client"; // Mark the component as a Client Component
import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation"; // Use usePathname to get the current path

export default function LocaleLink({ href, children, ...props }) {
  const pathname = usePathname(); // Get the current pathname

  // Extract the locale from the pathname (e.g., "/ar/about" -> "ar")
  const locale = pathname.split("/")[1];

  // Prepend the locale to the href
  const localizedHref = `/${locale}${href}`;

  return (
    <Link href={localizedHref} {...props}>
      {children}
    </Link>
  );
}
