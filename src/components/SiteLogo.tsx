interface SiteLogoProps {
  className?: string;
  /** Header logo stays eager. Footer and menus below the fold stay lazy so React does not preload them. */
  priority?: boolean;
}

/** Display size is at most 96px tall. The file is 558×192 (about 2×). */
export function SiteLogo({ className, priority = false }: SiteLogoProps) {
  return (
    <picture>
      <source srcSet="/media/logo-site.webp" type="image/webp" />
      <img
        src="/media/logo-site.png"
        alt="Logo Nutricionista Junior Coelho"
        width={558}
        height={192}
        decoding="async"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'auto' : 'low'}
        className={className}
      />
    </picture>
  );
}
