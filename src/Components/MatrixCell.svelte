<script lang="ts">
    import {createEventDispatcher} from "svelte";

    export let row: number;
    export let col: number;

</script>

<input class="cell" style="--row: {row}; --col: {col}">
<style>
    .cell {

        grid-row: var(--row);
        grid-column: var(--col);
    
    }
</style>