<script lang="ts">
  import LineMdCloseToMenuAltTransition from "~icons/line-md/close-to-menu-alt-transition";
  import LineMdMenuToCloseAltTransition from "~icons/line-md/menu-to-close-alt-transition";

  interface Section {
    name: string;
    path: string;
  }

  const sections: Section[] = [
    { name: "about", path: "/#about" },
    { name: "experience", path: "/#experience" },
    { name: "projects", path: "/#projects" },
    { name: "posts", path: "/posts" },
  ];

  let isOpen = false;

  let yScroll;
  $: scrolled = yScroll > 0;
</script>

<nav class:navWithBorder={scrolled}>
  <a href="/#"><img width={50} height={50} src="/icon.png" alt="logo" /></a>
  <ul
    class="md:flex md:flex-row hidden items-center justify-end font-mono gap-8 h-full"
  >
    {#each sections as section}
      <li>
        <a href={section.path}>{section.name}</a>
      </li>
    {/each}
  </ul>
  <div class="md:hidden relative flex flex-col items-end justify-center">
    <button class="cursor-pointer" on:click={() => (isOpen = !isOpen)}>
      {#if isOpen}
        <LineMdMenuToCloseAltTransition class="w-8 h-8 [&>*]:stroke-1" />
      {:else}
        <LineMdCloseToMenuAltTransition class="w-8 h-8 [&>*]:stroke-1" />
      {/if}
    </button>
    {#if isOpen}
      <ul
        class="text-black bg-white flex flex-col absolute p-2 gap-2 top-[100%] right-[5%]"
      >
        {#each sections as section}
          <li>
            <a href={section.path}>{section.name}</a>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</nav>

<svelte:window bind:scrollY={yScroll} />

<style>
  nav {
    @apply fixed z-10 right-0 top-0 w-full h-[var(--navbar-height)] bg-black flex flex-row items-center justify-between pr-[5%] pl-[5%] box-border;
  }

  .navWithBorder {
    @apply border-white/10 border-b border-solid;
  }

  li {
    @apply underline decoration-transparent hover:decoration-inherit duration-500 text-lg;
  }
</style>
