
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  type ReactElement,
  type ReactNode,
  cloneElement,
  useRef,
  isValidElement,
} from "react";

/* -------------------------------- Letter -------------------------------- */

const Letter: React.FC<{
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  char: string;
}> = ({ index, total, scrollYProgress, char }) => {
  const start = index / total;
  const end = start + 1 / total;

  const color = useTransform(
    scrollYProgress,
    [start, end],
    ["#d1d5db", "#111827"]
  );

  return (
    <motion.span style={{ color }} className="inline-block">
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
};

/* ---------------------------- ScrollAnimation ---------------------------- */

interface ScrollAnimationProps {
  children: ReactElement;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // full range
  });

  /* -------- STEP 1: count total letters (deep traversal) -------- */
  const countLetters = (node: ReactNode): number => {
    if (typeof node === "string") return node.length;

    if (Array.isArray(node))
      return node.reduce((acc, n) => acc + countLetters(n), 0);

    if (isValidElement(node))
      return countLetters((node as ReactElement<{ children?: ReactNode }>).props.children);

    return 0;
  };

  const totalLetters = countLetters(children);
  let currentIndex = 0;

  /* -------- STEP 2: render nodes recursively -------- */
  const renderNode = (node: ReactNode): ReactNode => {
    if (typeof node === "string") {
      return node.split("").map((char) => (
        <Letter
          key={currentIndex}
          index={currentIndex++}
          total={totalLetters}
          scrollYProgress={scrollYProgress}
          char={char}
        />
      ));
    }

    if (Array.isArray(node)) {
      return node.map((child, i) => (
        <span key={i}>{renderNode(child)}</span>
      ));
    }

    if (isValidElement(node)) {
      return cloneElement(node, {
        children: renderNode((node as ReactElement<{ children?: ReactNode }>).props.children),
      } as React.HTMLAttributes<HTMLElement>);
    }

    return node;
  };

  /* -------- STEP 3: wrap & attach scroll ref -------- */
  return (
    <div ref={containerRef}>
      {cloneElement(children, {
        children: renderNode((children as ReactElement<{ children?: ReactNode }>).props.children),
      } as React.HTMLAttributes<HTMLElement>)}
    </div>
  );
};

export default ScrollAnimation;
