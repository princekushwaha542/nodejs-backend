import SmoothScroll from "@/components/layout/SmoothScroll";
import ThemeProvider from "@/components/layout/ThemeProvider";
import CustomCursor from "@/components/effects/CustomCursor";
export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <ThemeProvider>
    <SmoothScroll>
      <CustomCursor />

      {children}

    </SmoothScroll>
  </ThemeProvider>
);
}