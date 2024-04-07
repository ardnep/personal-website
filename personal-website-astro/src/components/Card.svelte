<script lang="ts">
  import Chip, { ChipColor } from "./Chip.svelte";
  import ExternalLink from "./ExternalLink.svelte";

  export let imgSrc: string = "/placeholder.png";
  export let title: string;
  export let description: string | undefined = undefined;
  export let tools: string[] | undefined = undefined;
  export let additionalInfo: string[] | undefined = undefined;
  export let link: string | undefined = undefined;
</script>

<div
  class={`
          rounded-md
          border
          border-solid
          border-[color:hsla(0,0%,100%,0.2)]
          flex
          flex-col
          min-h-[500px]
          w-[400px]
          `}
>
  <div class={`h-80`}>
    <img
      src={imgSrc}
      alt={title}
      class={`h-full w-full object-cover rounded-t-md`}
    />
  </div>
  <div
    class={`
          p-4
          flex 
          flex-col
          gap-2
      `}
  >
    <h4 class="text-wrap">{title}</h4>
    {#if tools || additionalInfo}
      <div class="flex flex-row flex-wrap gap-1">
        {#each additionalInfo || [] as info}
          <Chip label={info} color={ChipColor.WARNING} />
        {/each}
        {#each tools || [] as tool}
          <Chip label={tool} color={ChipColor.INFO} />
        {/each}
      </div>
    {/if}
    <p class="opacity-70">{description}</p>
    {#if link}
      <ExternalLink href={link} label="View Project" />
    {/if}
  </div>
</div>
