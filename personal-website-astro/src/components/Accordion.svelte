<script lang="ts">

export let imgSrc: string | undefined = undefined;
export let title: string;
export let tools: string[] | undefined = undefined;
export let additionalInfo: string[] | undefined = undefined;
</script>
    <div>
      <hr class="border-[color:hsla(0,0%,100%,0.2)]" />
      <ul class={styles.listContainer}>
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
            <hr className="border-[color:hsla(0,0%,100%,0.2)]" />
      </ul>
    </div>
