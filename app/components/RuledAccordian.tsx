"use client";

import styles from "../ui/rulinglist.module.css";
import { ArrowUpRight, Minus, Plus } from "react-feather";
import React, { useCallback, useRef, useState } from "react";
import { Chip } from "./Chip";
import classnames from "classnames";

import Image from "next/image";
import { useMousePosition } from "../hooks/useMousePosition";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Line = ({ className }: { className?: string }) => {
  return <hr className={classnames(styles.line, className)}></hr>;
};

const RuledAccordian = ({
  id,
  title,
  link,
  tools,
  imgSrc,
  children,
}: {
  id: number;
  title: string;
  link?: string;
  tools?: string[];
  imgSrc?: string;
  children?: string;
}) => {
  const [isOpen, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const position = useMousePosition();

  const projectImage = useRef(null);
  const accordionContainer = useRef(null);

  //
  // GSAP Animation
  //
  gsap.registerPlugin(useGSAP);

  // show image on hover
  useGSAP(() => {
    gsap.to(projectImage.current, { autoAlpha: isHovered && !isOpen ? 1 : 0 });
    gsap.to(projectImage.current, {
      left: position.x,
      top: position.y,
      delay: 0.01,
    });
  }, [isOpen, isHovered, position]);

  // open and close container
  useGSAP(() => {
    gsap.to(accordionContainer.current, {
      height: isOpen ? "auto" : 0,
      duration: 0.3,
      ease: "power3.inOut",
    });
  }, [isOpen]);

  return (
    <>
      {imgSrc && (
        <Image
          src={imgSrc}
          alt={title}
          ref={projectImage}
          width={300}
          height={100}
          style={{
            position: "fixed",
            left: position.x,
            top: position.y,
            objectFit: "cover",
            transform: "translateX(-50%) translateY(-50%)",
            zIndex: 9,
            opacity: 0,
            visibility: "hidden",
            pointerEvents: "none",
            borderRadius: "5px",
          }}
        />
      )}
      <li
        key={id}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={classnames(styles.listItem)}
        onClick={() => setOpen(!isOpen)}
      >
        <div className={styles.listItemHeadingContainer}>
          <div className={styles.listItemHeadingContent}>
            {isOpen ? (
              <span>
                <Minus size="3rem" strokeWidth={0.8} />
              </span>
            ) : (
              <span>
                <Plus size="3rem" strokeWidth={0.8} />
              </span>
            )}
            <div className={styles.titleToolsContainer}>
              <h3>{title}</h3>
              <ul className="flex flex-row flex-wrap gap-1">
                {tools?.map((tool, index) => (
                  <li key={index}>
                    <Chip label={tool} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.listItemHeadingContent}>
            {link && (
              <a href={link} target="_blank">
                <ArrowUpRight size="3rem" strokeWidth={0.8} />
              </a>
            )}
          </div>
        </div>
        <div
          style={{
            height: 0,
            overflow: "hidden",
          }}
          ref={accordionContainer}
        >
          {children}
        </div>
      </li>
    </>
  );
};

const RuledAccordianList = ({ children }: { children: React.ReactNode[] }) => {
  return (
    <div>
      <Line />
      <ul className={styles.listContainer}>
        {children.map((item) => (
          <>
            {item}
            <Line />
          </>
        ))}
      </ul>
    </div>
  );
};

export { Line, RuledAccordian, RuledAccordianList };
