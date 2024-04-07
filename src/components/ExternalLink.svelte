<script lang="ts">
  import PhArrowUpRightThin from "~icons/ph/arrow-up-right-thin";

  export let href: string;
  export let label: string;
</script>

<a
  {href}
  target="_blank"
  class={`
        text-blue
        mt-4
        inline-flex
        underline
        decoration-transparent 
        items-start
        duration-200
        hover:decoration-[color:rgb(var(--secondary-rgb))]
`}
>
  {label}
  <PhArrowUpRightThin class="w-6 h-6" />
</a>
