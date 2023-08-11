"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("55f4a3e0-dfa8-48b9-8a4e-4820ff78e755");
  }, []);

  return null;
};
