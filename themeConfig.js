import { breakpointsVuetify } from '@vueuse/core'
import { VIcon } from 'vuetify/components/VIcon'

// ❗ Logo SVG must be imported with ?raw suffix
import { defineThemeConfig } from '@core'
import { RouteTransitions, Skins } from '@core/enums'
import logo from '@images/logo.svg?raw'
import { AppContentLayoutNav, ContentWidth, FooterType, NavbarType } from '@layouts/enums'

export const { themeConfig, layoutConfig } = defineThemeConfig({
  app: {
    title: 'EduMaterialShop',
    // logo: h('div', { innerHTML: logo, style: 'line-height:0; color: #022D5A' }),
    logo: h('div', {
      style: {
        lineHeight: '0',
        color: '#022D5A',
        fontFamily: 'Arial, sans-serif', // Add a suitable font
        fontWeight: 'bold',             // Make the text bold for similar appearance
        fontSize: '1.5rem',             // Adjust size as needed
      }
    }, [
      h('span', { style: { color: '#022D5A' } }, 'EduMaterial'),
      h('span', { style: { color: '#FF6600' } }, 'Shop') // Orange for "Shop"
    ]),
    contentWidth: ContentWidth.Boxed,
    contentLayoutNav: AppContentLayoutNav.Horizontal,
    overlayNavFromBreakpoint: breakpointsVuetify.md + 16,
    enableI18n: true,
    theme: 'system',
    isRtl: false,
    skin: Skins.Default,
    routeTransition: RouteTransitions.Fade,
    iconRenderer: VIcon,
  },
  navbar: {
    type: NavbarType.Sticky,
    navbarBlur: true,
  },
  footer: { type: FooterType.Static },
  verticalNav: {
    isVerticalNavCollapsed: true,
    defaultNavItemIconProps: { icon: 'tabler-circle', size: 10 },
    isVerticalNavSemiDark: false,
  },
  horizontalNav: {
    type: 'sticky',
    transition: 'slide-y-reverse-transition',
  },
  icons: {
    chevronDown: { icon: 'tabler-chevron-down' },
    chevronRight: { icon: 'tabler-chevron-right', size: 18 },
    close: { icon: 'tabler-x' },
    verticalNavPinned: { icon: 'tabler-circle-dot' },
    verticalNavUnPinned: { icon: 'tabler-circle' },
    sectionTitlePlaceholder: { icon: 'tabler-separator' },
  },
})
