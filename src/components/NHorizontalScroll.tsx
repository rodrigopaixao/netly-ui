/**
 * @netly/ui — NHorizontalScroll (Web)
 * Horizontally scrollable card rail with active/selected state.
 * Three variants: NCategoryRail, NOfferRail, NStatChipRail
 */

import React, { useState } from "react";
import { colors } from "../tokens";

// ─── Types ────────────────────────────────────────────────────────────────

export interface NCategoryItem {
  id: string;
  label: string;
  icon?: string;
  color?: string;
}

export interface NCategoryRailProps {
  items: NCategoryItem[];
  value?: string;
  onChange?: (id: string) => void;
  className?: string;
}

export interface NOfferItem {
  id: string;
  company: string;
  role: string;
  base: string;
  totalComp: string;
  delta: string;
  deltaPositive: boolean;
  tag?: string;
  tagColor?: string;
}

export interface NOfferRailProps {
  items: NOfferItem[];
  value?: string;
  onChange?: (id: string) => void;
  className?: string;
}

export interface NStatChip {
  id: string;
  label: string;
  value: string;
  delta?: string;
  deltaPositive?: boolean | null;
}

export interface NStatChipRailProps {
  items: NStatChip[];
  value?: string;
  onChange?: (id: string) => void;
  className?: string;
}

// ─── NCategoryRail ────────────────────────────────────────────────────────

export function NCategoryRail({ items, value, onChange, className = "" }: NCategoryRailProps) {
  const [internal, setInternal] = useState(items[0]?.id ?? "");
  const active = value ?? internal;

  const handleSelect = (id: string) => {
    setInternal(id);
    onChange?.(id);
  };

  return (
    <div
      className={`flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory ${className}`}
      style={{ scrollbarWidth: "none" }}
    >
      {items.map((item) => {
        const isActive = active === item.id;
        const accent = item.color ?? colors.brand.DEFAULT;
        return (
          <button
            key={item.id}
            onClick={() => handleSelect(item.id)}
            className="snap-start shrink-0 w-44 h-44 rounded-2xl flex flex-col justify-between p-4 transition-all duration-200 text-left"
            style={{
              background: isActive ? colors.olive.active : colors.surface.elevated,
              border: `2px solid ${isActive ? accent : colors.surface.highest}`,
            }}
          >
            {item.icon && (
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: accent + "33" }}
              >
                <span className="material-symbols-rounded text-2xl" style={{ color: accent }}>
                  {item.icon}
                </span>
              </div>
            )}
            <p
              className="font-bold text-base leading-tight"
              style={{ color: isActive ? accent : colors.text.primary }}
            >
              {item.label}
            </p>
          </button>
        );
      })}
    </div>
  );
}

// ─── NOfferRail ───────────────────────────────────────────────────────────

export function NOfferRail({ items, value, onChange, className = "" }: NOfferRailProps) {
  const [internal, setInternal] = useState(items[0]?.id ?? "");
  const active = value ?? internal;

  const handleSelect = (id: string) => {
    setInternal(id);
    onChange?.(id);
  };

  return (
    <div
      className={`flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory ${className}`}
      style={{ scrollbarWidth: "none" }}
    >
      {items.map((item) => {
        const isActive = active === item.id;
        const tagColor = item.tagColor ?? colors.brand.DEFAULT;
        return (
          <button
            key={item.id}
            onClick={() => handleSelect(item.id)}
            className="snap-start shrink-0 w-52 rounded-2xl flex flex-col gap-3 p-4 transition-all duration-200 text-left"
            style={{
              background: isActive ? colors.olive.active : colors.surface.elevated,
              border: `2px solid ${isActive ? colors.brand.DEFAULT : colors.surface.highest}`,
            }}
          >
            {item.tag && (
              <span
                className="self-start text-[10px] font-bold tracking-widest px-2 py-0.5 rounded-full"
                style={{ color: tagColor, background: tagColor + "22" }}
              >
                {item.tag}
              </span>
            )}
            <div>
              <p className="font-black text-lg leading-tight" style={{ color: colors.text.primary }}>
                {item.company}
              </p>
              <p className="text-xs" style={{ color: colors.text.muted }}>
                {item.role}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-baseline">
                <span className="text-xs" style={{ color: colors.text.muted }}>Base</span>
                <span className="text-sm font-bold" style={{ color: colors.text.primary }}>{item.base}</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-xs" style={{ color: colors.text.muted }}>Total</span>
                <span
                  className="text-sm font-black"
                  style={{ color: isActive ? colors.brand.DEFAULT : colors.text.primary }}
                >
                  {item.totalComp}
                </span>
              </div>
            </div>
            <div
              className="flex items-center gap-1 text-xs font-bold"
              style={{ color: item.deltaPositive ? colors.semantic.success : colors.semantic.error }}
            >
              <span className="material-symbols-rounded text-sm">
                {item.deltaPositive ? "arrow_upward" : "arrow_downward"}
              </span>
              {item.delta}
            </div>
          </button>
        );
      })}
    </div>
  );
}

// ─── NStatChipRail ────────────────────────────────────────────────────────

export function NStatChipRail({ items, value, onChange, className = "" }: NStatChipRailProps) {
  const [internal, setInternal] = useState(items[0]?.id ?? "");
  const active = value ?? internal;

  const handleSelect = (id: string) => {
    setInternal(id);
    onChange?.(id);
  };

  return (
    <div
      className={`flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory ${className}`}
      style={{ scrollbarWidth: "none" }}
    >
      {items.map((chip) => {
        const isActive = active === chip.id;
        return (
          <button
            key={chip.id}
            onClick={() => handleSelect(chip.id)}
            className="snap-start shrink-0 rounded-xl px-4 py-3 flex flex-col gap-1 transition-all duration-200 text-left"
            style={{
              minWidth: 120,
              background: isActive ? colors.olive.active : colors.surface.elevated,
              border: `1.5px solid ${isActive ? colors.brand.DEFAULT : colors.surface.highest}`,
            }}
          >
            <p
              className="text-[10px] font-bold tracking-widest uppercase"
              style={{ color: colors.text.muted }}
            >
              {chip.label}
            </p>
            <p
              className="text-lg font-black leading-none"
              style={{ color: isActive ? colors.brand.DEFAULT : colors.text.primary }}
            >
              {chip.value}
            </p>
            {chip.delta && (
              <p
                className="text-[11px] font-semibold"
                style={{
                  color:
                    chip.deltaPositive === true
                      ? colors.semantic.success
                      : chip.deltaPositive === false
                      ? colors.semantic.error
                      : colors.text.muted,
                }}
              >
                {chip.delta}
              </p>
            )}
          </button>
        );
      })}
    </div>
  );
}
