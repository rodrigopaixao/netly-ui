import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';
export { animation, colors, componentTokens, elevation, radius, spacing, tailwindTokens, default as tokens, typography } from './tokens/index.js';

type NButtonVariant = "primary" | "secondary" | "ghost" | "destructive";
type NButtonSize = "sm" | "md" | "lg";
interface NButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: NButtonVariant;
    size?: NButtonSize;
    loading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    fullWidth?: boolean;
}
declare function NButton({ variant, size, loading, leftIcon, rightIcon, fullWidth, children, disabled, style, ...props }: NButtonProps): react_jsx_runtime.JSX.Element;

type NCardVariant = "default" | "elevated" | "brand" | "ghost";
interface NCardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: NCardVariant;
    padding?: "none" | "sm" | "md" | "lg";
    as?: React.ElementType;
}
declare function NCard({ variant, padding, as: Tag, children, style, ...props }: NCardProps): react_jsx_runtime.JSX.Element;
interface NStatCardProps {
    label: string;
    value: string;
    delta?: string;
    deltaType?: "positive" | "negative" | "neutral";
    icon?: string;
    style?: React.CSSProperties;
}
declare function NStatCard({ label, value, delta, deltaType, icon, style, }: NStatCardProps): react_jsx_runtime.JSX.Element;

type NInputType = "text" | "email" | "password" | "number" | "tel" | "url" | "search";
interface NInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
    label?: string;
    hint?: string;
    error?: string;
    type?: NInputType;
    leftIcon?: string;
    rightIcon?: string;
    onRightIconClick?: () => void;
    prefix?: string;
    suffix?: string;
}
declare function NInput({ label, hint, error, type, leftIcon, rightIcon, onRightIconClick, prefix, suffix, disabled, style, ...props }: NInputProps): react_jsx_runtime.JSX.Element;

type NBadgeVariant = "brand" | "success" | "warning" | "error" | "neutral" | "outline";
interface NBadgeProps {
    variant?: NBadgeVariant;
    children: React.ReactNode;
    dot?: boolean;
    style?: React.CSSProperties;
}
declare function NBadge({ variant, children, dot, style }: NBadgeProps): react_jsx_runtime.JSX.Element;

interface NToggleRowProps {
    label: string;
    description?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    style?: React.CSSProperties;
}
declare function NToggleRow({ label, description, checked, onChange, disabled, style, }: NToggleRowProps): react_jsx_runtime.JSX.Element;

interface NTabItem {
    key: string;
    label: string;
    icon: string;
}
interface NBottomTabProps {
    tabs: NTabItem[];
    activeKey: string;
    onChange: (key: string) => void;
    style?: React.CSSProperties;
}
declare function NBottomTab({ tabs, activeKey, onChange, style }: NBottomTabProps): react_jsx_runtime.JSX.Element;

interface NPriorityCardProps {
    rank: number;
    title: string;
    subtitle?: string;
    value?: string;
    valueDelta?: string;
    deltaType?: "positive" | "negative" | "neutral";
    tag?: string;
    tagVariant?: "brand" | "success" | "warning" | "error" | "neutral";
    highlighted?: boolean;
    style?: React.CSSProperties;
    onClick?: () => void;
}
declare function NPriorityCard({ rank, title, subtitle, value, valueDelta, deltaType, tag, tagVariant, highlighted, style, onClick, }: NPriorityCardProps): react_jsx_runtime.JSX.Element;

export { NBadge, type NBadgeProps, type NBadgeVariant, NBottomTab, type NBottomTabProps, NButton, type NButtonProps, type NButtonSize, type NButtonVariant, NCard, type NCardProps, type NCardVariant, NInput, type NInputProps, type NInputType, NPriorityCard, type NPriorityCardProps, NStatCard, type NStatCardProps, type NTabItem, NToggleRow, type NToggleRowProps };
