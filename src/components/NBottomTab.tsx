/**
 * NBottomTab — Netly bottom navigation bar (Web)
 *
 * Circular icon container on active tab, all-caps labels.
 */

import React from "react";
import { colors, componentTokens } from "../tokens";

export interface NTabItem {
  key: string;
  label: string;
  icon: string; // material symbol name
}

export interface NBottomTabProps {
  tabs: NTabItem[];
  activeKey: string;
  onChange: (key: string) => void;
  style?: React.CSSProperties;
}

export function NBottomTab({ tabs, activeKey, onChange, style }: NBottomTabProps) {
  const { bottomTab } = componentTokens;

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        height: bottomTab.height,
        backgroundColor: bottomTab.background,
        borderTop: `1px solid ${colors.surface.highest}`,
        ...style,
      }}
    >
      {tabs.map((tab) => {
        const isActive = tab.key === activeKey;
        return (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
              flex: 1,
              height: "100%",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0",
            }}
          >
            {/* Icon container */}
            <div
              style={{
                width: "40px",
                height: "32px",
                borderRadius: "16px",
                backgroundColor: isActive ? bottomTab.activeContainer : "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background-color 200ms ease",
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: "20px",
                  color: isActive ? bottomTab.activeIcon : bottomTab.inactiveIcon,
                  transition: "color 200ms ease",
                }}
              >
                {tab.icon}
              </span>
            </div>

            {/* Label */}
            <span
              style={{
                fontSize: bottomTab.labelSize,
                fontWeight: bottomTab.labelWeight,
                letterSpacing: bottomTab.labelSpacing,
                textTransform: "uppercase",
                color: isActive ? bottomTab.activeLabel : bottomTab.inactiveLabel,
                fontFamily: "Inter, system-ui, sans-serif",
                transition: "color 200ms ease",
              }}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
