/**
 * @netly/ui — Design Tokens
 * Single source of truth for all Netly design values.
 * These tokens are consumed by components, Tailwind config, and NativeWind.
 *
 * Philosophy: "Neon Monolith" — Swiss-Industrial Precision with Digital Athleticism
 */
declare const colors: {
    readonly brand: {
        readonly DEFAULT: "#cffc00";
        readonly dim: "rgba(207, 252, 0, 0.08)";
        readonly subtle: "rgba(207, 252, 0, 0.15)";
        readonly border: "rgba(207, 252, 0, 0.2)";
        readonly borderStrong: "rgba(207, 252, 0, 0.3)";
        readonly on: "#0a0a0a";
    };
    readonly olive: {
        readonly DEFAULT: "#2a3300";
        readonly active: "#4a5c00";
        readonly border: "rgba(207, 252, 0, 0.2)";
    };
    readonly surface: {
        readonly base: "#0a0a0a";
        readonly raised: "#0f0f0f";
        readonly overlay: "#131313";
        readonly elevated: "#1a1a1a";
        readonly high: "#1e1e1e";
        readonly highest: "#2a2a2a";
    };
    readonly text: {
        readonly primary: "#ffffff";
        readonly secondary: "#e8e8e8";
        readonly tertiary: "#b0b0b0";
        readonly muted: "#6b6b6b";
        readonly disabled: "#484848";
        readonly inverse: "#0a0a0a";
    };
    readonly semantic: {
        readonly success: "#22c55e";
        readonly successDim: "rgba(34, 197, 94, 0.1)";
        readonly warning: "#f59e0b";
        readonly warningDim: "rgba(245, 158, 11, 0.1)";
        readonly error: "#ef4444";
        readonly errorDim: "rgba(239, 68, 68, 0.1)";
        readonly info: "#3b82f6";
        readonly infoDim: "rgba(59, 130, 246, 0.1)";
    };
    readonly chart: {
        readonly 1: "#cffc00";
        readonly 2: "#a3c900";
        readonly 3: "#4a5c00";
        readonly 4: "#2a3300";
        readonly 5: "#6b6b6b";
    };
};
declare const typography: {
    readonly fontFamily: {
        readonly display: readonly ["Inter", "system-ui", "sans-serif"];
        readonly body: readonly ["Inter", "system-ui", "sans-serif"];
        readonly mono: readonly ["JetBrains Mono", "Menlo", "monospace"];
    };
    readonly fontSize: {
        readonly "2xs": readonly ["10px", {
            readonly lineHeight: "14px";
            readonly letterSpacing: "0.06em";
        }];
        readonly xs: readonly ["12px", {
            readonly lineHeight: "16px";
            readonly letterSpacing: "0.04em";
        }];
        readonly sm: readonly ["13px", {
            readonly lineHeight: "20px";
            readonly letterSpacing: "0.01em";
        }];
        readonly base: readonly ["14px", {
            readonly lineHeight: "22px";
            readonly letterSpacing: "0";
        }];
        readonly md: readonly ["15px", {
            readonly lineHeight: "24px";
            readonly letterSpacing: "-0.01em";
        }];
        readonly lg: readonly ["17px", {
            readonly lineHeight: "26px";
            readonly letterSpacing: "-0.01em";
        }];
        readonly xl: readonly ["20px", {
            readonly lineHeight: "28px";
            readonly letterSpacing: "-0.02em";
        }];
        readonly "2xl": readonly ["24px", {
            readonly lineHeight: "30px";
            readonly letterSpacing: "-0.03em";
        }];
        readonly "3xl": readonly ["30px", {
            readonly lineHeight: "36px";
            readonly letterSpacing: "-0.03em";
        }];
        readonly "4xl": readonly ["36px", {
            readonly lineHeight: "42px";
            readonly letterSpacing: "-0.04em";
        }];
        readonly "5xl": readonly ["48px", {
            readonly lineHeight: "52px";
            readonly letterSpacing: "-0.04em";
        }];
        readonly "6xl": readonly ["64px", {
            readonly lineHeight: "68px";
            readonly letterSpacing: "-0.05em";
        }];
    };
    readonly fontWeight: {
        readonly regular: "400";
        readonly medium: "500";
        readonly semibold: "600";
        readonly bold: "700";
        readonly extrabold: "800";
        readonly black: "900";
    };
};
declare const spacing: {
    readonly 0: "0px";
    readonly 0.5: "2px";
    readonly 1: "4px";
    readonly 1.5: "6px";
    readonly 2: "8px";
    readonly 2.5: "10px";
    readonly 3: "12px";
    readonly 3.5: "14px";
    readonly 4: "16px";
    readonly 5: "20px";
    readonly 6: "24px";
    readonly 7: "28px";
    readonly 8: "32px";
    readonly 9: "36px";
    readonly 10: "40px";
    readonly 12: "48px";
    readonly 14: "56px";
    readonly 16: "64px";
    readonly 20: "80px";
    readonly 24: "96px";
};
declare const radius: {
    readonly none: "0px";
    readonly sm: "4px";
    readonly md: "8px";
    readonly lg: "12px";
    readonly xl: "16px";
    readonly "2xl": "20px";
    readonly "3xl": "24px";
    readonly full: "9999px";
};
declare const elevation: {
    readonly none: "none";
    readonly sm: "0 1px 2px rgba(0,0,0,0.4)";
    readonly md: "0 2px 8px rgba(0,0,0,0.5)";
    readonly lg: "0 4px 16px rgba(0,0,0,0.6)";
    readonly xl: "0 8px 32px rgba(0,0,0,0.7)";
    readonly brand: "0 0 20px rgba(207,252,0,0.15)";
};
declare const animation: {
    readonly duration: {
        readonly instant: "50ms";
        readonly fast: "100ms";
        readonly normal: "150ms";
        readonly moderate: "200ms";
        readonly slow: "300ms";
        readonly slower: "500ms";
    };
    readonly easing: {
        readonly default: "cubic-bezier(0.4, 0, 0.2, 1)";
        readonly in: "cubic-bezier(0.4, 0, 1, 1)";
        readonly out: "cubic-bezier(0, 0, 0.2, 1)";
        readonly spring: "cubic-bezier(0.34, 1.56, 0.64, 1)";
    };
};
declare const componentTokens: {
    readonly button: {
        readonly height: {
            readonly sm: "32px";
            readonly md: "40px";
            readonly lg: "48px";
        };
        readonly paddingX: {
            readonly sm: "12px";
            readonly md: "16px";
            readonly lg: "20px";
        };
        readonly fontSize: {
            readonly sm: "12px";
            readonly md: "13px";
            readonly lg: "14px";
        };
        readonly fontWeight: "700";
        readonly letterSpacing: "0.06em";
    };
    readonly input: {
        readonly height: "48px";
        readonly paddingX: "16px";
        readonly fontSize: "15px";
        readonly borderRadius: "16px";
        readonly background: "#1e1e1e";
        readonly border: "#2a2a2a";
        readonly borderFocus: "rgba(207, 252, 0, 0.2)";
        readonly placeholderColor: "#484848";
    };
    readonly card: {
        readonly background: "#131313";
        readonly border: "#2a2a2a";
        readonly borderRadius: "20px";
        readonly padding: "20px";
    };
    readonly badge: {
        readonly height: "22px";
        readonly paddingX: "8px";
        readonly fontSize: "11px";
        readonly fontWeight: "700";
        readonly letterSpacing: "0.08em";
        readonly borderRadius: "9999px";
    };
    readonly chat: {
        readonly shell: "#131313";
        readonly header: "#0f0f0f";
        readonly bubbleAI: "#1e1e1e";
        readonly bubbleUser: "#2a3300";
        readonly avatar: "#cffc00";
        readonly inputBg: "#1e1e1e";
        readonly chipBorder: "rgba(207, 252, 0, 0.3)";
    };
    readonly bottomTab: {
        readonly height: "60px";
        readonly background: "#0f0f0f";
        readonly activeContainer: "#4a5c00";
        readonly activeIcon: "#cffc00";
        readonly activeLabel: "#cffc00";
        readonly inactiveIcon: "#6b6b6b";
        readonly inactiveLabel: "#484848";
        readonly labelSize: "10px";
        readonly labelWeight: "700";
        readonly labelSpacing: "0.08em";
    };
};
declare const tailwindTokens: {
    readonly colors: {
        readonly "netly-brand": "#cffc00";
        readonly "netly-brand-dim": "rgba(207, 252, 0, 0.08)";
        readonly "netly-brand-subtle": "rgba(207, 252, 0, 0.15)";
        readonly "netly-brand-border": "rgba(207, 252, 0, 0.2)";
        readonly "netly-olive": "#2a3300";
        readonly "netly-olive-active": "#4a5c00";
        readonly "netly-surface-base": "#0a0a0a";
        readonly "netly-surface-raised": "#0f0f0f";
        readonly "netly-surface": "#131313";
        readonly "netly-surface-high": "#1e1e1e";
        readonly "netly-border": "#2a2a2a";
        readonly "netly-text": "#ffffff";
        readonly "netly-text-secondary": "#e8e8e8";
        readonly "netly-text-muted": "#6b6b6b";
        readonly "netly-text-disabled": "#484848";
        readonly "netly-success": "#22c55e";
        readonly "netly-warning": "#f59e0b";
        readonly "netly-error": "#ef4444";
    };
};
declare const tokens: {
    colors: {
        readonly brand: {
            readonly DEFAULT: "#cffc00";
            readonly dim: "rgba(207, 252, 0, 0.08)";
            readonly subtle: "rgba(207, 252, 0, 0.15)";
            readonly border: "rgba(207, 252, 0, 0.2)";
            readonly borderStrong: "rgba(207, 252, 0, 0.3)";
            readonly on: "#0a0a0a";
        };
        readonly olive: {
            readonly DEFAULT: "#2a3300";
            readonly active: "#4a5c00";
            readonly border: "rgba(207, 252, 0, 0.2)";
        };
        readonly surface: {
            readonly base: "#0a0a0a";
            readonly raised: "#0f0f0f";
            readonly overlay: "#131313";
            readonly elevated: "#1a1a1a";
            readonly high: "#1e1e1e";
            readonly highest: "#2a2a2a";
        };
        readonly text: {
            readonly primary: "#ffffff";
            readonly secondary: "#e8e8e8";
            readonly tertiary: "#b0b0b0";
            readonly muted: "#6b6b6b";
            readonly disabled: "#484848";
            readonly inverse: "#0a0a0a";
        };
        readonly semantic: {
            readonly success: "#22c55e";
            readonly successDim: "rgba(34, 197, 94, 0.1)";
            readonly warning: "#f59e0b";
            readonly warningDim: "rgba(245, 158, 11, 0.1)";
            readonly error: "#ef4444";
            readonly errorDim: "rgba(239, 68, 68, 0.1)";
            readonly info: "#3b82f6";
            readonly infoDim: "rgba(59, 130, 246, 0.1)";
        };
        readonly chart: {
            readonly 1: "#cffc00";
            readonly 2: "#a3c900";
            readonly 3: "#4a5c00";
            readonly 4: "#2a3300";
            readonly 5: "#6b6b6b";
        };
    };
    typography: {
        readonly fontFamily: {
            readonly display: readonly ["Inter", "system-ui", "sans-serif"];
            readonly body: readonly ["Inter", "system-ui", "sans-serif"];
            readonly mono: readonly ["JetBrains Mono", "Menlo", "monospace"];
        };
        readonly fontSize: {
            readonly "2xs": readonly ["10px", {
                readonly lineHeight: "14px";
                readonly letterSpacing: "0.06em";
            }];
            readonly xs: readonly ["12px", {
                readonly lineHeight: "16px";
                readonly letterSpacing: "0.04em";
            }];
            readonly sm: readonly ["13px", {
                readonly lineHeight: "20px";
                readonly letterSpacing: "0.01em";
            }];
            readonly base: readonly ["14px", {
                readonly lineHeight: "22px";
                readonly letterSpacing: "0";
            }];
            readonly md: readonly ["15px", {
                readonly lineHeight: "24px";
                readonly letterSpacing: "-0.01em";
            }];
            readonly lg: readonly ["17px", {
                readonly lineHeight: "26px";
                readonly letterSpacing: "-0.01em";
            }];
            readonly xl: readonly ["20px", {
                readonly lineHeight: "28px";
                readonly letterSpacing: "-0.02em";
            }];
            readonly "2xl": readonly ["24px", {
                readonly lineHeight: "30px";
                readonly letterSpacing: "-0.03em";
            }];
            readonly "3xl": readonly ["30px", {
                readonly lineHeight: "36px";
                readonly letterSpacing: "-0.03em";
            }];
            readonly "4xl": readonly ["36px", {
                readonly lineHeight: "42px";
                readonly letterSpacing: "-0.04em";
            }];
            readonly "5xl": readonly ["48px", {
                readonly lineHeight: "52px";
                readonly letterSpacing: "-0.04em";
            }];
            readonly "6xl": readonly ["64px", {
                readonly lineHeight: "68px";
                readonly letterSpacing: "-0.05em";
            }];
        };
        readonly fontWeight: {
            readonly regular: "400";
            readonly medium: "500";
            readonly semibold: "600";
            readonly bold: "700";
            readonly extrabold: "800";
            readonly black: "900";
        };
    };
    spacing: {
        readonly 0: "0px";
        readonly 0.5: "2px";
        readonly 1: "4px";
        readonly 1.5: "6px";
        readonly 2: "8px";
        readonly 2.5: "10px";
        readonly 3: "12px";
        readonly 3.5: "14px";
        readonly 4: "16px";
        readonly 5: "20px";
        readonly 6: "24px";
        readonly 7: "28px";
        readonly 8: "32px";
        readonly 9: "36px";
        readonly 10: "40px";
        readonly 12: "48px";
        readonly 14: "56px";
        readonly 16: "64px";
        readonly 20: "80px";
        readonly 24: "96px";
    };
    radius: {
        readonly none: "0px";
        readonly sm: "4px";
        readonly md: "8px";
        readonly lg: "12px";
        readonly xl: "16px";
        readonly "2xl": "20px";
        readonly "3xl": "24px";
        readonly full: "9999px";
    };
    elevation: {
        readonly none: "none";
        readonly sm: "0 1px 2px rgba(0,0,0,0.4)";
        readonly md: "0 2px 8px rgba(0,0,0,0.5)";
        readonly lg: "0 4px 16px rgba(0,0,0,0.6)";
        readonly xl: "0 8px 32px rgba(0,0,0,0.7)";
        readonly brand: "0 0 20px rgba(207,252,0,0.15)";
    };
    animation: {
        readonly duration: {
            readonly instant: "50ms";
            readonly fast: "100ms";
            readonly normal: "150ms";
            readonly moderate: "200ms";
            readonly slow: "300ms";
            readonly slower: "500ms";
        };
        readonly easing: {
            readonly default: "cubic-bezier(0.4, 0, 0.2, 1)";
            readonly in: "cubic-bezier(0.4, 0, 1, 1)";
            readonly out: "cubic-bezier(0, 0, 0.2, 1)";
            readonly spring: "cubic-bezier(0.34, 1.56, 0.64, 1)";
        };
    };
    componentTokens: {
        readonly button: {
            readonly height: {
                readonly sm: "32px";
                readonly md: "40px";
                readonly lg: "48px";
            };
            readonly paddingX: {
                readonly sm: "12px";
                readonly md: "16px";
                readonly lg: "20px";
            };
            readonly fontSize: {
                readonly sm: "12px";
                readonly md: "13px";
                readonly lg: "14px";
            };
            readonly fontWeight: "700";
            readonly letterSpacing: "0.06em";
        };
        readonly input: {
            readonly height: "48px";
            readonly paddingX: "16px";
            readonly fontSize: "15px";
            readonly borderRadius: "16px";
            readonly background: "#1e1e1e";
            readonly border: "#2a2a2a";
            readonly borderFocus: "rgba(207, 252, 0, 0.2)";
            readonly placeholderColor: "#484848";
        };
        readonly card: {
            readonly background: "#131313";
            readonly border: "#2a2a2a";
            readonly borderRadius: "20px";
            readonly padding: "20px";
        };
        readonly badge: {
            readonly height: "22px";
            readonly paddingX: "8px";
            readonly fontSize: "11px";
            readonly fontWeight: "700";
            readonly letterSpacing: "0.08em";
            readonly borderRadius: "9999px";
        };
        readonly chat: {
            readonly shell: "#131313";
            readonly header: "#0f0f0f";
            readonly bubbleAI: "#1e1e1e";
            readonly bubbleUser: "#2a3300";
            readonly avatar: "#cffc00";
            readonly inputBg: "#1e1e1e";
            readonly chipBorder: "rgba(207, 252, 0, 0.3)";
        };
        readonly bottomTab: {
            readonly height: "60px";
            readonly background: "#0f0f0f";
            readonly activeContainer: "#4a5c00";
            readonly activeIcon: "#cffc00";
            readonly activeLabel: "#cffc00";
            readonly inactiveIcon: "#6b6b6b";
            readonly inactiveLabel: "#484848";
            readonly labelSize: "10px";
            readonly labelWeight: "700";
            readonly labelSpacing: "0.08em";
        };
    };
    tailwindTokens: {
        readonly colors: {
            readonly "netly-brand": "#cffc00";
            readonly "netly-brand-dim": "rgba(207, 252, 0, 0.08)";
            readonly "netly-brand-subtle": "rgba(207, 252, 0, 0.15)";
            readonly "netly-brand-border": "rgba(207, 252, 0, 0.2)";
            readonly "netly-olive": "#2a3300";
            readonly "netly-olive-active": "#4a5c00";
            readonly "netly-surface-base": "#0a0a0a";
            readonly "netly-surface-raised": "#0f0f0f";
            readonly "netly-surface": "#131313";
            readonly "netly-surface-high": "#1e1e1e";
            readonly "netly-border": "#2a2a2a";
            readonly "netly-text": "#ffffff";
            readonly "netly-text-secondary": "#e8e8e8";
            readonly "netly-text-muted": "#6b6b6b";
            readonly "netly-text-disabled": "#484848";
            readonly "netly-success": "#22c55e";
            readonly "netly-warning": "#f59e0b";
            readonly "netly-error": "#ef4444";
        };
    };
};

export { animation, colors, componentTokens, tokens as default, elevation, radius, spacing, tailwindTokens, typography };
