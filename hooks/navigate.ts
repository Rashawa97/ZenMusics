import React from "react";
import { NavigationContainerRef } from "@react-navigation/native";

export const navigationRef = React.createRef<NavigationContainerRef>();

export function navigate(name: string,params?: {}) {
  navigationRef.current?.navigate(name,params);
}