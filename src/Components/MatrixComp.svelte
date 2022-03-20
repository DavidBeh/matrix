<script lang="ts">
    import {Matrix} from "../Matrix";
    import MatrixCell from "./MatrixCell.svelte";

    export let mat = new Matrix(6, 6);


</script>

<div class="grid" style="--cols: {mat.columns}; --rows: {mat.rows};">
    {#each Array(mat.rows) as _, r}
        {#each Array(mat.columns) as _, c}
            <MatrixCell row="{r}" col="{c}"/>
        {/each}
    {/each}
</div>


<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(var(--cols), 1fr);
        grid-template-rows: repeat(var(--rows), 1fr);
    }
</style>