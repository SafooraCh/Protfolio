"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProfileAvatarProps {
  className?: string;
  size?: number;
  priority?: boolean;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  className,
  size = 340,
  priority = true,
}) => {
  const [imgSrc, setImgSrc] = useState<string>("/profile.jpg");
  const [hasError, setHasError] = useState<boolean>(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc("/profile-placeholder.svg");
    }
  };

  return (
    <div className={cn("relative flex items-center justify-center select-none", className)}>
      {/* Outer Glow Halo */}
      <div className="absolute -inset-4 rounded-full bg-emerald-500/15 blur-2xl animate-pulse" />

      {/* Orbital Animated Ring 1 */}
      <div
        className="absolute inset-[-14px] rounded-full border border-emerald-500/30 border-dashed animate-spin"
        style={{ animationDuration: "35s" }}
      />

      {/* Orbital Animated Ring 2 (counter) */}
      <div
        className="absolute inset-[-28px] rounded-full border border-emerald-400/15 border-dotted animate-spin"
        style={{ animationDuration: "45s", animationDirection: "reverse" }}
      />

      {/* Orbital Node Accents */}
      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400 animate-ping" />
      <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-emerald-400" />
      <div className="absolute top-1/2 -left-3.5 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-400" />
      <div className="absolute top-1/2 -right-3.5 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400" />

      {/* Image / Graphic Container */}
      <div
        className="relative rounded-full overflow-hidden border-2 border-emerald-500/40 shadow-2xl shadow-emerald-950/60 bg-zinc-950 group"
        style={{ width: size, height: size }}
      >
        <Image
          src={imgSrc}
          alt="Safoora Chaudhry - AI Developer"
          width={size}
          height={size}
          priority={priority}
          onError={handleError}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />

        {/* Soft Glass Shine Layer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/30 via-transparent to-white/10 pointer-events-none" />
      </div>
    </div>
  );
};
