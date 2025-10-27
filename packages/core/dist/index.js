"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Button: () => Button,
  Card: () => Card,
  Timeline: () => Timeline,
  cn: () => cn,
  colors: () => colors,
  darkModeColors: () => darkModeColors,
  motionVariants: () => motionVariants,
  radius: () => radius,
  shadows: () => shadows,
  spacing: () => spacing,
  theme: () => theme,
  typography: () => typography
});
module.exports = __toCommonJS(index_exports);

// src/components/Button.tsx
var import_framer_motion = require("framer-motion");
var import_clsx = __toESM(require("clsx"));
var import_jsx_runtime = require("react/jsx-runtime");
var Button = ({
  variant = "primary",
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_framer_motion.motion.button,
    {
      whileTap: { scale: 0.97 },
      className: (0, import_clsx.default)(
        "rounded-xl px-4 py-2 font-medium transition-colors",
        variant === "primary" && "bg-black text-white hover:bg-gray-800",
        variant === "secondary" && "bg-gray-100 text-black hover:bg-gray-200",
        variant === "ghost" && "bg-transparent hover:bg-gray-100",
        className
      ),
      ...props
    }
  );
};

// src/utils/cn.ts
var import_clsx2 = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx2.clsx)(inputs));
}

// src/components/Card.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Card = ({ elevated = false, className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
  "div",
  {
    className: cn(
      "rounded-2xl border border-gray-200 bg-white p-4 dark:bg-gray-900 dark:border-gray-800",
      elevated && "shadow-soft",
      className
    ),
    ...props
  }
);

// src/components/Timeline.tsx
var import_framer_motion2 = require("framer-motion");
var import_jsx_runtime3 = require("react/jsx-runtime");
var Timeline = ({ items }) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "relative pl-6 border-l border-gray-200 dark:border-gray-800", children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
  import_framer_motion2.motion.div,
  {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay: i * 0.1 },
    viewport: { once: true },
    className: "mb-6",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "absolute -left-[6px] top-1.5 h-3 w-3 rounded-full bg-black dark:bg-white" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { className: "font-semibold text-gray-900 dark:text-white", children: item.title }),
      item.date && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "text-sm text-gray-500", children: item.date }),
      item.description && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "mt-1 text-gray-700 dark:text-gray-300", children: item.description })
    ]
  },
  i
)) });

// src/theme/index.ts
var colors = {
  primary: {
    DEFAULT: "#1D4ED8",
    // Tailwind blue-700
    light: "#3B82F6",
    // Tailwind blue-500
    dark: "#1E40AF"
    // Tailwind blue-800
  },
  secondary: {
    DEFAULT: "#D97706",
    // Tailwind amber-600
    light: "#F59E0B",
    // amber-500
    dark: "#B45309"
    // amber-700
  },
  neutral: {
    white: "#FFFFFF",
    black: "#000000",
    gray100: "#F3F4F6",
    gray900: "#111827"
  },
  success: "#22C55E",
  error: "#EF4444",
  warning: "#FACC15"
};
var darkModeColors = {
  background: "#111827",
  surface: "#1F2937",
  text: "#F3F4F6",
  muted: "#9CA3AF"
};
var typography = {
  fonts: {
    sans: "'Inter', system-ui, sans-serif",
    mono: "'Fira Code', monospace"
  },
  sizes: {
    xs: "0.75rem",
    // 12px
    sm: "0.875rem",
    // 14px
    base: "1rem",
    // 16px
    lg: "1.125rem",
    // 18px
    xl: "1.25rem",
    // 20px
    "2xl": "1.5rem",
    "3xl": "1.875rem"
  },
  weights: {
    normal: 400,
    medium: 500,
    bold: 700
  }
};
var spacing = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px"
};
var radius = {
  sm: "0.25rem",
  md: "0.5rem",
  lg: "1rem",
  xl: "1.25rem"
};
var shadows = {
  soft: "0 2px 10px rgba(0,0,0,0.06)",
  medium: "0 4px 20px rgba(0,0,0,0.1)"
};
var motionVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.3 } }
  },
  slideUp: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  },
  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
};
var theme = {
  colors,
  darkModeColors,
  typography,
  spacing,
  radius,
  shadows,
  motionVariants
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Card,
  Timeline,
  cn,
  colors,
  darkModeColors,
  motionVariants,
  radius,
  shadows,
  spacing,
  theme,
  typography
});
