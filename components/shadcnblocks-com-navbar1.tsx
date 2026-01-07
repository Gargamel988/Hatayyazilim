"use client";

import {
  Menu,
  Globe,
  Smartphone,
  Search,
  Rocket,
  Home,
  Users,
  Briefcase,
  FolderOpen,
  BookOpen,
  Mail,
  Phone
} from "lucide-react";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { JSX } from "react";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: JSX.Element;
  items?: MenuItem[];
}

// Hatay Yazılım menü yapısı
const menuItems: MenuItem[] = [
  {
    title: "Ana Sayfa",
    url: "/",
    icon: <Home className="size-5 shrink-0" />
  },
  {
    title: "Hakkımızda",
    url: "/about",
    icon: <Users className="size-5 shrink-0" />
  },
  {
    title: "Hizmetler",
    url: "/services",
    icon: <Briefcase className="size-5 shrink-0" />,
    items: [
      {
        title: "Web Yazılım Geliştirme",
        description: "Modern ve ölçeklenebilir web uygulamaları",
        icon: <Globe className="size-5 shrink-0 text-indigo-400" />,
        url: "/services/web-yazilim",
      },
      {
        title: "Mobil Uygulama Geliştirme",
        description: "iOS ve Android için native uygulamalar",
        icon: <Smartphone className="size-5 shrink-0 text-violet-400" />,
        url: "/services/mobil-uygulama",
      },
      {
        title: "SEO & Dijital Danışmanlık",
        description: "Arama motorlarında üst sıralara çıkın",
        icon: <Search className="size-5 shrink-0 text-purple-400" />,
        url: "/services/seo-danismanlik",
      },
    ],
  },
  {
    title: "Projeler",
    url: "/projects",
    icon: <FolderOpen className="size-5 shrink-0" />
  },
  {
    title: "Blog",
    url: "/blog",
    icon: <BookOpen className="size-5 shrink-0" />
  },
  {
    title: "İletişim",
    url: "/contact",
    icon: <Mail className="size-5 shrink-0" />
  },
];

const mobileExtraLinks = [
  { name: "KVKK", url: "/kvkk" },
  { name: "Gizlilik", url: "/gizlilik" },
];

const Navbar1 = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030303]/80 backdrop-blur-xl border-b border-white/[0.05]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white leading-tight">
                Hatay Yazılım
              </span>
              <span className="text-[10px] text-white/40 uppercase tracking-widest hidden sm:block">
                Dijital Çözümler
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {menuItems.map((item) => renderMenuItem(item))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+905551234567"
              className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">+90 555 123 45 67</span>
            </a>
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white rounded-lg"
            >
              <Link href="/iletisim">Teklif Al</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-[#030303] border-white/[0.05] overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/" className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
                        <Rocket className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-lg font-bold text-white">
                        Hatay Yazılım
                      </span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-8 flex flex-col gap-6">
                  {/* Mobile Menu Items */}
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-2"
                  >
                    {menuItems.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  {/* Extra Links */}
                  <div className="border-t border-white/[0.05] pt-4">
                    <div className="grid grid-cols-2 gap-2">
                      {mobileExtraLinks.map((link, idx) => (
                        <Link
                          key={idx}
                          className="text-sm text-white/40 hover:text-white/70 transition-colors py-2"
                          href={link.url}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Mobile CTA */}
                  <div className="flex flex-col gap-3 pt-4">
                    <a
                      href="tel:+905551234567"
                      className="flex items-center justify-center gap-2 py-3 rounded-lg border border-white/10 text-white/70 hover:bg-white/5 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>+90 555 123 45 67</span>
                    </a>
                    <Button
                      asChild
                      className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white py-6 rounded-xl"
                    >
                      <Link href="/iletisim">Ücretsiz Teklif Al</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className="bg-transparent text-white/70 hover:text-white hover:bg-white/5 data-[state=open]:bg-white/5 data-[state=open]:text-white">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="w-80 p-3 bg-[#0a0a0a] border border-white/[0.05] rounded-xl">
            {item.items.map((subItem) => (
              <li key={subItem.title}>
                <NavigationMenuLink asChild>
                  <Link
                    className="flex select-none gap-4 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-white/[0.05] group"
                    href={subItem.url}
                  >
                    <div className="mt-0.5">
                      {subItem.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white group-hover:text-white">
                        {subItem.title}
                      </div>
                      {subItem.description && (
                        <p className="text-sm leading-snug text-white/40 mt-1">
                          {subItem.description}
                        </p>
                      )}
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <Link
      key={item.title}
      className="inline-flex h-10 items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
      href={item.url}
    >
      {item.title}
    </Link>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="py-3 text-white hover:text-white hover:no-underline">
          <div className="flex items-center gap-3">
            {item.icon}
            <span className="font-medium">{item.title}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="mt-1 pb-2">
          <div className="flex flex-col gap-1 pl-8">
            {item.items.map((subItem) => (
              <Link
                key={subItem.title}
                className="flex items-center gap-3 rounded-lg p-3 text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors"
                href={subItem.url}
              >
                {subItem.icon}
                <div>
                  <div className="text-sm font-medium">{subItem.title}</div>
                  {subItem.description && (
                    <p className="text-xs text-white/40 mt-0.5">
                      {subItem.description}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link
      key={item.title}
      href={item.url}
      className="flex items-center gap-3 py-3 text-white/70 hover:text-white transition-colors"
    >
      {item.icon}
      <span className="font-medium">{item.title}</span>
    </Link>
  );
};

export { Navbar1 };
