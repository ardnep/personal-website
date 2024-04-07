<script lang="ts" context="module">
  export enum ChipColor {
    INFO = "#4791DD",
    WARNING = "#F9A826",
    SUCCESS = "#34A853",
    DANGER = "#EA4335",
  }
</script>

<script lang="ts">
  export let label: string;
  export let color: ChipColor;
</script>

<div
  class="flex flex-row justify-center items-center rounded-[16px] border border-solid pl-2 pr-2 pt-0.5 pb-0.5"
  style={`background-color: ${color}20; border-color: ${color}60; color: ${color}; font-size: 0.875rem;`}
>
  {label}
</div>
