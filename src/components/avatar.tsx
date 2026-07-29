import Image from "next/image";
import { profile } from "@/data/portfolio";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");
}

export function Avatar() {
  return (
    <div className="relative h-56 w-56 shrink-0 sm:h-64 sm:w-64 lg:h-72 lg:w-72">
      <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-accent to-accent-2 opacity-40 blur-2xl" />
      <div className="relative h-full w-full overflow-hidden rounded-full border border-border bg-card shadow-xl">
        {profile.avatarUrl ? (
          <Image
            src={profile.avatarUrl}
            alt={profile.name.en}
            fill
            sizes="(min-width: 1024px) 18rem, (min-width: 640px) 16rem, 14rem"
            className="object-cover"
            priority
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/20 to-accent-2/20">
            <span className="font-mono text-5xl font-bold text-accent">
              {getInitials(profile.name.en)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
