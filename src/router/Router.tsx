import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";

type RouterContextValue = {
  pathname: string;
  search: string;
  hash: string;
  params: Record<string, string>;
  navigate: (to: string, options?: { replace?: boolean }) => void;
};

const RouterContext = createContext<RouterContextValue | null>(null);

function readLocation() {
  return {
    pathname: window.location.pathname,
    search: window.location.search,
    hash: window.location.hash,
  };
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [loc, setLoc] = useState(readLocation);

  useEffect(() => {
    const onPop = () => setLoc(readLocation());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = useCallback((to: string, options?: { replace?: boolean }) => {
    const url = new URL(to, window.location.origin);
    if (options?.replace) {
      window.history.replaceState({}, "", url.pathname + url.search + url.hash);
    } else {
      window.history.pushState({}, "", url.pathname + url.search + url.hash);
    }
    setLoc({
      pathname: url.pathname,
      search: url.search,
      hash: url.hash,
    });
    window.scrollTo(0, 0);
  }, []);

  const value = useMemo(
    () => ({
      pathname: loc.pathname,
      search: loc.search,
      hash: loc.hash,
      params: {},
      navigate,
    }),
    [loc.hash, loc.pathname, loc.search, navigate],
  );

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function useRouter() {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error("useRouter must be used within RouterProvider");
  return ctx;
}

export function useNavigate() {
  return useRouter().navigate;
}

export function usePathname() {
  return useRouter().pathname;
}

export function useSearchParams() {
  const { search } = useRouter();
  return useMemo(() => new URLSearchParams(search), [search]);
}

type RouteDef = {
  path: string;
  element: ReactNode;
};

function matchRoute(path: string, pathname: string) {
  const pathParts = path.split("/").filter(Boolean);
  const locParts = pathname.split("/").filter(Boolean);
  if (path.endsWith("*")) {
    return { matched: pathname.startsWith(path.slice(0, -1)), params: {} as Record<string, string> };
  }
  if (pathParts.length !== locParts.length) return null;
  const params: Record<string, string> = {};
  for (let i = 0; i < pathParts.length; i += 1) {
    const part = pathParts[i];
    const loc = locParts[i];
    if (part.startsWith(":")) {
      params[part.slice(1)] = decodeURIComponent(loc);
    } else if (part !== loc) {
      return null;
    }
  }
  return { matched: true, params };
}

export function Routes({ routes, fallback }: { routes: RouteDef[]; fallback?: ReactNode }) {
  const { pathname } = useRouter();
  for (const route of routes) {
    const match = matchRoute(route.path, pathname);
    if (match?.matched) {
      return <RouteMatchProvider params={match.params}>{route.element}</RouteMatchProvider>;
    }
  }
  return <>{fallback ?? null}</>;
}

const ParamsContext = createContext<Record<string, string>>({});

function RouteMatchProvider({ params, children }: { params: Record<string, string>; children: ReactNode }) {
  return <ParamsContext.Provider value={params}>{children}</ParamsContext.Provider>;
}

export function useParams<T extends Record<string, string>>() {
  return useContext(ParamsContext) as T;
}

export function Link({
  to,
  children,
  className,
  onClick,
  ...rest
}: {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const navigate = useNavigate();
  return (
    <a
      href={to}
      className={className}
      onClick={(event) => {
        onClick?.(event);
        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.altKey ||
          event.ctrlKey ||
          event.shiftKey
        ) {
          return;
        }
        event.preventDefault();
        navigate(to);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}

export function NavLink({
  to,
  children,
  className,
  activeClassName,
  exact = false,
  onClick,
  ...rest
}: {
  to: string;
  children: ReactNode;
  className?: string | ((active: boolean) => string);
  activeClassName?: string;
  exact?: boolean;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">) {
  const pathname = usePathname();
  const targetPath = to.split("?")[0];
  const active = exact ? pathname === targetPath : pathname === targetPath || pathname.startsWith(`${targetPath}/`);
  const resolved = typeof className === "function" ? className(active) : [className, active ? activeClassName : ""].filter(Boolean).join(" ");
  return (
    <Link to={to} className={resolved} onClick={onClick} aria-current={active ? "page" : undefined} {...rest}>
      {children}
    </Link>
  );
}
