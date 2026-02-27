"use client";

import React, { ReactNode } from "react";

import { AppProgressProvider as ProgressProvider } from "@bprogress/next";
import { ThemeProvider } from "next-themes";

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <ProgressProvider
      height="3px"
      color="#d4a93e"
      options={{ showSpinner: false, minimum: 0.2, trickleSpeed: 100 }}
    >
      <ThemeProvider
        defaultTheme="light"
        attribute="data-theme"
        disableTransitionOnChange={true}
        enableSystem={false}
      >
        {children}
      </ThemeProvider>
    </ProgressProvider>
  );
}
