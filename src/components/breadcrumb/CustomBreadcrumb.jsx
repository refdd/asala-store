import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem as BreadcrumbItemBase,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function CustomBreadcrumb({ items }) {
  return (
    <div className="pt-5 z-10">
      <Breadcrumb>
        <BreadcrumbList>
          {items?.map((item, index) => (
            <div key={index} className="flex items-center">
              {index > 0 && (
                <BreadcrumbSeparator
                  className={"text-white hover:!text-bsMainBrown "}
                />
              )}
              {item.href ? (
                <BreadcrumbItemBase
                  className={
                    "!text-white hover:!text-bsMainBrown !text-lg !font-semibold"
                  }
                >
                  <BreadcrumbLink
                    className={"text-white hover:!text-bsMainBrown "}
                    href={item.href}
                  >
                    {item.label}
                  </BreadcrumbLink>
                </BreadcrumbItemBase>
              ) : (
                <BreadcrumbItemBase>
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                </BreadcrumbItemBase>
              )}
            </div>
          ))}
          {/* Optional: Dropdown for additional items */}
          {items?.length > 3 && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItemBase>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1">
                    <BreadcrumbEllipsis className="h-4 w-4" />
                    <span className="sr-only">Toggle menu</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {items.slice(2, -1).map((item, index) => (
                      <DropdownMenuItem key={index}>
                        <BreadcrumbLink href={item.href}>
                          {item.label}
                        </BreadcrumbLink>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </BreadcrumbItemBase>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
