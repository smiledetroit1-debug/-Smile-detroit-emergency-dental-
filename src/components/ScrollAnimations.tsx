import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};

export function ScrollAnimationProvider() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const smoothElements = Array.from(
      document.querySelectorAll<HTMLElement>(
        [
          "main h1",
          "main h2",
          "main h3",
          "main section > div",
          "main article",
          "main a",
          "main button",
        ].join(", ")
      )
    );

    const imageElements = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main img.image-pop-reveal, main video.image-pop-reveal"
      )
    );

    smoothElements.forEach((element, index) => {
      element.classList.remove("is-visible");
      element.classList.add("smooth-reveal");

      const delay = Math.min((index % 5) * 25, 100);
      element.style.setProperty("--reveal-delay", `${delay}ms`);
    });

    imageElements.forEach((element, index) => {
      element.classList.remove("is-visible");
      element.classList.add("premium-scroll-image");

      const delay = Math.min((index % 4) * 45, 135);
      element.style.setProperty("--reveal-delay", `${delay}ms`);
      element.style.setProperty("--image-scroll-y", "0px");
      element.style.setProperty("--image-scroll-scale", "1");
    });

    const allRevealElements = [...smoothElements, ...imageElements];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            target.classList.add("is-visible");
          } else {
            target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    allRevealElements.forEach((element) => observer.observe(element));

    let animationFrame = 0;

    const updateImageMotion = () => {
      const viewportHeight = window.innerHeight || 1;

      imageElements.forEach((element) => {
        const rect = element.getBoundingClientRect();

        if (rect.bottom < 0 || rect.top > viewportHeight) {
          return;
        }

        const imageCenter = rect.top + rect.height / 2;
        const viewportCenter = viewportHeight / 2;

        const distanceFromCenter = clamp(
          (imageCenter - viewportCenter) / viewportCenter,
          -1,
          1
        );

        const translateY = -distanceFromCenter * 34;
        const scale = 1.035 - Math.abs(distanceFromCenter) * 0.012;

        element.style.setProperty(
          "--image-scroll-y",
          `${translateY.toFixed(2)}px`
        );

        element.style.setProperty(
          "--image-scroll-scale",
          scale.toFixed(4)
        );
      });
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateImageMotion);
    };

    requestAnimationFrame(updateImageMotion);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  return null;
}