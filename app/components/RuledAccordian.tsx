"use client";

import styles from "../ui/rulinglist.module.css";
import { ArrowUpRight, Minus, Plus } from "react-feather";
import React, { useCallback, useRef, useState } from "react";
import { Chip, ChipColor } from "./Chip";
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
  additionalInfo,
  imgSrc,
  children,
}: {
  id: number;
  title: string;
  link?: string;
  tools?: string[];
  additionalInfo?: string[];
  imgSrc?: string;
  children?: React.ReactNode;
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
        <img
          src={imgSrc}
          alt="oops... image didn't load"
          ref={projectImage}
          style={{
            position: "fixed",
            left: position.x,
            top: position.y,
            objectFit: "contain",
            transform: "translateX(-50%) translateY(-50%)",
            zIndex: 1040,
            opacity: 0,
            visibility: "hidden",
            pointerEvents: "none",
            borderRadius: "5px",
            width: "450px",
            maxHeight: "450px",
          }}
        />
      )}
      <li
        key={id}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setOpen(!isOpen)}
        className={styles.listItem}
        style={{
          gap: isOpen ? "0.5rem" : "0",
        }}
      >
        <div className={styles.listItemHeadingContainer}>
          <div className={styles.listItemHeadingContent}>
            {isOpen ? (
              <span>
                <Minus size="2rem" strokeWidth={0.8} />
              </span>
            ) : (
              <span>
                <Plus size="2rem" strokeWidth={0.8} />
              </span>
            )}
            <div className={styles.titleToolsContainer}>
              <h4>{title}</h4>
              <ul className="flex flex-row flex-wrap gap-1">
                {additionalInfo?.map((info, index) => (
                  <li key={index}>
                    <Chip color={ChipColor.WARNING} label={info} />
                  </li>
                ))}
                {tools?.map((tool, index) => (
                  <li key={index}>
                    <Chip color={ChipColor.INFO} label={tool} />
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
      <Line className="opacity-50" />
      <ul className={styles.listContainer}>
        {children.map((item) => (
          <>
            {item}
            <Line className="opacity-50" />
          </>
        ))}
      </ul>
    </div>
  );
};

export { Line, RuledAccordian, RuledAccordianList };
